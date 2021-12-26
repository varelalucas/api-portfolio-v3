import { Request, Response } from "express"
import { getAllProjectsService } from "../../services/projects/getAllProjects"

class getAllProjectsController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new getAllProjectsService

    try {

      const result = await service.execute()

      if(!result.length) {
        return res.status(404).json({
          success: false,
          data: []
        })
      } else {
        return res.status(200).json({
          success: true,
          data: result
        })
      }
    } catch {
      return res.status(502).json({
        success: false,
        data: "Algum dado foi inserido errado, Tente novamente!"
      })
    }
  }
}

export { getAllProjectsController }