import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { router } from './routes/index'
import db from './config/mongo'


const PORT = process.env.PORT || 3001

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
console.log("Ruta cargada")
db().then(() => console.log('Conexion Ready'));

app.listen(PORT, () => console.log(`Levantado en el puerto ${PORT}`));