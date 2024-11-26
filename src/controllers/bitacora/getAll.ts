import { Request, Response } from "express";
import { Bitacora } from "@models";
import { errorResponse } from "@fn";


const obtenerBitacora = async (req: Request, res: Response) => {
    try {
        const data = await Bitacora.findAll();

        return res.status(200).json({ data });

    } catch (error) {
        console.error("Error al obtener las bitacora:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default obtenerBitacora;