import { Request, Response } from "express"
import { getOneProjectService } from "../../services/projects/getOneProject"

class getOneProjectController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new getOneProjectService

    try {
      const { name } = req.params

      const data = {
        name: name
      }

      const result = await service.execute(data)

      return res.status(200).json({
        success: true,
        data: result
      })

    } catch {
      return res.status(502).json({
        success: false,
        data: "Algum dado foi inserido errado, Tente novamente!"
      })
    }
  }
}

export { getOneProjectController }