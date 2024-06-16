import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header"
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import CardShopping from "./components/CardShopping";
import imgShopping from '../../assets/plataforma/card/img-loja.svg'
import Card from "./components/Card";
import Footer from "./components/Footer";
import InputPesquisa from "./components/InputPesquisa";


function Shopping() {

    const { idShopping } = useParams()
    const { nomeShopping } = useParams()

    const [loja, setLoja] = useState([])
    const location = useLocation()

    const imgShopping = location.state.image

    console.log(imgShopping)

    const navigate = useNavigate()

    const getLojasShopping = () => {
        api.get(`/lojas/shopping/${idShopping}`).then(response => {
            setLoja(response.data)
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getLojasShopping()
    }, []);

    return (
        <>
            <Header />
            <div className='flex p-5 justify-center w-full pl-20 mt-36'>
                <CardShopping nome={nomeShopping} img={`${import.meta.env.VITE_LOCAL_IP}/midias/imagens/${imgShopping}`} />
            </div>
            <div className="flex p-5 items-center gap-5 pl-20 mt-20">
                <h2 className='text-xl'>Lojas de <span className='text-secundary'>{nomeShopping}</span></h2>
                <InputPesquisa width={"24rem"} placeholder={"Pesquise por loja"} />
            </div>
            <div className='flex p-5 gap-3 flex-col pl-20'>
                <div className="flex flex-wrap gap-5">
                    {loja.map((loja) => (
                        <Card onClick={() => navigate(`/loja/${loja.id}/${loja.nome}`)} key={loja.id} nomeLoja={loja.nome} 
                        imgLoja={`${import.meta.env.VITE_PROD_IP}/midias/imagens/${loja.imagens[0]?.nomeArquivoSalvo}`}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shopping