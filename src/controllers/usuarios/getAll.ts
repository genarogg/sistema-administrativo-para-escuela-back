import { Request, Response } from "express";
import { User } from "@models";
import { errorResponse } from "@fn";


const obtenerUsuarios = async (req: Request, res: Response) => {
    try {
        const data = (await User.findAll()).reverse();

        return res.status(200).json({ data });

    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default obtenerUsuarios;