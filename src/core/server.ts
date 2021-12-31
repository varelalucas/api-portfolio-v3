import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { projectsRouter } from './routes/projectsRouter'
import cors from 'cors'
import { usersRouter } from './routes/usersRouter'
import { earnsRouter } from './routes/earnsRouter'

const app = express()
app.use(express.json())
app.use('/images', express.static('src/uploads/'))
app.use(cors())
app.use('/api/v3/projects', projectsRouter)
app.use('/api/v3/users', usersRouter)
app.use('/api/v3/earns', earnsRouter)

app.listen(process.env.BASE_PORT, () => {
  console.log(`[APPLICAÇÃO] Iniciada com sucesso na porta ${process.env.BASE_PORT}\n\n[DESENVOLVEDOR] LucasSites`)
})