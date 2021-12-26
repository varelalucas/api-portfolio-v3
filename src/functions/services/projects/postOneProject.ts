import prismaClient from "../../../core/prisma";
import { ProjectPostContent } from "../../../types/projects";

class postOneProjectService {
  async execute(data: ProjectPostContent) {
    const project = await prismaClient.projects.create({
      data: {
        name: data.name,
        img_url: data.img_url,
        description: data.description,
        time: data.time,
        github_url: data.github_url,
        url: data.url
      }
    })

    return project
  }
}

export { postOneProjectService };