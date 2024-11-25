import { User } from "@models";
import { encriptarContrasena } from "@fn";

const crearUsuario = async ({
    nombre,
    apellido,
    email,
    password,
    role,
    ci,
    cargoInstitucional,
}: any) => {
    const hashedPassword = encriptarContrasena({password});

    try {
        await User.create({
            nombre,
            apellido,
            email,
            password: hashedPassword,
            role,
            ci,
            cargoInstitucional
        });


    } catch (error) {
        console.error("Error al crear el usuario administrador:", error);
    }
};



export default crearUsuario;