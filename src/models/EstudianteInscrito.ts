import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class EstudianteInscrito extends Model {
    declare id: number;
    declare apellidos: string;
    declare nombres: string;
    declare sex: string;
    declare nacionalidad: string;
    declare ci: string;
    declare fecha_nacimiento: string;
    declare lugar_nacimiento: string;
    declare entd_federativa: string;
    declare plantel_de_procedencia: string;
    declare talla: string;
    declare peso: string;
    declare medidas: string;
    declare edad: string;
    declare lateralidad: string;
    declare talla_camisa: string;
    declare talla_pantalon: string;
    declare talla_zapato: string;
    declare via_de_acceso_al_lugar_donde_vive: string;
    declare con_quien_vive: string;
    declare condicion_especial: string;
    declare observacion_de_condicion: string;
    declare el_estudiante_consume_medicamento: string;
    declare observacion_de_medicamento: string;
    declare inicio_periodo_escolar: string;
    declare fin_periodo_escolar: string;
    declare usuario: string;
    declare created_at: string;
    declare updated_at: string;
    declare representante_apellidos: string;
    declare representante_nombres: string;
    declare representante_nacionalidad: string;
    declare representante_cedula: string;
    declare representante_urb_br: string;
    declare representante_fecha_nacimiento: string;
    declare representante_direccion_habitacion_av: string;
    declare representante_calle: string;
    declare representante_casa_apartamento: string;
    declare representante_numero_habitacion: string;
    declare representante_referencia: string;
    declare representante_ciudad: string;
    declare representante_parroquia: string;
    declare representante_estado: string;
    declare representante_telefono_habitacion: string;
    declare representante_telefono_personal: string;
    declare representante_email: string;
    declare representante_profesion: string;
    declare representante_lugarTrabajo: string;
    declare representante_telefono_trabajo: string;
    declare representante_nivelAcademico: string;
    declare representante_cargo: string;
}

EstudianteInscrito.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },

        apellidos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nacionalidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ci: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lugar_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entd_federativa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plantel_de_procedencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        peso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medidas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lateralidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla_camisa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla_pantalon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        talla_zapato: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        via_de_acceso_al_lugar_donde_vive: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        con_quien_vive: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        condicion_especial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observacion_de_condicion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        el_estudiante_consume_medicamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observacion_de_medicamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        inicio_periodo_escolar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fin_periodo_escolar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        representante_apellidos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_nombres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_nacionalidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_cedula: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_urb_br: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_direccion_habitacion_av: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_calle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_casa_apartamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_numero_habitacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_referencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_parroquia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_telefono_habitacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_telefono_personal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_profesion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_lugarTrabajo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_telefono_trabajo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_nivelAcademico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        representante_cargo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "estudiante_familia",
        sequelize: sequelize,
        freezeTableName: true,
    }
);

export default EstudianteInscrito;