import { Request, Response } from "express";
import { Empleado, Asistencia } from "@models";
import { successResponse, errorResponse } from "@fn";
import moment from "moment";

const horasEntrada = {
    docentes: "07:30:00",
    obreros: "06:30:00",
    administrativos: "07:30:00",
    cocineros: "07:00:00"
};

const horasSalida = {
    docentes: "14:40:00",
    obreros: "13:00:00",
    administrativos: "15:00:00",
    cocineros: "15:00:00"
};

const registrarAsistencia = async (req: Request, res: Response) => {
    const { ci, comentario, tipoAction } = req.body;

    try {
        const empleado = await Empleado.findOne({ where: { ci } });

        if (!empleado) {
            return res.status(404).json(errorResponse({ message: "Empleado no encontrado" }));
        }

        const asistenciaEmpleado = await Asistencia.findOne({ where: { ci, fecha: moment().format("YYYY-MM-DD") } });
        const tipoEmpleado = empleado.tipo_empleado as keyof typeof horasEntrada;

        const horaActual = moment().format("HH:mm:ss");

        if (tipoAction === "entrada") {
            if (!comentario && horaActual > horasEntrada[tipoEmpleado]) {
                return res.status(400).json(errorResponse({ message: "No se puede registrar la entrada después de la hora permitida" }));
            }
            if (asistenciaEmpleado) {
                await asistenciaEmpleado.update({
                    hora_entrada: horaActual,
                    comentario_entrada: comentario
                });
            }

            return res.status(200).json(successResponse({ message: "Registro de entrada correcto" }));
        }

        if (!asistenciaEmpleado || !asistenciaEmpleado.hora_entrada) {
            return res.status(400).json(errorResponse({ message: "No tiene registro de entrada" }));
        }

        if (tipoAction === "almuerzo") {
            if (!comentario && (horaActual < "12:00:00" || horaActual > "13:00:00")) {
                return res.status(400).json(errorResponse({ message: "No se puede registrar la hora de almuerzo fuera del rango permitido" }));
            }
            await asistenciaEmpleado.update({
                hora_almuerzo: horaActual,
                comentario_almuerzo: comentario
            });
            return res.status(200).json(successResponse({ message: "Registro de hora de almuerzo correcto" }));
        }

        if (tipoAction === "salida") {
            if (!comentario && horaActual < horasSalida[tipoEmpleado]) {
                return res.status(400).json(errorResponse({ message: "No se puede registrar la salida antes de la hora de entrada" }));
            }
            await asistenciaEmpleado.update({
                hora_salida: horaActual,
                comentario_salida: comentario
            });
            return res.status(200).json(successResponse({ message: "Registro de salida correcto" }));
        }

        return res.status(400).json(errorResponse({ message: "Acción no permitida" }));
    } catch (error) {
        console.error("Error al registrar la asistencia:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default registrarAsistencia;