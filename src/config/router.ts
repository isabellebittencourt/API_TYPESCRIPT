import { Router } from "express";
import { produtoController } from "../controller/produtoController";

const routes = Router()

routes.get("/", (req, res)=>{
    res.json({message: "Hello world"})
})

routes.post("/produto/create", new produtoController().create)
routes.get("/produto/list", new produtoController().list)
routes.put("/produto/update", new produtoController().update)
routes.delete("/produto/delete/:nome", new produtoController().delete)


export {routes};