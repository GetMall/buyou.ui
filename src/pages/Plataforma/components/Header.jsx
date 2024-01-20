import cart from '../../../assets/plataforma/icons/icon-cart.svg'
import profile from '../../../assets/plataforma/icons/icon-profile.svg'
import logout from '../../../assets/plataforma/icons/icon-logout.svg'
import local from '../../../assets/plataforma/icons/icon-local.svg'
import arrow from '../../../assets/plataforma/icons/icon-arrow.svg'
import config from '../../../assets/plataforma/icons/icon-config.svg'
import InputPesquisa from './InputPesquisa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from 'postcss'

function Header() {

    const [menuAberto, setMenuAberto] = useState(false)
    const nomeUsuario = sessionStorage.getItem('nomeUsuario')

    const navigate = useNavigate()

    const fecharMenu = () => {
        setMenuAberto(false)
    }

    const abrirMenu = () => {
        setMenuAberto(true)
    }

    return (
        <header className="bg-white z-50 text-secundary shadow-md w-full fixed top-0 p-4">
            <div className="container mx-auto flex">
                <div onClick={() => navigate('/inicio')} className="text-2xl uppercase cursor-pointer font-bold">GetShop</div>
                <div className="flex items-center mx-auto gap-5">
                    <div className='flex gap-1'>
                        <img src={local} alt="" />
                        <p className='cursor-pointer underline'>Digitar minha localização</p>
                    </div>
                    <InputPesquisa width={"24rem"} placeholder={"Pesquise por item ou loja"} />
                    <div className='flex gap-5'>
                        <img className='cursor-pointer' src={cart} alt="" />
                        <div onClick={menuAberto ? fecharMenu : abrirMenu} className='flex justify-center items-center gap-2 cursor-pointer bg-white_opacity p-2'>
                            <img src={profile} alt="" />
                            <p>{nomeUsuario}</p>
                            <img src={arrow} className='size-3' alt="" />
                            {menuAberto && (
                                <div className='absolute mt-36 bg-white rounded shadow-md'>
                                    <div className='p-2 gap-2 flex items-center'>
                                        <img className='size-4' src={config} alt="" />
                                        <p>Configurações</p>
                                    </div>
                                    <div className='p-2 gap-2 flex items-center'>
                                        <img className='size-6' src={logout} alt="" />
                                        <p>Sair</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header