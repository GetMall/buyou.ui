import { useEffect } from "react";
import HeaderLogo from "./components/HeaderLogo";
import CardProdutoCart from "./components/loja/CardProdutoCart";
import CarrinhoVazio from "../../assets/plataforma/Loja/carrinhoVazio.svg";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Carrinho() {
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

  const removerTodos = () => {
    setCarrinhoItens([]);
    sessionStorage.removeItem("carrinho");
    toast.success("Todos os produtos foram removidos com sucesso!", {
      position: "bottom-right",
      autoClose: true,
      closeButton: true,
    });
  };

  useEffect(() => {
    calcularTotal();
  }, [carrinhoItens]);

  return (
    <>
      <HeaderLogo />
      <ToastContainer />
      <div className="mt-40 pl-20">
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
            <h2 className="text-xl mb-2 font-bold">Seu Carrinho</h2>
            <div className="flex justify-end w-[40%]">
              <button
                onClick={removerTodos}
                className="bg-red-600 flex text-white font-bold text-xs p-2"            >
                Remover todos
              </button>
            </div>
            <div className="flex">
              <div className="overflow-y-auto" style={{ maxHeight: "800px" }}>
                <div
                  className="flex flex-col mt-5 gap-5"
                  style={{ width: "40vw" }}
                >
                  {carrinhoItens.map((item) => (
                    <div key={item.id}>
                      <CardProdutoCart
                        onClick={() => removerDoCarrinho(item.id)}
                        imgProduto={`http://localhost:8080/midias/imagens/${item.imagens[0].nomeArquivoSalvo}`}
                        tamanho={item.tamanho}
                        cor={item.cor}
                        preco={item.valorUnitario}
                        descricao={item.descricao}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col ml-10 h-56 w-[50%] mt-4 p-4 shadow-md bg-white ">
                <h1 className="text-lg font-bold justify-center flex">
                  Resumo da Compra
                </h1>
                <h2 className="text-lg mt-2 font-bold">
                  Custo dos Produtos: R$ {total.toFixed(2)}
                </h2>
                <h2 className="text-lg mt-2 font-bold">
                  Taxa de Serviço: R$ 7.97
                </h2>
                <h2 className="text-lg mt-2 font-bold">
                  Total:{" "}
                  <span className="text-secundary">
                    R$ {(total + 7.97).toFixed(2)}
                  </span>
                </h2>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={finalizarCompra}
                    className="bg-btn_orange text-white w-full rounded-sm  font-bold text-lg p-2"
                  >
                  Escolher forma de pagamento
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Carrinho;
