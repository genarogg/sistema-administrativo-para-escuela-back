import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class EstudianteInscrito extends Model {
    public id!: number;
    public apellidos!: string;
    public nombres!: string;
    public sex!: string;
    public nacionalidad!: string;
    public ci!: string;
    public fecha_nacimiento!: string;
    public lugar_nacimiento!: string;
    public entd_federativa!: string;
    public plantel_de_procedencia!: string;
    public talla!: string;
    public peso!: string;
    public medidas!: string;
    public edad!: string;
    public lateralidad!: string;
    public talla_camisa!: string;
    public talla_pantalon!: string;
    public talla_zapato!: string;
    public via_de_acceso_al_lugar_donde_vive!: string;
    public con_quien_vive!: string;
    public condicion_especial!: string;
    public observacion_de_condicion!: string;
    public el_estudiante_consume_medicamento!: string;
    public observacion_de_medicamento!: string;
    public inicio_periodo_escolar!: string;
    public fin_periodo_escolar!: string;
    public usuario!: string;
    public created_at!: string;
    public updated_at!: string;
    public representante_apellidos!: string;
    public representante_nombres!: string;
    public representante_nacionalidad!: string;
    public representante_cedula!: string;
    public representante_urb_br!: string;
    public representante_fecha_nacimiento!: string;
    public representante_direccion_habitacion_av!: string;
    public representante_calle!: string;
    public representante_casa_apartamento!: string;
    public representante_numero_habitacion!: string;
    public representante_referencia!: string;
    public representante_ciudad!: string;
    public representante_parroquia!: string;
    public representante_estado!: string;
    public representante_telefono_habitacion!: string;
    public representante_telefono_personal!: string;
    public representante_email!: string;
    public representante_profesion!: string;
    public representante_lugarTrabajo!: string;
    public representante_telefono_trabajo!: string;
    public representante_nivelAcademico!: string;
    public representante_cargo!: string;
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