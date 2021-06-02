import express, { Application } from 'express';
import cors from "cors";

import userRoutes from '../routes/usuario'
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();

        this.port = process.env.PORT || '4000';

        // Confección BD
        this.dbConnection()

        // Middlewares
        this.middlewares();

        // Definir mis rutas
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online')
        } catch (error) {
            throw new Error(error);
        }
    }


    middlewares(){
        // CORS
        this.app.use(cors());

        // lectura del body
        this.app.use(express.json());

        // carpeta publica
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }
}


export default Server;