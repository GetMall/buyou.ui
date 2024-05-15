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
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import "react-toastify/dist/ReactToastify.css";

function Loja() {
  const { nomeLoja } = useParams();
  const { idLoja } = useParams();

  const [produto, setProduto] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loja, setLoja] = useState([]);
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

  const adicionarAoCarrinho = (produto) => {
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: true,
      closeButton: true,
    });
    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

  const pesquisarItem = (data) => {
    const itemPesquisado = produto.filter((item) =>
      item.nome.toLowerCase().includes(data.item.toLowerCase())
    );
    setProduto(itemPesquisado);
  };


  useEffect(() => {
    Promise.all([getProduto(), getInfoLoja()])
      .then(() => {
          setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {!loading && (
        <>
          <Header />
          <ToastContainer />
          <div className="flex p-5 justify-center w-full pl-20 mt-20">
            {/* <Categoria onCategoriaSelecionada={getProdutoCategoria} /> */}
          </div>
          <div className="flex w-full mt-3">
            <Banner
              nome={nomeLoja}
              logoLoja={`http://localhost:8080/api/midias/imagens/${loja.imagens[0]?.nomeArquivoSalvo}`}
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
              <Filtro placeholder={"Filtrar por preço"} />
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
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`http://localhost:8080/api/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
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
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`http://localhost:8080/api/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
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
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`http://localhost:8080/api/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
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
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`http://localhost:8080/api/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
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
                          onClick={() => adicionarAoCarrinho(produto)}
                          key={produto.id}
                          nome={produto.nome}
                          imgProduto={`http://localhost:8080/api/midias/imagens/${produto.imagens[0].nomeArquivoSalvo}`}
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
