import { Request, Response } from "express";
import { produto } from "../models/produto";

const produtos : produto[] = []



export class produtoController{
    create(request: Request, response: Response){
        produtos.push(request.body)
        response.status(201).json({message: "Produto cadastrado", data: produtos})

    }

    list(){}
    
    update(){}
    
    delete(){}

}