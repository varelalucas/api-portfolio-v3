import { Router } from "express"
import { deleteOneEarnController } from "../../functions/controllers/earns/deleteOneEarn";
import { getAllEarnsController } from "../../functions/controllers/earns/getAllEarns";
import { postOneEarnController } from "../../functions/controllers/earns/postOneEarn";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const earnsRouter = Router()

earnsRouter.post("/earns/add", new postOneEarnController().handle);
earnsRouter.delete("/earns/delete/:id", new deleteOneEarnController().handle);
earnsRouter.get("/earns", new getAllEarnsController().handle);


export { earnsRouter }