import { Router } from 'express'
import { deleteOneProjectController } from '../../functions/controllers/projects/deleteOneProject'
import { getAllProjectsController } from '../../functions/controllers/projects/getAllProjectts'
import { getOneProjectController } from '../../functions/controllers/projects/getOneProject'
import { postOneProjectController } from '../../functions/controllers/projects/postOneProject'
import { isAuthenticated } from '../middlewares/isAuthenticated'

const projectsRouter = Router()

projectsRouter.post('/create', isAuthenticated, new postOneProjectController().handle)
projectsRouter.delete('/delete/:id', isAuthenticated, new deleteOneProjectController().handle)
projectsRouter.get('/', new getAllProjectsController().handle)
projectsRouter.get('/:name', new getOneProjectController().handle)

export { projectsRouter }