import { Request, Response } from "express"
import { getAllEarnsService } from "../../services/earns/getAllEarns"

class getAllEarnsController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new getAllEarnsService

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

export { getAllEarnsController }