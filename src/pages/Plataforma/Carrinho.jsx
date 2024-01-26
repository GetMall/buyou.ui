import { useEffect } from "react";
import Header from "./components/Header"
import CardProdutoCart from "./components/loja/CardProdutoCart";
import { useState } from "react";

function Carrinho() {
    const [carrinhoItens, setCarrinhoItens] = useState(
        JSON.parse(sessionStorage.getItem("carrinho")) || []
    );

    const [total, setTotal] = useState(0);


    const calcularTotal = () => {
        const totalCalculado = carrinhoItens.reduce((acc, item) => acc + item.valorUnitario, 0);
        setTotal(totalCalculado);
    };

    const removerDoCarrinho = (itemId) => {
        const novoCarrinho = carrinhoItens.filter((item) => item.id !== itemId);
        setCarrinhoItens(novoCarrinho);
        sessionStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    };

    const removerTodos = () => {
        setCarrinhoItens([]);
        sessionStorage.removeItem("carrinho");
    }

    useEffect(() => {
        calcularTotal();
    }, [carrinhoItens])

    return (
        <>
            <Header />
            <div className="mt-40 pl-20">
                <h2 className="text-xl mb-2 font-bold">Seu Carrinho</h2>
                <button onClick={removerTodos} className="bg-red-600 flex relative justify-end text-white font-bold text-xs p-2" style={{marginLeft: "760px"}}>Remover todos</button>
                <div className="flex">
                    <div className="overflow-y-auto" style={{ maxHeight: '800px' }}>
                        <div className="flex flex-col mt-5 gap-5" style={{ width: '40vw' }}>
                            {carrinhoItens.map((item) => (
                                <div key={item.id}>
                                    <CardProdutoCart onClick={() => removerDoCarrinho(item.id)} imgProduto={`http://localhost:8080/produtos/arquivo/${item.nomeArquivoSalvo}`} tamanho={item.tamanho} cor={item.cor} preco={item.valorUnitario} descricao={item.descricao} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col ml-10 h-56 w-96 mt-4 p-4 shadow-md bg-white ">
                        <h1 className="text-lg font-bold justify-center flex">Resumo da Compra</h1>
                        <h2 className="text-lg mt-2 font-bold">Custo dos Produtos: R$ {total.toFixed(2)}</h2>
                        <h2 className="text-lg mt-2 font-bold">Taxa de Serviço: R$ 7.97</h2>
                        <h2 className="text-lg mt-2 font-bold">Total: <span className="text-secundary">R$ {(total + 7.97).toFixed(2)}</span></h2>
                        <div className="flex justify-center mt-5">
                            <button className="bg-btn_orange text-white w-full  font-bold text-lg p-2">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho 