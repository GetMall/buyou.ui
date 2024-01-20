import Header from "./components/Header"
import Categoria from "./components/Categoria"
import Banner from "./components/BannerLoja"
import InputPesquisa from "./components/InputPesquisa"
import { useParams } from "react-router-dom"
import Filtro from "./components/Filtro";

function Loja() {

    const { nomeLoja } = useParams()

    return (
        <>
            <Header />
            <div className='flex p-5 justify-center w-full pl-20 mt-20'>
                <Categoria />
            </div>
            <div className='flex w-full mt-3'>
                <Banner nome={nomeLoja}/>
            </div>
            <div className='flex gap-5 pl-60'>
                <InputPesquisa width={"24rem"} placeholder={'Pesquise por item'}/> 
                <Filtro placeholder={'Filtrar por preço'}/>
            </div>
        </>
    )
}

export default Loja