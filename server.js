process.on('uncaughtException',(err)=>{
    console.log('error',err);
})
import dotenv from "dotenv"
import express from 'express'
import { dbConnection } from './db/db_Connection.js'
import { bootstrap } from "./src/modules/index.routes.js";
const app = express()
const port = 3000
app.use(express.json())
dbConnection()
dotenv.config()
bootstrap(app)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))