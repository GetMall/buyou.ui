import CarrinhoVazio from "../assets/plataforma/Loja/carrinhoVazio.svg";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CardProdutoCart from "../../src/pages/Plataforma/components/loja/CardProdutoCart";
import "./SideBar.css";

import "react-toastify/dist/ReactToastify.css";


function SideBar({fecharCarrinho, show}) {

    const [carrinhoItens, setCarrinhoItens] = useState(
        JSON.parse(sessionStorage.getItem("carrinho")) || []
    );

    const [total, setTotal] = useState(0);

    const idCliente = sessionStorage.getItem("idUsuario");

    const navigate = useNavigate();

    const calcularTotal = () => {
        const totalCalculado = carrinhoItens.reduce(
            (acc, item) => acc + item.valorUnitario,
            0
        );
        setTotal(totalCalculado);
    };

    const removerDoCarrinho = (itemId) => {
        const novoCarrinho = carrinhoItens.filter((item) => item.id !== itemId);
        setCarrinhoItens(novoCarrinho);
        sessionStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        toast.success("Produto removido com sucesso!", {
            position: "bottom-right",
            autoClose: true,
            closeButton: true,
        });
    };

    const finalizarCompra = () => {
        const itensParaEnviar = carrinhoItens.map((item) => ({
            idProduto: item.id,
            codProduto: item.codigo,
            nomeProduto: item.nome,
            valorUnitario: item.valorUnitario,
            quantidade: 1,
        }));

        const dadosParaEnviar = {
            idCliente: idCliente,
            itens: itensParaEnviar,
            valorTotal: total + 7.97,
            status: "PENDENTE",
            dataPedido: new Date().toISOString().split("T")[0],
        };

        sessionStorage.setItem("dadosParaEnviar", JSON.stringify(dadosParaEnviar));
        navigate("/compra")
    };

    useEffect(() => {
        calcularTotal();
    }, [carrinhoItens]);


    return (
    <div className={`h-screen z-10 w-3/12 mt-20 fixed bg-white border  ${show ? 'slide-in-right' : 'slide-out-right'}`}>
            <div className="p-6">
                <h1 onClick={fecharCarrinho} className="text-2xl w-2 text-primary cursor-pointer">X</h1>
            </div>
            {carrinhoItens.length === 0 ? (
                <>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="flex justify-center m-auto mt-20 items-center w-96"
                            src={CarrinhoVazio}
                            alt=""
                        />
                        <h1 className="text-2xl m-auto text-secundary font-bold">
                            Seu carrinho está vazio...
                        </h1>
                        <p
                            onClick={() => navigate("/inicio")}
                            className="m-auto text-secundary underline font-bold cursor-pointer"
                        >
                            Começar a comprar
                        </p>
                    </div>
                </>
            ) : (
                <>
                    {/* <div className="px-4"><p>Seus itens no carrinho</p></div> */}
                    <div className="flex flex-col h-[90%]">
                        <div className="overflow-y-auto h-full">
                            <div
                                className="flex flex-col mt-5 gap-5"
                            >
                                {carrinhoItens.map((item) => (
                                    <div key={item.id}>
                                        <CardProdutoCart
                                            onClick={() => removerDoCarrinho(item.id)}
                                            tamanho={item.tamanho}
                                            nome={item.nome}
                                            cor={item.cor}
                                            preco={item.valorUnitario}
                                            descricao={item.descricao}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div> 
                        <div className="flex flex-col justify-evenly h-full">
                            <div className="flex flex-col p-4 border-t-2 bg-white ">
                                <div className="flex justify-between">
                                    <h2 className="text-sm mt-2 ">
                                        Subtotal:
                                    </h2>
                                    <h2 className="text-sm mt-2">R$ {total.toFixed(2)}</h2>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="text-sm mt-2 ">
                                        Taxa do Serviço:
                                    </h2>
                                    <h2 className="text-sm mt-2">R$ 7,99</h2>
                                </div>
                            </div>
                            <div className="flex flex-col p-10 justify-center">
                                <div className="flex justify-between">
                                    <h2 className="text-lg mt-2 ">
                                        Total:{" "}
                                    </h2>
                                    <h2 className="text-lg mt-2 text-secundary">R$ {(total + 7.97).toFixed(2)}</h2>
                                </div>
                                <button
                                    onClick={finalizarCompra}
                                    className="bg-secundary text-white w-full rounded-lg  font-bold text-sm p-2"
                                >
                                    Escolher forma de pagamento
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SideBar;