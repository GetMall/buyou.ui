import { useState } from 'react'
import { useForm } from "react-hook-form";
import bgAcesso from '../../assets/institucional/acesso/bg_acesso.svg'
import iconRetun from '../../assets/institucional/acesso/icon_return.svg'
import api from '../../services/api';

function Acesso() {
    const [formularioCadastro, setFormularioCadastro] = useState(false)
    const { register, handleSubmit } = useForm();


    const criarConta = () => {
        setFormularioCadastro(true)
    }

    const efetuarLogin = () => {
        setFormularioCadastro(false)
    }

    const cadastrar = (data) => {
        api.post('/', data).then((response) => {
            console.log(response)
        }
        ).catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <>
            <div>
                <div className='flex w-96 justify-center absolute mt-60 ml-60'>
                    <div className='bg-white absolute shadow-lg ml-96 left-96 justify-center'>
                        <div className='p-12 flex flex-col items-center justify-center'>
                            {formularioCadastro ? (
                                <>
                                <form onSubmit={handleSubmit(cadastrar)}>
                                    <img onClick={efetuarLogin} className='flex relative mr-96 bottom-5 cursor-pointer' src={iconRetun} alt="" />
                                    <h1 className='font-bold text-center text-3xl'>Falta pouco para encontrar seu produto!</h1>
                                    <h2 className='flex justify-center mt-3 mb-3'>Crie sua conta aqui!</h2>
                                    <div className='flex flex-col w-96 gap-5'>
                                        <input {...register("nomeUsuario")} className='outline-none p-2  border-b_gray border-2' type="text" placeholder='Informe seu nome de usuário' />
                                        <input {...register("emailUsuario")} className='outline-none p-2 border-b_gray border-2' type="text" placeholder='Informe seu Email' />
                                        <input {...register("senha")} className='outline-none p-2  border-b_gray border-2' type="password" placeholder='Crie uma senha' />
                                        <input className='outline-none p-2 border-b_gray border-2' type="password" placeholder='Confirme sua senha' />
                                        <button className='bg-btn_orange text-white p-2 font-bold cursor-pointer' type='submit'>Me tornar um cliente</button>
                                    </div>
                                </form>
                                </>
                            ) : (
                                <>
                                    <h1 className='font-bold size-max text-3xl'>Que bom ver você aqui!</h1>
                                    <h2 className='size-max mt-3 mb-3'>Como deseja continuar?</h2>
                                    <div className='flex flex-col w-96 gap-5'>
                                        <input className='outline-none p-2  border-b_gray border-2' type="text" placeholder='Insira seu Email' />
                                        <input className='outline-none p-2 border-b_gray border-2' type="password" placeholder='Insira sua senha' />
                                        <button type='submit' className='bg-btn_orange text-white p-2 font-bold cursor-pointer'>Acessar a GetShop!</button>
                                        <p className='flex text-center justify-center'>Ou</p>
                                        <button onClick={criarConta} className='bg-white text-btn_orange p-2 font-bold shadow cursor-pointer'>Criar uma conta GetShop!</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <img className='h-screen' src={bgAcesso} alt="" />
            </div>
        </>
    )
}

export default Acesso