import Header from "./components/Header"
import imgConta from "../../assets/institucional/img_section1.svg"
import imgSobreNos from "../../assets/institucional/img_section3.svg"
import imgGerencie from "../../assets/institucional/img_section4.svg"

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
                        <p className="mt-8 text-lg">Para o consumidor de aplicativos de compras online, que possui a necessidade da entrega imediata de determinados produtos, e precisa de uma plataforma que facilite e agilize esse processo, que proporciona comodidade e praticidade.</p>
                        <button className="bg-primary text-white p-3 rounded-md mt-8">Criar uma conta</button>
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
                <section className="flex flex-col items-center mt-20">
                    <h1 className="text-5xl text-primary  font-bold">Como funciona?</h1>
                    <div className="flex mt-20">
                        <div className="flex flex-col items-center">
                            <div className="bg-primary rounded-full w-32 h-32 flex justify-center items-center">
                                <p className="text-white text-5xl">1</p>
                            </div>
                            <p className="text-2xl mt-8">Você escolhe o produto...</p>
                        </div>
                        <div className="flex flex-col items-center ml-36">
                            <div className="bg-primary rounded-full w-32 h-32 flex justify-center items-center">
                                <p className="text-white text-5xl">2</p>
                            </div>
                            <p className="text-2xl mt-8">Nós encontramos o Shopping mais próximo...</p>
                        </div>
                        <div className="flex flex-col items-center ml-36">
                            <div className="bg-primary rounded-full w-32 h-32 flex justify-center items-center">
                                <p className="text-white text-5xl">3</p>
                            </div>
                            <p className="text-2xl mt-8">Entregamos em menos de 1 hora!</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home