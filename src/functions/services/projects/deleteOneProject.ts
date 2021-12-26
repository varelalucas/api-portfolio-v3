import prismaClient from "../../../core/prisma"
import { ProjectDeleteContent } from "../../../types/projects";

class deleteOneProjectService {
  async execute(data: ProjectDeleteContent) {
    const project = await prismaClient.projects.deleteMany({
      where: {
        id: data.id
      }
    })

    return project
  }
}

export { deleteOneProjectService }