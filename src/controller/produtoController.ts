import { Request, Response } from "express";



export class produtoController{
    create(request: Request, response: Response){
        response.status(201).json({message: "Produto cadastrado"})
    }

    list(){}
    
    update(){}
    
    delete(){}

}