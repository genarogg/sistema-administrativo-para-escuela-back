// archivo para importar todos los controladores
import registerPost from "./auth/register";
import loginPost from "./auth/login";

import registrarEstudiantePost from "./estudiante/registrar";

import registerEmpleado from "./empleado/registrar";
import generarAsistencia from "./asistencia/general"

export {
    registerPost,
    loginPost,
    registrarEstudiantePost,
    registerEmpleado,
    generarAsistencia
};