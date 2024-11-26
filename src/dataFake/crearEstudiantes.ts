import { EstudianteInscrito } from "@models";

const crearEstudiantesInscritos = async () => {
    console.log("Insertando datos de prueba");

    try {
        for (let i = 1; i <= 50; i++) {
            await EstudianteInscrito.create({
                apellidos: `Apellido${i}`,
                nombres: `Nombre${i}`,
                sex: i % 2 === 0 ? 'M' : 'F',
                nacionalidad: 'Venezolana',
                ci: `12345678${i}`,
                fecha_nacimiento: '2005-05-15',
                lugar_nacimiento: 'Caracas',
                entd_federativa: 'Distrito Capital',
                plantel_de_procedencia: 'Unidad Educativa Nacional',
                talla: '1.75m',
                peso: '70kg',
                medidas: '90-70-90',
                edad: '16',
                lateralidad: 'Derecho',
                talla_camisa: 'M',
                talla_pantalon: '32',
                talla_zapato: '42',
                via_de_acceso_al_lugar_donde_vive: 'Transporte público',
                con_quien_vive: 'Padres',
                condicion_especial: 'Ninguna',
                observacion_de_condicion: 'N/A',
                el_estudiante_consume_medicamento: 'No',
                observacion_de_medicamento: 'N/A',
                inicio_periodo_escolar: '2021-09-01',
                fin_periodo_escolar: '2022-07-15',
                usuario: 'admin',
                representante_apellidos: `RepresentanteApellido${i}`,
                representante_nombres: `RepresentanteNombre${i}`,
                representante_nacionalidad: 'Venezolana',
                representante_cedula: `87654321${i}`,
                representante_urb_br: 'Urb. La California',
                representante_fecha_nacimiento: '1980-03-25',
                representante_direccion_habitacion_av: 'Av. Principal',
                representante_calle: 'Calle 10',
                representante_casa_apartamento: 'Apartamento 5B',
                representante_numero_habitacion: '5B',
                representante_referencia: 'Cerca del centro comercial',
                representante_ciudad: 'Caracas',
                representante_parroquia: 'Petare',
                representante_estado: 'Miranda',
                representante_telefono_habitacion: `021212345${i}`,
                representante_telefono_personal: `041412345${i}`,
                representante_email: `representante${i}@example.com`,
                representante_profesion: 'Ingeniera',
                representante_lugarTrabajo: 'PDVSA',
                representante_telefono_trabajo: `021276543${i}`,
                representante_nivelAcademico: 'Universitario',
                representante_cargo: 'Gerente',
            });
        }

        console.log("Datos de prueba insertados correctamente");
    } catch (error) {
        console.error("Error al insertar datos de prueba:", error);
    }
};

export default crearEstudiantesInscritos;