import HeaderLogo from "./components/HeaderLogo";
import solicitadoImg from "../../assets/plataforma/pedido-concluido.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Solicitado() {

    const navigate = useNavigate();
    const [codigo, setCodigo] = useState("")

    const gerarCodigo = () => {
        const codigo = Math.floor(Math.random() * 999999)
        setCodigo(codigo)
    }

    useEffect(() => {
        gerarCodigo()
    }, [])

    return (
        <>
            <HeaderLogo />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <h1 className="text-9xl">{codigo}</h1>
                        <div className="bg-slate-100 p-10">
                            <p className="text-slate-500">Apresente esse código de confirmação ao entregador para receber seu pedido.</p>
                        </div>
                        <button onClick={() => navigate("/inicio")} className="bg-secundary text-center rounded-lg text-white p-2 w-[50%]">Continuar comprando</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solicitado;