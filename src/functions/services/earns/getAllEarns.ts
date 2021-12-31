import prismaClient from "../../../core/prisma";

class getAllEarnsService {
  async execute() {
    const earns = await prismaClient.earns.findMany({
      orderBy: {
        created_at: 'desc'
      }
    })

    return earns
  }
}

export { getAllEarnsService };