import { Request, Response } from "express"
import { deleteOneEarnService } from "../../services/earns/deleteOneEarn"

class deleteOneEarnController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new deleteOneEarnService

    const { id } = req.params

    const result = await service.execute(parseInt(id))

    if (result.count === 0) {
      return res.status(200).json({
        success: false,
        data: `O earn de id ${id} não foi encontrado!`
      })
    } else if (result.count === 1) {
      return res.status(200).json({
        success: true,
        data: `O earn de id ${id} foi deletado com sucesso!`
      })
    }
  }
}

export { deleteOneEarnController }