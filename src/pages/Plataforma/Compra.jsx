import { useState, useEffect } from "react";
import HeaderLogo from "./components/HeaderLogo";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Compra() {
    const [dadosParaEnviar, setDadosParaEnviar] = useState({});
    const [itens, setItens] = useState([]);

    const idUsuario = sessionStorage.getItem("idUsuario");

    const navigate = useNavigate();

    useEffect(() => {
        const obterDadosParaEnviar = JSON.parse(sessionStorage.getItem("dadosParaEnviar"));
        if (obterDadosParaEnviar) {
            setDadosParaEnviar(obterDadosParaEnviar);
            setItens(obterDadosParaEnviar.itens);
        }
    }, []);

    const finalizarPedido = () => {
        const itensParaEnviar = itens.map((item) => ({
            idProduto: item.idProduto,
            codProduto: item.codProduto,
            nomeProduto: item.nomeProduto,
            quantidade: item.quantidade,
        }));

        const dadosParaEnviar = {
            idCliente: idUsuario,
            itens: itensParaEnviar,
            valorTotal: 0,
            status: "PENDENTE",
            dataPedido: new Date().toISOString().split("T")[0],
            dataPagamento: new Date().toISOString().split("T")[0],
        };

        api.post("/pedidos", dadosParaEnviar).then((res) => {
            sessionStorage.removeItem("dadosParaEnviar");
            sessionStorage.removeItem("carrinho");
            navigate("/pedido-realizado");
        }
        ).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <HeaderLogo />
            <ToastContainer />
            <div className="container mt-32 flex justify-center gap-[200px]">
                <div className="flex">
                    <div className="flex flex-col gap-6">
                        <div className="mb-10">
                            <h1 className="text-2xl font-bold">Finalize seu pedido</h1>
                        </div>
                        <div className="bg-white p-2 border-sm border">
                            <p className="text-lg">R. Fraiburgo</p>
                            <p>São Paulo</p>
                        </div>
                        <h2 className="text-xl">Pagamento</h2>
                        <div className="flex flex-col">
                            <div className="flex gap-2 mt-2">
                                <input id="pix" name="pagamento" type="radio" />
                                <label htmlFor="pix">Pix</label>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <input id="cartao" name="pagamento" type="radio" />
                                <label htmlFor="cartao">Cartão de Crédito</label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-btn_orange text-white w-full h-10 rounded-sm" onClick={finalizarPedido}>Finalizar a compra</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl mb-10 font-bold">Resumo da Compra</h2>
                    <div className="flex flex-col mt-2 p-10 gap-2 bg-white border-sm border">
                        <h1 className="text-lg font-bold ">Produtos</h1>
                        {itens.map((item) => (
                            <div key={item.id}>
                                <div className="flex gap-2 mt-2">
                                    <p className="text-lg">{item.quantidade}x {item.nomeProduto}</p>
                                    <p className="text-lg text-secundary font-semibold">R$ {item.valorUnitario}</p>
                                </div>
                            </div>
                        ))}

                        <div className="border"></div>
                        <p className="text-lg">Custo dos Produtos: <span className="text-secundary font-semibold"> R$ {(dadosParaEnviar.valorTotal)?.toFixed(2)} </span></p>
                        <p className="text-lg">Total: <span className="text-secundary font-semibold">R$ {(dadosParaEnviar.valorTotal)?.toFixed(2)}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compra;
