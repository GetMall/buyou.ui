function Header (){
    return (
        <header className="bg-primary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl uppercase font-bold">GetShop</div>
                <nav className="flex items-center space-x-4">
                    <p className="hover: text-white font-bold">Início</p>
                    <p className="hover: text-white font-bold">Sobre nós</p>
                    <p className="hover: text-white font-bold">Dúvidas</p>
                    <p className="hover: text-white font-bold">Trabalhe Conosco</p>
                    <button className="bg-white text-primary p-3 rounded-md">Pedir na GetShop!</button>
                </nav>
            </div>
        </header>
    )
}

export default Header