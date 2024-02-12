import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchLocal from "../../assets/plataforma/icons/icon-search-local.svg";

function Inicio() {
  const [shopping, setShopping] = useState([]);
  const [loja, setLoja] = useState([]);
  const nomeUsuario = sessionStorage.getItem("nomeUsuario");

  const navigate = useNavigate();

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

  useEffect(() => {
    getShopping(), getLoja();
  }, []);

  return (
    <>
      <Header />
      {/* <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Próximos da sua região</h2>
                <div className="flex flex-wrap gap-5">
                    {shopping.map((shopping) => (
                        <Card key={shopping.id} nomeLoja={shopping.nome} />
                    ))}
                </div>
            </div> */}
      <div
        className="w-full flex bg-secundary mt-32 items-center justify-center"
        style={{ height: "500px" }}
      >
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-white text-5xl">
            Bem vindo, {nomeUsuario}!
          </h1>
          <div className="flex mt-6">
            <input
              className="w-72 p-4 outline-none"
              type="text"
              placeholder="Onde deseja receber a compra?"
            />
            <button className="relative flex justify-center right-10 w-10 bg-black text-white">
              <img className="w-8" src={searchLocal} alt="" />
            </button>
          </div>
        </div>
      </div>
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
