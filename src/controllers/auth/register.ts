import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "@models/User";
import { bitacoraService } from "@model";

const addUsuario = async (req: Request, res: Response) => {
    const {
        nombres: usuarioNombre,
        apellidos: usuarioApellido,
        email: usuarioEmail,
        password,
        rool: usuarioRole,
        ci,
        cargo_institucional,
        usuario
    } = req.body;

    // todos los campos son requeridos
    if (
        !usuarioNombre ||
        !usuarioApellido ||
        !usuarioEmail ||
        !password ||
        !usuarioRole ||
        !ci ||
        !cargo_institucional ||
        !usuario
    ) {
        return res.status(400).json({
            message: "Todos los campos son requeridos",
            type: "error",
        });
    }

    // Generar un hash de la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        // Crear el usuario en la base de datos
        const newUser = await User.create({
            nombre: usuarioNombre,
            apellido: usuarioApellido,
            email: usuarioEmail,
            password: hashedPassword,
            role: usuarioRole,
            ci: ci,
            cargoInstitucional: cargo_institucional,
        });

        // Crear una entrada en la bitácora
        await bitacoraService.createBitacora({
            usuario,
            accion: `Se creó el usuario exitosamente: ${usuarioEmail}`,
        });

        return res.status(201).json({ message: "Se creó el usuario exitosamente", type: "success" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el usuario",
            type: "error",
            error: error.message,
        });
    }
};

export { addUsuario };