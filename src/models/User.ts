import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "@db";

class User extends Model {
    public id!: number;
    public apellido!: string;
    public nombre!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public ci!: string;
    public cargoInstitucional!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ci: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        cargoInstitucional: {
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
        tableName: "users",
        sequelize: sequelize,
    }
);

export default User;