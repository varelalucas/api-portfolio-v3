import { Request, Response } from "express"
import { putOneProjectService } from "../../services/projects/putOneProject"
import { ProjectPutContent } from "../../../types/projects"

class putOneProjectController {
  static handle: any
  async handle(req: Request, res: Response) {
    const service = new putOneProjectService

    const data: ProjectPutContent = req.body

    if (!data.new_description || !data.new_github_url || !data.new_image_url || !data.new_name || !data.new_time || !data.new_url) {
      return res.status(200).json({
        success: true,
        data: "Preencha todos os dados"
      })
    }

    const dados = {
      id: data.id,
      new_name: data.new_name,
      new_description: data.new_description,
      new_image_url: data.new_image_url,
      new_github_url: data.new_github_url,
      new_url: data.new_url,
      new_time: data.new_time
    }

    const result = await service.execute(dados)

    console.log(result)
    
    if (result.count === 0) {
      return res.status(200).json({
        success: true,
        data: "Não consegui achar esse projeto"
      })
    }

    if (result.count === 1) {
      return res.status(200).json({
        success: true,
        data: "O projeto foi atualizado com sucesso"
      })
    }
  }
}

export { putOneProjectController }