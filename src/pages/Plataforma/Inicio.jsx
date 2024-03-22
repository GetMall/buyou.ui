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
import imgLocalModal from "../../assets/plataforma/cuate.svg";
import InputPesquisa from "./components/InputPesquisa";
import MapComponent from "../../components/MapComponent";
import Loading from "../../components/loading";

function Inicio() {
  const [shoppingsProximo, setShoppingsProximo] = useState([]);
  const [modalShoppingsProximo, setModalShoppingsProximo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shopping, setShopping] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [endereco, setEndereco] = useState([]);
  const [rua, setRua] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loja, setLoja] = useState([]);
  const nomeUsuario = sessionStorage.getItem("nomeUsuario");
  const idUser = sessionStorage.getItem("idUsuario");

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const getShopping = () => {
    return new Promise((resolve, reject) => {
      api
        .get("/shopping")
        .then((response) => {
          setShopping(response.data);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };
  
  const getLoja = () => {
    return new Promise((resolve, reject) => {
      api
        .get("/lojas")
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


  const getShoppingsProximo = () => {
    return new Promise((resolve, reject) => {
      api
        .get(`/shopping/proximos?id=${idUser}`)
        .then((res) => {
          setModalShoppingsProximo(res.data);
          sessionStorage.setItem('shoppingsProximo', JSON.stringify(res.data));
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  const confirmarLocal = () => {
    setShoppingsProximo(modalShoppingsProximo);
    setShowModal(false);
    setShowMap(false);
  };


  const buscar = (data) => {
    api
      .put(`/clientes/${idUser}/enderecos?cep=${data.local}`)
      .then((response) => {
        setEndereco(response.data.endereco);
        setShoppingsProximo(modalShoppingsProximo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarModal = (data) => {
    console.log(data);
    api
      .put(`/clientes/${idUser}/enderecos?cep=${data.localModal}`)
      .then((response) => {
        setLat(response.data.endereco.latitude);
        setLong(response.data.endereco.longitude);
        setRua(response.data.endereco.rua);
        setEndereco(response.data.endereco);
        getShoppingsProximo();
        sessionStorage.setItem('shoppingsProximo', JSON.stringify(response.data.shoppingsProximo));
        sessionStorage.setItem('endereco', JSON.stringify(response.data.endereco));
        setShowMap(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
    setShowMap(false);
  };

  useEffect(() => {
    Promise.all([getShoppingsProximo(), getShopping(), getLoja()])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });

    const savedShoppingsProximo = sessionStorage.getItem('shoppingsProximo');
    const savedEndereco = sessionStorage.getItem('endereco');
    if (savedShoppingsProximo) {
      setShoppingsProximo(JSON.parse(savedShoppingsProximo));
    } else {
      getShoppingsProximo();
    }
    if (savedEndereco) {
      setEndereco(JSON.parse(savedEndereco));
    }
  }, []);

  return (
    <>
      {showModal && (
        <>
          <Modal onClick={closeModal}>
            {showMap ? (
              <>
                <div className="flex relative flex-col justify-center items-center">
                  <p className="text-lg opacity-70">
                    {endereco.rua} - {endereco.cep}
                  </p>
                  <p className="text-sm opacity-50">
                    {endereco.bairro}, {endereco.cidade} - {endereco.estado}
                  </p>
                </div>
                <button
                  onClick={confirmarLocal}
                  className="absolute z-50 p-5 flex h-14 justify-center w-96 bg-secundary text-white"
                  style={{ marginTop: "450px", marginLeft: "25%" }}
                >
                  Confirmar Localização
                </button>
                <MapComponent
                  lat={lat}
                  long={long}
                  shoppings={modalShoppingsProximo}
                />
              </>
            ) : (
              <form onSubmit={handleSubmit(buscarModal)}>
                <div className="flex flex-col justify-center items-center mt-10">
                  <img className="w-32" src={imgLocalModal} alt="" />
                  <h1 className="text-lg mt-5 mb-3">
                    Onde você quer receber seu pedido?
                  </h1>

                  <div className="flex">
                    <button
                      type="submit"
                      className="relative flex h-14 justify-center items-center w-12 bg-secundary text-white"
                    >
                      <img className="w-8" src={searchLocal} alt="" />
                    </button>
                    <InputPesquisa
                      register={register("localModal")}
                      bgColor={"#F7F7F7"}
                      backgroundColor="#F7F7F7"
                      height="40px"
                      paddingLeft={"10px"}
                      width="600px"
                      displayIcon={"none"}
                      placeholder="Buscar Endereço"
                    />
                  </div>
                </div>
              </form>
            )}
          </Modal>
        </>
      )}
      {loading && <div><Loading /></div>}
      {!loading && (
        <>
          <Header endereco={endereco.rua} onClick={() => setShowModal(true)} />
          {shoppingsProximo.length === 0 ? (
            <div
              className="w-full flex bg-secundary mt-6 items-center justify-center"
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
                      className="relative flex justify-center items-center right-10 w-10 bg-black text-white"
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
                      navigate(`/shopping/${shopping.id}/${shopping.nome}`)
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
      )}

    </>
  );
}

export default Inicio;
