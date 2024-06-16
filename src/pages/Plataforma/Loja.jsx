import Header from "./components/Header";
import Categoria from "./components/loja/Categoria";
import Banner from "./components/loja/BannerLoja";
import InputPesquisa from "./components/InputPesquisa";
import { useParams } from "react-router-dom";
import Filtro from "./components/loja/Filtro";
import ContainerCard from "./components/loja/ContainerCard";
import CardProduto from "./components/loja/CardProduto";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { set, useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import "react-toastify/dist/ReactToastify.css";

function Loja() {
  const { nomeLoja, idLoja } = useParams();

  const [produto, setProduto] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loja, setLoja] = useState([]);
  const [totalCarrinho, setTotalCarrinho] = useState(0);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
  const [modalProduto, setModalProduto] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filtro, setFiltro] = useState("todos");
  const { register, handleSubmit } = useForm();

  const getInfoLoja = () => {
    return new Promise((resolve, reject) => {
      api
        .get(`/lojas/${idLoja}`)
        .then((response) => {
          setLoja(response.data);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getProduto = () => {
    return new Promise((resolve, reject) => {
      api
        .get(`/produtos/loja/${idLoja}`)
        .then((response) => {
          setProduto(response.data);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getProdutoCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
      api
        .get(`/produtos/categoria`, {
          params: {
            categoria: categoria,
          },
        })
        .then((res) => {
          setProduto(res.data);
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const abrirModalProduto = (produto) => {
    setIsOpen(true);
    setModalProduto(produto);
  };

  const fecharModal = () => {
    setIsOpen(false);
  };


  const adicionarAoCarrinho = (produto) => {
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: true,
      closeButton: true,
    });

    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    sessionStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualizar total do carrinho e quantidade
    const novoTotal = carrinho.reduce((acc, item) => acc + item.valorUnitario, 0);
    setTotalCarrinho(novoTotal);
    setQuantidadeCarrinho(carrinho.length);
    setIsOpen(false);
  };

  const pesquisarItem = (data) => {
    const itemPesquisado = produto.filter((item) =>
      item.nome.toLowerCase().includes(data.item.toLowerCase())
    );
    setProduto(itemPesquisado);
  };

  const ordenarProdutos = (produtos, criterio) => {
    if (criterio === "maior") {
      return produtos.sort((a, b) => b.valorUnitario - a.valorUnitario);
    } else if (criterio === "menor") {
      return produtos.sort((a, b) => a.valorUnitario - b.valorUnitario);
    } else {
      return produtos;
    }
  };

  useEffect(() => {
    Promise.all([getProduto(), getInfoLoja()])
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });

    // Inicializar total e quantidade do carrinho ao carregar a página
    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
    const novoTotal = carrinho.reduce((acc, item) => acc + item.valorUnitario, 0);
    setTotalCarrinho(novoTotal);
    setQuantidadeCarrinho(carrinho.length);
  }, []);

  useEffect(() => {
    setProduto((prevProdutos) => ordenarProdutos([...prevProdutos], filtro));
  }, [filtro]);


  return (
    <>

      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {!loading && (
        <>
          {isOpen && (
            <Modal onClick={fecharModal}>
              <div className="flex mt-[6vh] w-full  justify-around">
                <div>
                  <img className="w-56" src={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${modalProduto.imagens[0]?.nomeArquivoSalvo}`} />
                </div>
                <div className="flex flex-col w-1/2 justify-between">
                  <div className="flex font-bold bg-primary p-1 justify-center">
                    <p>{modalProduto.categoria}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="mb-10">
                      <h2>{modalProduto?.nome}</h2>
                      <p>{modalProduto?.descricao}</p>
                      <p>Tamanho: {modalProduto?.tamanho}</p>
                      <p>Cor: {modalProduto?.cor}</p>
                    </div>
                    <p className="font-bold">R$ {modalProduto?.valorUnitario?.toFixed(2)}</p>
                    <button className="bg-secundary p-2 text-white" onClick={() => adicionarAoCarrinho(modalProduto)}>Adicionar ao Carrinho</button>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          <Header totalCarrinho={totalCarrinho} quantidadeCarrinho={quantidadeCarrinho} />
          <ToastContainer />
          <div className="flex p-5 justify-center w-full pl-20 mt-20">
            {/* <Categoria onCategoriaSelecionada={getProdutoCategoria} /> */}
          </div>
          <div className="flex w-full mt-3">
            <Banner
              nome={nomeLoja}
              logoLoja={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${loja.imagens[0]?.nomeArquivoSalvo}`}
            />
          </div>
          <div className="pl-36">
            <div className="flex gap-5">
              {/* <InputPesquisa width={"24rem"} register={register("")} placeholder={"Pesquise por item"} /> */}
              <form onSubmit={handleSubmit(pesquisarItem)}>
                <input
                  type="text"
                  className="w-[24rem] bg-none text-slate-800 border-none outline-none bg-slate-200 p-2"
                  placeholder="Pesquise por Item"
                  {...register("item")}
                />
              </form>
              <Filtro
                placeholder={"Filtrar por preço"}
                onChange={(value) => setFiltro(value)}
              />
            </div>
            {produto.some((item) => item.categoria === "BELEZA") && (
              <ContainerCard titulo={"Beleza"}>
                {produto.length === 0 ? (
                  <p className="">
                    Não há produtos disponíveis na categoria selecionada.
                  </p>
                ) : (
                  produto.map(
                    (produto) =>
                      produto.categoria === "BELEZA" && (
                        <CardProduto
                          openDesc={() => abrirModalProduto(produto)}
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
                          preco={produto.valorUnitario}
                          descricao={produto.descricao}
                        />
                      )
                  )
                )}
              </ContainerCard>
            )}

            {produto.some((item) => item.categoria === "BRINQUEDOS") && (
              <ContainerCard titulo={"Brinquedos"}>
                {produto.length === 0 ? (
                  <p className="">
                    Não há produtos disponíveis na categoria selecionada.
                  </p>
                ) : (
                  produto.map(
                    (produto) =>
                      produto.categoria === "BRINQUEDOS" && (
                        <CardProduto
                          openDesc={() => abrirModalProduto(produto)}
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
                          preco={produto.valorUnitario}
                          descricao={produto.descricao}
                        />
                      )
                  )
                )}
              </ContainerCard>
            )}

            {produto.some((item) => item.categoria === "CALCADOS") && (
              <ContainerCard titulo={"Calçados"}>
                {produto.length === 0 ? (
                  <p className="">
                    Não há produtos disponíveis na categoria selecionada.
                  </p>
                ) : (
                  produto.map(
                    (produto) =>
                      produto.categoria === "CALCADOS" && (
                        <CardProduto
                          openDesc={() => abrirModalProduto(produto)}
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
                          preco={produto.valorUnitario}
                          descricao={produto.descricao}
                        />
                      )
                  )
                )}
              </ContainerCard>
            )}

            {produto.some((item) => item.categoria === "LIVRÁRIA") && (
              <ContainerCard titulo={"Livraria"}>
                {produto.length === 0 ? (
                  <p className="">
                    Não há produtos disponíveis na categoria selecionada.
                  </p>
                ) : (
                  produto.map(
                    (produto) =>
                      produto.categoria === "LIVARIA" && (
                        <CardProduto
                          openDesc={() => abrirModalProduto(produto)}
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
                          preco={produto.valorUnitario}
                          descricao={produto.descricao}
                        />
                      )
                  )
                )}
              </ContainerCard>
            )}

            {produto.some((item) => item.categoria === "VESTUARIO") && (
              <ContainerCard titulo={"Vestuário"}>
                {produto.length === 0 ? (
                  <p className="">
                    Não há produtos disponíveis na categoria selecionada.
                  </p>
                ) : (
                  produto.map(
                    (produto) =>
                      produto.categoria === "VESTUARIO" && (
                        <CardProduto
                          openDesc={() => abrirModalProduto(produto)}
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
                          preco={produto.valorUnitario}
                          descricao={produto.descricao}
                        />
                      )
                  )
                )}
              </ContainerCard>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Loja;
