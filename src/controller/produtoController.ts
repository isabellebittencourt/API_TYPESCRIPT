import { Request, Response } from "express";
import { produtoRepository } from "../repositories/produtoRepository";

const produtoRespo = new produtoRepository();

export class produtoController{

      create(request:Request, response: Response) : void{
        const produtos = produtoRespo.create(request.body);

        response.status(201).json({message : "produto cadastrado"})
    }

    list(){}

    update(){}

    delete(){}
}
