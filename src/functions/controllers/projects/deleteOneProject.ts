import { Request, Response } from "express"
import { deleteOneProjectService } from "../../services/projects/deleteOneProject"

class deleteOneProjectController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new deleteOneProjectService

    try {
      const { id } = req.params

      const data = {
        id: id
      }

      const result = await service.execute(data)

      if (result.count === 0) {
        return res.status(404).json({
          success: false,
          data: `O projeto ${data.id} não foi encontrado!`
        })
      } else if (result.count === 1) {
        return res.status(200).json({
          success: true,
          data: `O projeto ${data.id} foi deletado com sucesso!`
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

export { deleteOneProjectController }