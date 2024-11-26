import { Request, Response } from "express";
import { Asistencia } from "@models";
import { successResponse, errorResponse } from "@fn";
import { Op } from 'sequelize';

const obtenerAsistencias = async (req: Request, res: Response) => {
    try {
        const data = await Asistencia.findAll({
            where: {
                hora_entrada: {
                    [Op.ne]: null
                }
            }
        });

        return res.status(200).json({ data });
    } catch (error) {
        console.error("Error al obtener las asistencias:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default obtenerAsistencias;