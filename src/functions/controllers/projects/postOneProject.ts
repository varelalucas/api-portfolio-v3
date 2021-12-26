import { Request, Response } from "express"
import { postOneProjectService } from "../../services/projects/postOneProject"
import { ProjectPostContent } from "../../../types/projects"

class postOneProjectController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new postOneProjectService

    try {
      const data: ProjectPostContent = req.body

      if (!data.name || !data.img_url || !data.description || !data.github_url || !data.img_url || !data.time) {
        return res.status(400).json({
          success: false,
          data: "Preencha todos os campos"
        })
      }

      const result = await service.execute(data)

      return res.status(200).json({
        success: true,
        data: `O projeto ${data.name} foi postado com sucesso!`
      })
    } catch (err) {
      return res.status(502).json({
        success: false,
        data: "Algum dado foi inserido errado, Tente novamente!"
      })
    }
  }
}

export { postOneProjectController }