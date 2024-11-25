import { Request, Response } from "express";
import { User, Bitacora } from "@models";

import { encriptarContrasena, successResponse, errorResponse } from "@fn";

const registerPost = async (req: Request, res: Response) => {

    const {
        nombres: nombre,
        apellidos: apellido,
        email,
        password,
        rool: role,
        ci,
        cargo_institucional: cargoInstitucional
    } = req.body;


    // todos los campos son requeridos
    if (!req.body) {
        return res.status(400).json(
            errorResponse({ message: "Todos los campos son requeridos" })
        );
    }

    // Generar un hash de la contraseña
    const hashedPassword = encriptarContrasena({ password });


    try {
        // Crear el usuario en la base de datos
        const usuario = await User.create({
            nombre,
            apellido,
            email,
            password: hashedPassword,
            role,
            ci,
            cargoInstitucional,
        });

        // Crear una entrada en la bitácora
        await Bitacora.create({
            usuario: req.body.user.email,
            accion: `Se creó el usuario exitosamente: ${usuario.email}`,
        });


        return res.status(201).json(
            successResponse({ message: "Usuario creado exitosamente" })
        );

    } catch (error) {
        console.error("Error al crear el usuario:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default registerPost;