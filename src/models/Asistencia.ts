import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Asistencia extends Model {
    public id!: number;
    public nombres!: string;
    public apellidos!: string;
    public ci!: string;
    public fecha!: string;
    public hora_entrada?: string;
    public comentario_entrada?: string;
    public hora_almuerzo?: string;
    public comentario_almuerzo?: string;
    public hora_salida?: string;
    public comentario_salida?: string;
    public vino?: string;
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