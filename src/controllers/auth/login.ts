import { Request, Response } from "express";
import { User } from "@models";
import { compararContrasena, successResponse, errorResponse, generarToken } from "@fn"


const loginPost = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validar campos obligatorios
    if (!email || !password) {
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    try {
        const usuario = await User.findOne({ where: { email } });

        if (!usuario) {
            return res.status(400).json({ error: "Usuario no existe" });
        }


        if (!compararContrasena({ password, hashedPassword: usuario.password })) {
            return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
        }

        const token = generarToken({ id: usuario.id });

        const respuesta = successResponse({
            message: "Inicio de sesión exitoso",
            token,
        });

        // Envía el token en la respuesta
        res.status(200).json(respuesta);

    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
};

export default loginPost;