import { Request, Response } from "express";
import { EstudianteInscrito } from "@models";
import { errorResponse } from "@fn";


const obtenerEstudiantes = async (req: Request, res: Response) => {
    try {
        const data = (await EstudianteInscrito.findAll()).reverse();

        return res.status(200).json({ data });

    } catch (error) {
        console.error("Error al obtener las estudiantes:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default obtenerEstudiantes;