import search from '../../../assets/plataforma/icon-search.svg'
import cart from '../../../assets/plataforma/icon-cart.svg'
import profile from '../../../assets/plataforma/icon-profile.svg'
import logout from '../../../assets/plataforma/icon-logout.svg'
import local from '../../../assets/plataforma/icon-local.svg'
import arrow from '../../../assets/plataforma/icon-arrow.svg'
import uparrow from '../../../assets/plataforma/icon-uparrow.svg'
import config from '../../../assets/plataforma/icon-config.svg'
import { useState } from 'react'

function Header() {

    const [menuAberto, setMenuAberto] = useState(false)
    const nomeUsuario = sessionStorage.getItem('nomeUsuario')

    return (
        <header className="bg-white text-secundary shadow-md w-full fixed top-0 p-4">
            <div className="container mx-auto flex">
                <div className="text-2xl uppercase font-bold">GetShop</div>
                <div className="flex items-center mx-auto gap-5">
                    <div className='flex gap-1'>
                        <img src={local} alt="" />
                        <p className='cursor-pointer underline'>Digitar minha localização</p>
                    </div>
                    <div className="flex bg-white_opacity gap-2 p-2">
                        <img src={search} alt="" />
                        <input className='bg-none text-black w-96 border-none outline-none bg-white_opacity' type="text" placeholder='Pesquise por item ou loja' />
                    </div>
                    <div className='flex gap-5'>
                        <img className='cursor-pointer' src={cart} alt="" />
                        <div onClick={() => setMenuAberto(true)} className='flex justify-center items-center gap-2 cursor-pointer bg-white_opacity p-2'>
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
                                    <div onClick={(e) => {e.stopPropagation(); setMenuAberto(false);}} className='p-2 flex justify-center'>
                                        <img className='size-3' src={uparrow} alt="" />
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