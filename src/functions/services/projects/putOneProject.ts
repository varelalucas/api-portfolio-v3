import prismaClient from "../../../core/prisma";
import { ProjectPutContent } from "../../../types/projects";

class putOneProjectService {
  async execute(data: ProjectPutContent) {
    const project = await prismaClient.projects.updateMany({
      where: {
        id: data.id
      },
      data: {
        name: data.new_name,
        description: data.new_description,
        time: data.new_time,
        url: data.new_url,
        github_url: data.new_github_url,
        img_url: data.new_image_url
      }
    })

    return project
  }
}

export { putOneProjectService }