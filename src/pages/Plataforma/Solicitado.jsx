import HeaderLogo from "./components/HeaderLogo";
import solicitadoImg from "../../assets/plataforma/pedido-concluido.svg";


function Solicitado() {
    return (
        <>
            <HeaderLogo />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col">
                    <img className="w-[600px]" src={solicitadoImg} alt="" />
                    <div className="flex justify-center">
                        <button className="bg-secundary text-center rounded-lg text-white p-2 w-[50%]">Voltar ao início</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solicitado;