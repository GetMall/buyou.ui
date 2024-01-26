import Header from "./components/Header"
import CardProdutoCart from "./components/loja/CardProdutoCart";

function Carrinho() {
    const carrinhoItens = JSON.parse(sessionStorage.getItem('carrinho')) || [];

    return (
        <>
            <Header />
            <div className="mt-40 pl-20">
                <h2 className="text-xl mb-2 font-bold">Seu Carrinho</h2>
                <div className="overflow-y-auto" style={{maxHeight: '800px'}}>
                <div className="flex flex-col mt-5 gap-5">
                    {carrinhoItens.map((item) => (
                        <div key={item.id}>
                            <CardProdutoCart imgProduto={`http://localhost:8080/produtos/arquivo/${item.nomeArquivoSalvo}`} tamanho={item.tamanho} cor={item.cor} preco={item.valorUnitario} descricao={item.descricao} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho 