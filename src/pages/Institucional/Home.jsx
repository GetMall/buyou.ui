import Header from "./components/Header"
import Carousel from "./components/Carousel"
import imgConta from "../../assets/institucional/img_shopping-mulher.svg"
import imgSobreNos from "../../assets/institucional/img_mulher.svg"
import imgGerencie from "../../assets/institucional/img_entrega.svg"
import imgEntregador from "../../assets/institucional/img_entregador.svg"
import Footer from "./components/Footer"

function Home() {
    return (
        <>
            <Header />
            <main className="flex flex-col mt-20 ">
                <section className="flex bg-primary h-screen">
                    <div className="p-36 pl-72 w-7/12 text-white">
                        <h1 className="text-5xl font-bold">Um Shopping inteiro na sua mão.</h1>
                        <p className="mt-8 text-lg">Para o consumidor de aplicativos de compras online, que possui a necessidade da entrega imediata de determinados produtos, e precisa de uma plataforma que facilite e agilize esse processo, que proporciona comodidade e praticidade.</p>
                        <button className="bg-white text-primary p-3 rounded-md mt-8">Criar uma conta</button>
                    </div>
                    <img className="w-1/3 mr-80" src={imgConta} alt="imagem de um shopping e uma moça" />
                </section>
                <section className="flex">
                    <div className="p-36 pl-72 w-7/12 text-black">
                        <h1 className="text-5xl font-bold text-primary">Sobre Nós</h1>
                        <p className="mt-8 text-lg">Sua solução definitiva para uma experiência de compras verdadeiramente rápida e conveniente. Estamos aqui para tornar a busca pelo produto que você deseja uma experiência descomplicada e, o mais importante, para entregá-lo na velocidade da luz, diretamente às suas mãos.</p>
                        <button className="bg-primary text-white p-3 rounded-md mt-8">Conheça nossa empresa!</button>
                    </div>
                    <img className="w-1/3 mr-80" src={imgSobreNos} alt="imagem de um shopping e uma moça" />
                </section>
                <section className="flex">
                    <img className="w-1/3 ml-72" src={imgGerencie} alt="imagem de um shopping e uma moça" />
                    <div className="p-36 w-7/12 text-black">
                        <h1 className="text-5xl font-bold text-primary">A Parceira certa para seu negócio!</h1>
                        <p className="mt-8 text-lg">Com a GetShop, você conecta seu restaurante a milhões de novos clientes, expande sua área de entrega e vende muito mais.</p>
                        <button className="bg-primary text-white p-3 rounded-md mt-8">Gerencie sua loja!</button>
                    </div>
                </section>
                <section className="flex flex-col justify-center h-screen bg-white_opacity">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl">Nossas Parceiras</h2>
                        <h1 className="text-4xl mt-8 font-bold text-primary">Lojas do mundo todo estão aqui. Esperando por você!</h1>
                        <Carousel />
                    </div>
                </section>
                <section className="flex">
                    <div className="p-36 pl-72 w-7/12 text-black">
                        <h1 className="text-5xl font-bold text-primary">Seja um entregador!</h1>
                        <p className="mt-8 text-lg">Seja um entregador parceiro da GetShop e ganhe dinheiro fazendo entregas para milhares de pessoas na sua cidade.</p>
                        <button className="bg-primary text-white p-3 rounded-md mt-8">Seja um entregador!</button>
                    </div>
                    <img className="w-1/3 mr-80" src={imgEntregador} alt="imagem de um shopping e uma moça" />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home