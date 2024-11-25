import { User } from "@models"; // Asegúrate de que la ruta sea correcta

declare module "express-serve-static-core" {
    interface Request {
        user?: User;
    }
}