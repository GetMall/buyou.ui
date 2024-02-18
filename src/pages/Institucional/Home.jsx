import Header from "./components/Header";
import Carousel from "./components/Carousel";
import imgConta from "../../assets/institucional/img_shopping-mulher.svg";
import imgSobreNos from "../../assets/institucional/img_mulher.svg";
import imgGerencie from "../../assets/institucional/img_entrega.svg";
import imgEntregador from "../../assets/institucional/img_entregador.svg";
import imgBg from "../../assets/institucional/div.section-hero-imagine.svg";
import Footer from "./components/Footer";
import downloadIcon from "../../assets/institucional/download-icon.svg";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="flex">
          <div className="flex flex-col mt-52 w-full justify-center items-center absolute">
            <h1 className="text-5xl uppercase text-white font-bold">
              Um Shopping inteiro na sua mão...
            </h1>
            <div className="text-center w-1/2 mt-5 text-xl text-white">
              <p>
                Para o consumidor de aplicativos de compras online, que possui a
                necessidade da entrega imediata de determinados produtos, e
                precisa de uma plataforma que facilite e agilize esse processo,
                que proporciona comodidade e praticidade.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="bg-white text-lg text-secundary p-3 rounded-md mt-8">
                <div className="flex items-center">
                  <img className="w-8" src={downloadIcon} alt="" />
                  Baixar o Aplicativo
                </div>
              </button>
              <button className="bg-black text-lg text-white p-3 rounded-md mt-8">
                Explore a Buyou na Web
              </button>
            </div>
          </div>
          <img className="w-full" src={imgBg} alt="" />
        </section>
        <section className="flex bg-white">
          <img
            className="w-1/3 ml-80"
            src={imgConta}
            alt="imagem de um shopping e uma moça"
          />
          <div className="p-36  w-7/12 text-secundary">
            <h1 className="text-5xl font-bold">
              Crie sua conta e faça suas compras!
            </h1>
            <p className="mt-8 text-lg text-secundary">
              Registre-se agora e comece a aproveitar as vantagens da nossa
              plataforma de compras online! Com a sua conta criada, você poderá
              fazer suas compras rapidamente, garantindo a entrega imediata dos
              produtos que você precisa. Não perca tempo buscando em diversos
              lugares, tenha tudo ao alcance dos seus dedos com facilidade e
              praticidade. Registre-se hoje e simplifique sua experiência de
              compras online!
            </p>
            <button className="bg-secundary text-white p-3 rounded-md mt-8">
              Criar uma conta
            </button>
          </div>
        </section>
        <section className="flex">
          <div className="p-36 pl-72 w-7/12 text-black">
            <h1 className="text-5xl font-bold text-secundary">Sobre Nós</h1>
            <p className="mt-8 text-lg text-secundary">
              Sua solução definitiva para uma experiência de compras
              verdadeiramente rápida e conveniente. Estamos aqui para tornar a
              busca pelo produto que você deseja uma experiência descomplicada
              e, o mais importante, para entregá-lo na velocidade da luz,
              diretamente às suas mãos.
            </p>
            <button className="bg-secundary text-white p-3 rounded-md mt-8">
              Conheça nossa empresa!
            </button>
          </div>
          <img
            className="w-1/3 mr-80"
            src={imgSobreNos}
            alt="imagem de um shopping e uma moça"
          />
        </section>
        <section className="flex">
          <img
            className="w-1/3 ml-72"
            src={imgGerencie}
            alt="imagem de um shopping e uma moça"
          />
          <div className="p-36 w-7/12 text-black">
            <h1 className="text-5xl font-bold text-secundary">
              A Parceira certa para seu negócio!
            </h1>
            <p className="mt-8 text-lg text-secundary">
              Com a Buyou, você conecta seu restaurante a milhões de novos
              clientes, expande sua área de entrega e vende muito mais.
            </p>
            <button className="bg-secundary text-white p-3 rounded-md mt-8">
              Gerencie sua loja!
            </button>
          </div>
        </section>
        <section className="flex flex-col justify-center h-screen bg-white_opacity">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl">Nossas Parceiras</h2>
            <h1 className="text-4xl mt-8 font-bold text-secundary">
              Lojas do mundo todo estão aqui. Esperando por você!
            </h1>
            <Carousel />
          </div>
        </section>
        <section className="flex">
          <div className="p-36 pl-72 w-7/12 text-black">
            <h1 className="text-5xl font-bold text-secundary">
              Seja um entregador!
            </h1>
            <p className="mt-8 text-lg text-secundary">
              Seja um entregador parceiro da Buyou e ganhe dinheiro fazendo
              entregas para milhares de pessoas na sua cidade.
            </p>
            <button className="bg-secundary text-white p-3 rounded-md mt-8">
              Seja um entregador!
            </button>
          </div>
          <img
            className="w-1/3 mr-80"
            src={imgEntregador}
            alt="imagem de um shopping e uma moça"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
