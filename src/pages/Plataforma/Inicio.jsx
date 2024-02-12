import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchLocal from "../../assets/plataforma/icons/icon-search-local.svg";
import { useForm } from "react-hook-form";
import Modal from "../../components/Modal";
import imgLocalModal from "../../assets/plataforma/cuate.svg"
import InputPesquisa from "./components/InputPesquisa";

function Inicio() {
  const [shoppingsProximo, setShoppingsProximo] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [loja, setLoja] = useState([]);
  const nomeUsuario = sessionStorage.getItem("nomeUsuario");
  const idUser = sessionStorage.getItem("idUsuario");

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const getShopping = () => {
    api
      .get("/shopping")
      .then((response) => {
        setShopping(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLoja = () => {
    api
      .get("/lojas")
      .then((response) => {
        setLoja(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getShoppingsProximo = () => {
    api
      .get(`/shopping/proximos?id=${idUser}`)
      .then((res) => {
        setShoppingsProximo(res.data);
      })
      .catch((err) => {});
  };

  const buscar = (data) => {
    api
      .put(`/clientes/${idUser}/enderecos?cep=${data.local}`)
      .then((response) => {
        getShoppingsProximo();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getShopping(), getLoja(), getShoppingsProximo();
  }, []);

  return (
    <>
      <Modal>
        <div className="flex flex-col justify-center items-center mt-10">
          <img className="w-32" src={imgLocalModal} alt="" />
          <h1 className="text-lg mt-5 mb-3">Onde você quer receber seu pedido?</h1>
          <InputPesquisa bgColor={'#F7F7F7'} backgroundColor="#F7F7F7" height="40px" width="600px" placeholder="Buscar Endereço" />
        </div>
      </Modal>

      <Header />
      {shoppingsProximo.length === 0 ? (
        <div
          className="w-full flex bg-secundary mt-32 items-center justify-center"
          style={{ height: "500px" }}
        >
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-white text-5xl">
              Bem vindo, {nomeUsuario}!
            </h1>
            <form onSubmit={handleSubmit(buscar)}>
              <div className="flex mt-6">
                <input
                  {...register("local")}
                  className="w-72 p-4 outline-none"
                  type="text"
                  placeholder="Onde deseja receber a compra?"
                />
                <button
                  type="submit"
                  className="relative flex justify-center right-10 w-10 bg-black text-white"
                >
                  <img className="w-8" src={searchLocal} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex p-5 gap-3 flex-col pl-20 mt-36">
          <h2 className="text-xl">Próximos da sua região</h2>
          <div className="flex flex-wrap gap-5">
            {shoppingsProximo.map((shopping) => (
              <Card
                onClick={() =>
                  navigate(`/loja/${shopping.id}/${shopping.nome}`)
                }
                key={shopping.id}
                nomeLoja={shopping.nome}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex p-5 gap-3 flex-col pl-20 mt-36">
        <h2 className="text-xl">Shoppings Populares</h2>
        <div className="flex flex-wrap gap-5">
          {shopping.map((shopping) => (
            <Card
              onClick={() =>
                navigate(`/shopping/${shopping.id}/${shopping.nome}`)
              }
              key={shopping.id}
              nomeLoja={shopping.nome}
            />
          ))}
        </div>
      </div>
      <div className="flex p-5 gap-3 flex-col pl-20 mt-36">
        <h2 className="text-xl">Lojas Populares</h2>
        <div className="flex flex-wrap gap-5">
          {loja.map((loja) => (
            <Card
              onClick={() => navigate(`/loja/${loja.id}/${loja.nome}`)}
              key={loja.id}
              nomeLoja={loja.nome}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inicio;
