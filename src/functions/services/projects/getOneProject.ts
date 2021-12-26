import prismaClient from "../../../core/prisma"
import { ProjectGetContent } from "../../../types/projects"

class getOneProjectService {
  async execute(data: ProjectGetContent) {
    const projects = await prismaClient.projects.findMany({
      where: {
        name: data.name
      }
    })

    return projects
  }
}

export { getOneProjectService }