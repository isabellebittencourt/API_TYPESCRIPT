import {produto} from "../models/produto";

const produtos : produto[] =[];


export class produtoRepository{
    create(produto:produto) : produto[] {
        produtos.push(produto);
        return produtos;
    }

}