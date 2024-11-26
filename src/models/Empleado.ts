import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Empleado extends Model {
    declare id: number;
    declare tipo_empleado: string;
    declare nombres: string;
    declare apellidos: string;
    declare ci: number;
    declare fecha_nacimiento: string;
    declare telefono: string;
    declare correo_electronico: string;
    declare fecha_ingreso_mppe: string;
    declare direccion_de_habitacion: string;
    declare codigo_cargo: string;
    declare dependencia_nominal: string;
    declare estatus: boolean;
    declare reposo_permiso: string;
    declare anos_servicio: number;
    declare observaciones: string;
    declare titulo_pregrado: string;
    declare area_docente_especialista: string;
    declare grado_seccion: string;
    declare funcion_trabajo: string;
    declare acarigua: string;
    declare titulo_obtenido: string;
    declare inscrito_psuv: boolean;
    declare pertenece_movimiento_social: string;
    declare carnet_patria_codigo: string;
    declare carnet_patria_serial: string;
    declare centro_votacion: string;
    declare tipo_voto: string;
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