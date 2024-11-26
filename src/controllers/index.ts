// archivo para importar todos los controladores
import registerPost from "./auth/register";
import loginPost from "./auth/login";

import registrarEstudiantePost from "./estudiante/registrar";
import getAllEstudiante from "./estudiante/getAll";

import registerEmpleado from "./empleado/registrar";
import generarAsistencia from "./asistencia/general"
import obtenerAsistencias from "./asistencia/getAll"

export {
    registerPost,
    loginPost,
    registrarEstudiantePost,
    getAllEstudiante,
    registerEmpleado,
    generarAsistencia,
    obtenerAsistencias
};