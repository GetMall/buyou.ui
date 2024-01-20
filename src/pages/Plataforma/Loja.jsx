import Header from "./components/Header"
import Categoria from "./components/Categoria"
import Banner from "./components/BannerLoja"
import InputPesquisa from "./components/InputPesquisa"
import { useParams } from "react-router-dom"
import Filtro from "./components/Filtro";
import imgProduto from '../../assets/plataforma/Loja/img-produto.svg'
import ContainerCard from "./components/loja/ContainerCard";
import CardProduto from "./components/loja/CardProduto";

function Loja() {

    const { nomeLoja } = useParams()

    return (
        <>
            <Header />
            <div className='flex p-5 justify-center w-full pl-20 mt-20'>
                <Categoria />
            </div>
            <div className='flex w-full mt-3'>
                <Banner nome={nomeLoja} />
            </div>
            <div className='pl-60'>
                <div className='flex gap-5'>
                    <InputPesquisa width={"24rem"} placeholder={'Pesquise por item'} />
                    <Filtro placeholder={'Filtrar por preço'} />
                </div>
                <ContainerCard titulo={"Beleza"}>
                    <CardProduto imgProduto={imgProduto} preco={'38,00'} descricao={'Phebo Hidratante Limão Siciliano'}/>
                </ContainerCard>
            </div>
        </>
    )
}

export default Loja