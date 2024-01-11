import search from '../../../assets/plataforma/icon-search.svg'
import cart from '../../../assets/plataforma/icon-cart.svg'
import profile from '../../../assets/plataforma/icon-profile.svg'
import logout from '../../../assets/plataforma/icon-logout.svg'

function Header() {
    return (
        <header className="bg-white text-secundary shadow-md w-full fixed top-0 p-4">
            <div className="container mx-auto flex">
                <div className="text-2xl uppercase font-bold">GetShop</div>
                <div className="flex items-center  mx-auto  gap-11">
                    <p className='cursor-pointer underline'>Digitar minha localização</p>
                    <div className="flex bg-white_opacity gap-2 p-2">
                        <img src={search} alt="" />
                        <input className='bg-none text-black w-96 border-none outline-none bg-white_opacity' type="text" placeholder='Pesquise por item ou loja'/>
                    </div>
                    <div className='flex gap-5'>
                        <img className='cursor-pointer' src={cart} alt="" />
                        <img className='cursor-pointer' src={profile} alt="" />
                    </div>
                </div>
                <img className='cursor-pointer' src={logout} alt="" />
            </div>
        </header>
    )
}

export default Header