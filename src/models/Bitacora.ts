import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class Bitacora extends Model {
    public id!: number;
    public usuario!: string;
    public accion!: string;
    public fecha!: string;
    public hora!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Bitacora.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false,
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
        tableName: "bitacora",
        sequelize: sequelize,
    }
);

export default Bitacora;