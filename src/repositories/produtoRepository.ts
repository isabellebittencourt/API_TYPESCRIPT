import {produto} from "../models/produto";

const produtos : produto[] =[];


export class produtoRepository{
    create(produto:produto) : produto[] {
        produtos.push(produto);
        return produtos;
    }

    list():produto[]{
        return produtos;
    }

    remove(nome: string) : produto []{
        const index = produtos.findIndex((produto) => produto.nome === nome);
        produtos.splice(index,1);
        return produtos;
    }

    update(produtoAlterado: produto) : produto []{
        const index = produtos.findIndex((produto) => produto.nome = produtoAlterado.nome);
        produtos[index] = produtoAlterado;
        return produtos;

    }

}