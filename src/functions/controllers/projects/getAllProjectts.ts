import { Request, Response } from "express"
import { getAllProjectsService } from "../../services/projects/getAllProjects"

class getAllProjectsController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new getAllProjectsService

    const result = await service.execute()

      if(!result.length) {
        return res.status(200).json({
          success: false,
          data: []
        })
      } else {
        return res.status(200).json({
          success: true,
          data: result
        })
      }
  }
}

export { getAllProjectsController }