import { Request, Response } from "express";
import { EstudianteInscrito, Bitacora } from "@models";
import { successResponse, errorResponse } from "@fn";

const registrarEstudiantePost = async (req: Request, res: Response) => {
    console.log("req.body", req.body);
    const {
        apellidos,
        nombres,
        sex,
        nacionalidad,
        ci,
        fecha_nacimiento,
        lugar_nacimiento,
        entd_federativa,
        plantel_de_procedencia,
        talla,
        peso,
        medidas,
        edad,
        lateralidad,
        talla_camisa,
        talla_pantalon,
        talla_zapato,
        via_de_acceso_al_lugar_donde_vive,
        con_quien_vive,
        condicion_especial,
        observacion_de_condicion,
        el_estudiante_consume_medicamento,
        observacion_de_medicamento,
        inicio_periodo_escolar,
        fin_periodo_escolar,
        user: usuario,
        representante_apellidos,
        representante_nombres,
        representante_nacionalidad,
        representante_cedula,
        representante_urb_br,
        representante_fecha_nacimiento,
        representante_direccion_habitacion_av,
        representante_calle,
        representante_casa_apartamento,
        representante_numero_habitacion,
        representante_referencia,
        representante_ciudad,
        representante_parroquia,
        representante_estado,
        representante_telefono_habitacion,
        representante_telefono_personal,
        representante_email,
        representante_profesion,
        representante_lugarTrabajo,
        representante_telefono_trabajo,
        representante_nivelAcademico,
        representante_cargo
    } = req.body;

    console.log({
        apellidos,
        nombres,
        sex,
        nacionalidad,
        ci,
        fecha_nacimiento,
        lugar_nacimiento,
        entd_federativa,
        plantel_de_procedencia,
        talla,
        peso,
        medidas,
        edad,
        lateralidad,
        talla_camisa,
        talla_pantalon,
        talla_zapato,
        via_de_acceso_al_lugar_donde_vive,
        con_quien_vive,
        condicion_especial,
        observacion_de_condicion,
        el_estudiante_consume_medicamento,
        observacion_de_medicamento,
        inicio_periodo_escolar,
        fin_periodo_escolar,
        usuario,
        representante_apellidos,
        representante_nombres,
        representante_nacionalidad,
        representante_cedula,
        representante_urb_br,
        representante_fecha_nacimiento,
        representante_direccion_habitacion_av,
        representante_calle,
        representante_casa_apartamento,
        representante_numero_habitacion,
        representante_referencia,
        representante_ciudad,
        representante_parroquia,
        representante_estado,
        representante_telefono_habitacion,
        representante_telefono_personal,
        representante_email,
        representante_profesion,
        representante_lugarTrabajo,
        representante_telefono_trabajo,
        representante_nivelAcademico,
        representante_cargo
    });


    // todos los campos son requeridos
    if (!req.body) {
        return res.status(400).json(
            errorResponse({ message: "Todos los campos son requeridos" })
        );
    }

    try {
        // Crear el registro en la base de datos
        const estudianteFamilia = await EstudianteInscrito.create({
            apellidos,
            nombres,
            sex,
            nacionalidad,
            ci,
            fecha_nacimiento,
            lugar_nacimiento,
            entd_federativa,
            plantel_de_procedencia,
            talla,
            peso,
            medidas,
            edad,
            lateralidad,
            talla_camisa,
            talla_pantalon,
            talla_zapato,
            via_de_acceso_al_lugar_donde_vive,
            con_quien_vive,
            condicion_especial,
            observacion_de_condicion,
            el_estudiante_consume_medicamento,
            observacion_de_medicamento,
            inicio_periodo_escolar,
            fin_periodo_escolar,
            representante_apellidos,
            representante_nombres,
            representante_nacionalidad,
            representante_cedula,
            representante_urb_br,
            representante_fecha_nacimiento,
            representante_direccion_habitacion_av,
            representante_calle,
            representante_casa_apartamento,
            representante_numero_habitacion,
            representante_referencia,
            representante_ciudad,
            representante_parroquia,
            representante_estado,
            representante_telefono_habitacion,
            representante_telefono_personal,
            representante_email,
            representante_profesion,
            representante_lugarTrabajo,
            representante_telefono_trabajo,
            representante_nivelAcademico,
            representante_cargo
        });

        // Crear una entrada en la bitácora
        await Bitacora.create({
            usuario: req.body.user.email,
            accion: `Se creó el registro de estudiante y familia exitosamente: ${estudianteFamilia.ci}`,
        });

        return res.status(201).json(
            successResponse({ message: "Registro de estudiante y familia creado exitosamente" })
        );

    } catch (error) {
        console.error("Error al crear el registro de estudiante y familia:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default registrarEstudiantePost;