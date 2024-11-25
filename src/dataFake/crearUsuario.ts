import { User } from "@models";
import { encriptarContrasena } from "@fn";

const crearUsuario = async (type: string) => {
    const hashedPassword = encriptarContrasena("admin");

    try {
        await User.create({
            nombre: "Admin",
            apellido: "User",
            email: "admin@admin.com", // Cambia esto por el correo deseado
            password: hashedPassword,
            role: type,
            ci: "123456789", // Cambia esto por el CI deseado
            cargoInstitucional: "Administrador",
        });


    } catch (error) {
        console.error("Error al crear el usuario administrador:", error);
    }
};



export default crearUsuario;