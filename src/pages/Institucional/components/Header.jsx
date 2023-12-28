import { useNavigate } from "react-router-dom";

function Header (){

    const navigate = useNavigate('');

    return (
        <>
        <header className="bg-primary text-white w-full fixed top-0 p-4">
            <div className="container mx-auto flex justify-center items-center">
            <div className="text-2xl uppercase mr-96 font-bold">GetShop</div>
                <nav className="flex gap-10 items-center space-x-4">
                    <p className="hover:text-white font-bold">Início</p>
                    <p className="hover:text-white font-bold">Sobre nós</p>
                    <p className="hover:text-white font-bold">Dúvidas</p>
                    <p className="hover:text-white font-bold">Trabalhe Conosco</p>
                    <button onClick={() => navigate('/acesso')} className="bg-white text-primary p-3 rounded-md">Pedir na GetShop!</button>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header