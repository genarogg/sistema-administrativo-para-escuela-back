// Limpia la consola
import clear from "console-clear";
clear();

import express, { Request, Response } from "express";


import { log, path } from "@fn";
import cors from "cors";
import { generarAsistencia } from "@controllers";

// variables de entorno
const PORT = process.env.PORT || 4000;
const CORS_URL = process.env.CORS_URL || "*";

// Crear una instancia de express
const app = express();

// Usa cors como middleware
app.use(cors({ origin: CORS_URL }));

// Configurar el directorio public
app.use(express.static(path.join(__dirname, "src/public")));

// Configurar EJS como motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conexión a la base de datos
import sequelize from "@db";

sequelize.sync({ logging: false }).then(() => {
  log.cyan("db conectada!");
});

// Importar rutas
import { inicioRouter, authRouter, estudianteRouter, empleadoRouter, asistenciaRouter, bitacoraRouter, usuarioRouter } from "@router";


app.use("/", inicioRouter);
app.use("/auth", authRouter);
app.use("/estudiante", estudianteRouter);
app.use("/empleado", empleadoRouter);
app.use("/asistencia", asistenciaRouter);
app.use("/bitacora", bitacoraRouter);
app.use("/usuario", usuarioRouter);

// import { sendEmail } from "@email/index";

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send("¡Algo salió mal!");
});

import index from "./src/dataFake/index";

app.listen(PORT, async () => {
  log.green(`El servidor esta corriendo http://localhost:${PORT}`);
  await index();
  await generarAsistencia();
});
