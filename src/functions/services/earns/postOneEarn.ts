import prismaClient from "../../../core/prisma";

class postOneEarnService {
  async execute(quantity: number, id: number) {
    if (quantity < 0) {
      const earn = prismaClient.earns.create({
        data: {
          typeid: id,
          quantity,
          type: "negative"
        }
      })

      return earn
    } else if (quantity > 0) {
      const earn = prismaClient.earns.create({
        data: {
          typeid: id,
          quantity,
          type: "positive"
        }
      })

      return earn
    }
  }
}

export { postOneEarnService };