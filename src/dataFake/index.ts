import crearUsuario from "./crearUsuario";
import { log } from "@fn";
import { User } from "@models";

const index = async () => {

    const adminUser = await User.findOne({ where: { role: "admin" } });

    if (adminUser) {
        log.cyan("El usuario administrador ya existe. Saltando la creación de usuarios.");
        return;
    }

    await crearUsuario("admin");
    await crearUsuario("user");

    log.cyan("Usuarios creados exitosamente");
}

export default index;