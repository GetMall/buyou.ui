import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {
    const [shopping, setShopping] = useState([])
    const [loja, setLoja] = useState([])

    const navigate = useNavigate()

    const getShopping = () => {
        api.get('/shopping').then(response => {
            setShopping(response.data)
        }).catch(error => {
            console.log(error)
        });
    }

    const getLoja = () => { 
        api.get('/lojas').then(response => {
            setLoja(response.data)
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getShopping(),
        getLoja()
    }, [])

    return (
        <>
            <Header />
            <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Próximos da sua região</h2>
                <div className="flex flex-wrap gap-5">
                    {shopping.map((shopping) => (
                        <Card key={shopping.id} nomeLoja={shopping.nome} />
                    ))}
                </div>
            </div>
            <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Shoppings Populares</h2>
                <div className="flex flex-wrap gap-5">
                    {shopping.map((shopping) => (
                        <Card onClick={() => navigate(`/shopping/${shopping.id}/${shopping.nome}`)} key={shopping.id} nomeLoja={shopping.nome} />
                    ))}
                </div>
            </div>
            <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Lojas Populares</h2>
                <div className="flex flex-wrap gap-5">
                    {loja.map((loja) => (
                        <Card onClick={() => navigate(`/loja/${loja.id}/${loja.nome}`)} key={loja.id} nomeLoja={loja.nome} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inicio