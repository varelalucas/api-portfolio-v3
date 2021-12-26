import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { projectsRouter } from './routes/projectsRouter'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/v3/projects', projectsRouter)

app.listen(process.env.BASE_PORT, () => {
  console.log(`[APPLICAÇÃO] Iniciada com sucesso na porta ${process.env.BASE_PORT}\n\n[DESENVOLVEDOR] LucasSites`)
})