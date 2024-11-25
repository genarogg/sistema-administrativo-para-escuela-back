import crearUsuario from "./crearUsuario";
import { log } from "@fn";
import { User } from "@models";

const index = async () => {

    try {
        const adminUser = await User.findOne({ where: { role: "admin" } });

        if (adminUser) {
            log.cyan("El usuario administrador ya existe. Saltando la creación de usuarios.");
            return;
        }

    } catch (error) {

    }

    await crearUsuario({
        nombre: "Admin",
        apellido: "Admin",
        email: "admin@admin.com",
        password: "admin",
        role: "admin",
        ci: "123456",
        cargoInstitucional: "Admin"
    });

    // await crearUsuario({
    //     nombre: "Usuario",
    //     apellido: "Usuario",
    //     email: "usuario@usuario.com",
    //     password: "usuario",
    //     role: "standard",
    //     ci: "123456",
    //     cargoInstitucional: "Usuario"
    // });

    log.cyan("Usuarios creados exitosamente");
}

export default index;