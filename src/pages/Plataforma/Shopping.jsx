import { useParams } from "react-router-dom";
import Header from "./components/Header"
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import CardShopping from "./components/CardShopping";
import imgShopping from '../../assets/plataforma/card/img-loja.svg'
import search from '../../assets/plataforma/icon-search.svg'
import Card from "./components/Card";
import Footer from "./components/Footer";

function Shopping() {

    const { idShopping } = useParams()
    const { nomeShopping } = useParams()

    const [loja, setLoja] = useState([])

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
                <CardShopping nome={nomeShopping} img={imgShopping} />
            </div>
            <div className="flex p-5 items-center gap-5 pl-20 mt-20">
                <h2 className='text-xl'>Lojas de <span className='text-secundary'>{nomeShopping}</span></h2>
                <div className="flex bg-slate-200 gap-2 p-2">
                    <img src={search} alt="" />
                    <input className='bg-none text-slate-800 w-96 border-none outline-none bg-slate-200' type="text" placeholder='Pesquise por loja' />
                </div>
            </div>
            <div className='flex p-5 gap-3 flex-col pl-20'>
                <div className="flex flex-wrap gap-5">
                    {loja.map((loja) => (
                        <Card key={loja.id} nomeLoja={loja.nome} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shopping