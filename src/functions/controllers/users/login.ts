import { Request, Response } from "express"

class loginController {
  static handle: any
  async handle(req: Request, res: Response) {
    const user = req.body.user
    const password = req.body.password

    if (user === "LucasSites" && password === "Lucas@app2019") {
      return res.status(200).json({
        success: true,
        message: "Logado com sucesso!",
        token: process.env.SECRET_TOKEN
      })
    } else {
      return res.status(200).json({
        success: false,
        message: "Usuário Ou Senha incorretos!",
        token: null
      })
    }
  }
}

export { loginController }