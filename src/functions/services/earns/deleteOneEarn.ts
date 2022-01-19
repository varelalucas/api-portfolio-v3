import prismaClient from "../../../core/prisma";

class deleteOneEarnService {
  async execute(id: number) {
    const project = await prismaClient.earns.deleteMany({
      where: {
        id: id
      }
    })

    return project
  }
}

export { deleteOneEarnService };