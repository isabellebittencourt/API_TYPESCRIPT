import { Request, Response } from "express";
import { produtoRepository } from "../repositories/produtoRepository";

const produtoRespo = new produtoRepository();

export class produtoController{

      create(request:Request, response: Response) : void{
        const produtos = produtoRespo.create(request.body);
        response.status(201).json({message : "produto cadastrado", data: produtos},)
    }

    list(request:Request, response:Response) {
        const produtos = produtoRespo.list();
        response.status(200).json({message : "Listagem de produtos", data: produtos})

    }
    


    update(request:Request, response:Response){
        const produtos = produtoRespo.update(request.body)
        response.status(200).json({message : "Produto alterado", data: produtos})

    }

    delete(request:Request, response:Response){
        const nome = request.params.nome;
        const produtos = produtoRespo.remove(nome)
        response.status(200).json({message : "Produto removido", data: produtos})
    }
}
