import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Asistencia extends Model {
    declare id: number;
    declare nombres: string;
    declare apellidos: string;
    declare ci: string;
    declare fecha: string;
    declare hora_entrada?: string;
    declare comentario_entrada?: string;
    declare hora_almuerzo?: string;
    declare comentario_almuerzo?: string;
    declare hora_salida?: string;
    declare comentario_salida?: string;
    declare vino?: string;
}

Asistencia.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hora_entrada: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comentario_entrada: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hora_almuerzo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comentario_almuerzo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hora_salida: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comentario_salida: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vino: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "asistencia",
        sequelize: sequelize,
        freezeTableName: true,
    }
);

export default Asistencia;