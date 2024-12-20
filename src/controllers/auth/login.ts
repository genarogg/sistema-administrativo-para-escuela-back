import { Request, Response } from "express";
import { User } from "@models";
import { compararContrasena, successResponse, errorResponse, generarToken } from "@fn"


const loginPost = async (req: Request, res: Response) => {
    const { correo: email, contrasena: password } = req.body;

    // Validar campos obligatorios
    if (!email || !password) {
        return res.status(400).json(
            errorResponse({ message: "Faltan campos obligatorios." })
        );
    }

    try {
        const usuario = await User.findOne({ where: { email } });

        if (!usuario) {
            return res.status(400).json(errorResponse({ message: "Usuario no existe" }));
        }


        if (!compararContrasena({ password, hashedPassword: usuario.password })) {
            return res.status(400).json(
                errorResponse({ message: "Contraseña incorrecta" })
            );
        }

        const token = generarToken({ id: usuario.id });

        // Envía el token en la respuesta
        res.status(200).json(
            successResponse({
                message: "Inicio de sesión exitoso",
                token,
            }));

    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default loginPost;