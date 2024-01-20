import Header from "./components/Header"
import Categoria from "./components/Categoria"
import Banner from "./components/BannerLoja"
import InputPesquisa from "./components/InputPesquisa"
import { useParams } from "react-router-dom"
import Filtro from "./components/Filtro";
import imgProduto from '../../assets/plataforma/Loja/img-produto.svg'
import ContainerCard from "./components/loja/ContainerCard";
import CardProduto from "./components/loja/CardProduto";
import api from "../../services/api";
import { useEffect, useState } from "react"

function Loja() {

    const { nomeLoja } = useParams()
    const { idLoja } = useParams()

    const [produto, setProduto] = useState([])
    const [categoria, setCategoria] = useState([])

    const getProduto = () => {
        api.get(`/produtos/loja/${idLoja}`).then(response => {
            console.log(response.data)
            setProduto(response.data)
            setCategoria(response.data.categoria)
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getProduto()
    }, [])

    return (
        <>
            <Header />
            <div className='flex p-5 justify-center w-full pl-20 mt-20'>
                <Categoria />
            </div>
            <div className='flex w-full mt-3'>
                <Banner nome={nomeLoja} />
            </div>
            <div className='pl-36'>
                <div className='flex gap-5'>
                    <InputPesquisa width={"24rem"} placeholder={'Pesquise por item'} />
                    <Filtro placeholder={'Filtrar por preço'} />
                </div>
                {produto.some(item => item.categoria === 'BELEZA') && (
                    <ContainerCard titulo={"Beleza"}>
                        {produto.map((produto) => (
                            produto.categoria === 'BELEZA' && (
                                <CardProduto key={produto.id} imgProduto={imgProduto} preco={produto.valorUnitario} descricao={produto.descricao} />
                            )
                        ))}
                    </ContainerCard>
                )}

                {produto.some(item => item.categoria === 'BRINQUEDOS') && (
                    <ContainerCard titulo={"Brinquedos"}>
                        {produto.map((produto) => (
                            produto.categoria === 'BRINQUEDOS' && (
                                <CardProduto key={produto.id} imgProduto={imgProduto} preco={produto.valorUnitario} descricao={produto.descricao} />
                            )
                        ))}
                    </ContainerCard>
                )}


                {produto.some(item => item.categoria === 'CALCADOS') && (
                    <ContainerCard titulo={"Calçados"}>
                        {produto.map((produto) => (
                            produto.categoria === 'CALCADOS' && (
                                <CardProduto key={produto.id} imgProduto={imgProduto} preco={produto.valorUnitario} descricao={produto.descricao} />
                            )
                        ))}
                    </ContainerCard>
                )}


                {produto.some(item => item.categoria === 'LIVRARIA') && (
                    <ContainerCard titulo={"Livros"}>
                        {produto.map((produto) => (
                            produto.categoria === 'LIVRARIA' && (
                                <CardProduto key={produto.id} imgProduto={imgProduto} preco={produto.valorUnitario} descricao={produto.descricao} />
                            )
                        ))}
                    </ContainerCard>
                )}

                {produto.some(item => item.categoria === 'VESTUARIO') && (
                    <ContainerCard titulo={"Vestuário"}>
                        {produto.map((produto) => (
                            produto.categoria === 'VESTUARIO' && (
                                <CardProduto key={produto.id} imgProduto={imgProduto} preco={produto.valorUnitario} descricao={produto.descricao} />
                            )
                        ))}
                    </ContainerCard>
                )}
            </div>
        </>
    )
}

export default Loja