import express, { type Request, type Response } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { AppRoutes } from "./routes/routes.js";
import { config } from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images/productos", express.static(path.join(__dirname, "../public/images/productos")));

app.use(AppRoutes.routes)

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

