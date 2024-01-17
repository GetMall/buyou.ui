import Header from "./components/Header"
import Categoria from "./components/Categoria"
import Banner from "./components/BannerLoja"
import { useParams } from "react-router-dom"

function Loja() {

    const { nomeLoja } = useParams()

    return (
        <>
            <Header />
            <div className='flex p-5 justify-center w-full pl-20 mt-28'>
                <Categoria />
            </div>
            <div className='flex w-full mt-10'>
                <Banner nome={nomeLoja}/>
            </div>
        </>
    )
}

export default Loja