import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Empleado extends Model {
    public id!: number;
    public tipo_empleado!: string;
    public nombres!: string;
    public apellidos!: string;
    public ci!: number;
    public fecha_nacimiento!: string;
    public telefono!: string;
    public correo_electronico!: string;
    public fecha_ingreso_mppe!: string;
    public direccion_de_habitacion!: string;
    public codigo_cargo!: string;
    public dependencia_nominal!: string;
    public estatus!: boolean;
    public reposo_permiso!: string;
    public anos_servicio!: number;
    public observaciones!: string;
    public titulo_pregrado!: string;
    public area_docente_especialista!: string;
    public grado_seccion!: string;
    public funcion_trabajo!: string;
    public acarigua!: string;
    public titulo_obtenido!: string;
    public inscrito_psuv!: boolean;
    public pertenece_movimiento_social!: string;
    public carnet_patria_codigo!: string;
    public carnet_patria_serial!: string;
    public centro_votacion!: string;
    public tipo_voto!: string;
}

Empleado.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        tipo_empleado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ci: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo_electronico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_ingreso_mppe: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion_de_habitacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigo_cargo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dependencia_nominal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        reposo_permiso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anos_servicio: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        observaciones: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        titulo_pregrado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area_docente_especialista: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grado_seccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        funcion_trabajo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        acarigua: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        titulo_obtenido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        inscrito_psuv: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pertenece_movimiento_social: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carnet_patria_codigo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carnet_patria_serial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        centro_votacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo_voto: {
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
        tableName: "empleado",
        sequelize: sequelize,
        freezeTableName: true,
    }
);

export default Empleado;