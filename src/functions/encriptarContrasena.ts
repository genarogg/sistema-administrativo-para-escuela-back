import bcrypt from "bcryptjs";

interface EncriptarContrasenaParams {
    password: string;
}

interface CompararContrasenaParams {
    password: string;
    hashedPassword: string;
}

const encriptarContrasena = ({ password }: EncriptarContrasenaParams): string => {
    return bcrypt.hashSync(password, 10);
};

const compararContrasena = ({ password, hashedPassword }: CompararContrasenaParams): boolean => {
    return bcrypt.compareSync(password, hashedPassword);
};

export { encriptarContrasena, compararContrasena };