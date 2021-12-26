import prismaClient from "../../../core/prisma"

class getAllProjectsService {
  async execute() {
    const projects = await prismaClient.projects.findMany({
      orderBy: {
        created_at: 'desc'
      }
    })

    return projects
  }
}

export { getAllProjectsService }