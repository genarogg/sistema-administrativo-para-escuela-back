import moment from "moment";
import cron from "node-cron";
import { Empleado, Asistencia } from "@models";

// Función para generar registros de asistencia
export const generateAsistencia = async () => {
    try {
        // Obtener todos los empleados
        const empleados = await Empleado.findAll();



        for (const empleado of empleados) {
            const { nombres, apellidos, ci } = empleado.dataValues;
            // Crear la asistencia personal
            await Asistencia.create({
                nombres,
                apellidos,
                ci,
                fecha: moment().format("YYYY-MM-DD"),
            });
        }

        console.log("Registros de asistencia generados correctamente");
    } catch (error) {
        console.error("Error al generar registros de asistencia:", error);
    }
};

const asistencia = async () => {
    try {
        const ultimoRegistro = await Asistencia.findOne({
            order: [['fecha', 'DESC']]
        });

        if (!ultimoRegistro) {
            await generateAsistencia();
            return;
        }

        const fechaHoy = moment().format("YYYY-MM-DD");

        if (ultimoRegistro && ultimoRegistro.fecha === fechaHoy) {
            console.log("La asistencia ya ha sido generada para el día de hoy.");
        }

    } catch (error) {
        console.error(
            "Error al obtener el último registro de asistencia personal:",
            error
        );
    }
};

// Programar la ejecución de la función asistencia cada 24 horas
cron.schedule('0 0 * * *', () => {
    console.log('Ejecutando tarea programada para generar asistencia diaria');
    asistencia();
});

export default asistencia;