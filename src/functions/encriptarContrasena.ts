import bcrypt from "bcryptjs";

const encriptarContrasena = (password: string): string => {
    return bcrypt.hashSync(password, 10);
};

export default encriptarContrasena;