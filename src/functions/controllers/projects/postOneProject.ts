import { Request, Response } from "express"
import { postOneProjectService } from "../../services/projects/postOneProject"
import { ProjectPostContent } from "../../../types/projects"
import fs from 'fs'

class postOneProjectController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new postOneProjectService

    const data: ProjectPostContent = req.body
    
      const result = await service.execute(data)

      return res.status(200).json({
        success: true,
        data: `O projeto ${data.name} foi postado com sucesso!`
      })
  }
}

export { postOneProjectController }