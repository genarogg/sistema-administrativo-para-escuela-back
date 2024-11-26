// archivo para importar todos los controladores
import registerPost from "./auth/register";
import loginPost from "./auth/login";

import registrarEstudiantePost from "./estudiante/registrar";
import getAllEstudiante from "./estudiante/getAll";

import registerEmpleado from "./empleado/registrar";
import obtenerEmpleados from "./empleado/getAll";

import generarAsistencia from "./asistencia/general"
import obtenerAsistencias from "./asistencia/getAll"
import registrarAsistencia from "./asistencia/registrarAsistencia"

import obtenerBitacora from "./bitacora/getAll";

export {
    registerPost,
    loginPost,

    registrarEstudiantePost,
    getAllEstudiante,

    registerEmpleado,
    obtenerEmpleados,

    generarAsistencia,
    obtenerAsistencias,
    registrarAsistencia,

    obtenerBitacora
};