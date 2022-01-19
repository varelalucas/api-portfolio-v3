import { Request, Response } from "express"
import { postOneEarnService } from "../../services/earns/postOneEarn"

class postOneEarnController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new postOneEarnService

    const { quantity } = req.body

    if (!quantity) {
      return res.status(400).json({
        success: false,
        data: "Preencha todos os campos"
      })
    }

    const result = await service.execute(quantity)

    return res.status(200).json({
      success: true,
      data: `Foi adicionado ${quantity} na tabela!`
    })
  }
}

export { postOneEarnController }