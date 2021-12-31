import { Router } from "express"
import { loginController } from "../../functions/controllers/users/login"

const usersRouter = Router()

usersRouter.post('/login', new loginController().handle)

export { usersRouter }