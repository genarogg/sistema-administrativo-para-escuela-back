import { Empleado } from "@models";

const crearEmpleados = async () => {
    try {
        const empleados = [];

        for (let i = 1; i <= 50; i++) {
            empleados.push({
                tipo_empleado: i % 2 === 0 ? 'Docente' : 'Administrativo',
                nombres: `Nombre${i}`,
                apellidos: `Apellido${i}`,
                ci: 10000000 + i,
                fecha_nacimiento: '1980-01-01',
                telefono: `041412345${i}`,
                correo_electronico: `email${i}@example.com`,
                fecha_ingreso_mppe: '2000-01-01',
                direccion_de_habitacion: `Dirección ${i}`,
                codigo_cargo: `00${i}`,
                dependencia_nominal: i % 2 === 0 ? 'Educación' : 'Administración',
                estatus: i % 2 === 0,
                reposo_permiso: i % 3 === 0 ? 'Ninguno' : 'Permiso',
                anos_servicio: i % 20,
                observaciones: `Observación ${i}`,
                titulo_pregrado: `Título ${i}`,
                area_docente_especialista: `Área ${i}`,
                grado_seccion: `Grado ${i}`,
                funcion_trabajo: `Función ${i}`,
                acarigua: 'Acarigua',
                titulo_obtenido: `Título ${i}`,
                inscrito_psuv: i % 2 === 0,
                pertenece_movimiento_social: `Movimiento ${i}`,
                carnet_patria_codigo: `123456789${i}`,
                carnet_patria_serial: `987654321${i}`,
                centro_votacion: `Centro ${i}`,
                tipo_voto: i % 2 === 0 ? 'Nacional' : 'Internacional',
            });
        }

        await Empleado.bulkCreate(empleados);

        console.log("Datos de prueba insertados correctamente");
    } catch (error) {
        console.error("Error al insertar datos de prueba:", error);
    }
};

export default crearEmpleados;