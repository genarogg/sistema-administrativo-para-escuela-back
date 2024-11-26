import { Request, Response } from "express";
import { Empleado, Bitacora } from "@models";
import { successResponse, errorResponse } from "@fn";

const registerEmpleado = async (req: Request, res: Response) => {

    console.log("req.body", req.body);

    const {
        tipo_empleado,
        nombres,
        apellidos,
        ci,
        fecha_nac: fecha_nacimiento,
        telefono,
        correo_electronico,
        fecha_ingreso_mppe,
        direccion_de_habitacion,
        codigo_cargo,
        dependencia_nominal,
        estatus,
        reposo_permiso,
        anos_servicio,
        observaciones,
        titulo_pregrado,
        area_docente_especialista,
        grado_seccion,
        funcion_trabajo,
        acarigua,
        titulo_obtenido,
        inscrito_psuv,
        pertenece_movimiento_social,
        carnet_patria_codigo,
        carnet_patria_serial,
        centro_votacion,
        tipo_voto
    } = req.body;

    // todos los campos son requeridos
    if (!req.body) {
        return res.status(400).json(
            errorResponse({ message: "Todos los campos son requeridos" })
        );
    }

    try {
        // Crear el empleado en la base de datos
        const empleado = await Empleado.create({
            tipo_empleado,
            nombres,
            apellidos,
            ci,
            fecha_nacimiento,
            telefono,
            correo_electronico,
            fecha_ingreso_mppe,
            direccion_de_habitacion,
            codigo_cargo,
            dependencia_nominal,
            estatus,
            reposo_permiso,
            anos_servicio,
            observaciones,
            titulo_pregrado,
            area_docente_especialista,
            grado_seccion,
            funcion_trabajo,
            acarigua,
            titulo_obtenido,
            inscrito_psuv,
            pertenece_movimiento_social,
            carnet_patria_codigo,
            carnet_patria_serial,
            centro_votacion,
            tipo_voto
        });

        // Crear una entrada en la bitácora
        await Bitacora.create({
            usuario: req.body.user.email,
            accion: `Se creó el empleado exitosamente: ${empleado.nombres} ${empleado.apellidos}`,
        });

        return res.status(201).json(
            successResponse({ message: "Empleado creado exitosamente" })
        );

    } catch (error) {
        console.error("Error al crear el empleado:", error);
        return res.status(500).json(errorResponse({ message: "Error en el servidor" }));
    }
};

export default registerEmpleado;