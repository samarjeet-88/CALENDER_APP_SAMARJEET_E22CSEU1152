import express from "express"
import cors from "cors"
import eventRoutes from "./routes/event.routes.js"

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true })); 

app.use('/api',eventRoutes)

export default app