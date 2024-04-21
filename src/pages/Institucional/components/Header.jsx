import { useNavigate } from "react-router-dom";
import logo from '../../../assets/institucional/logotipo-amarelo-figma.svg';

function Header() {
  const navigate = useNavigate("");
''
  return (
    <>
      <header className="bg-secundary z-50 text-white w-full fixed top-0 p-4">
        <div className="container mx-auto flex justify-center items-center">
          <div className=" uppercase mr-96 font-bold">
            <img className="w-40" src={logo}></img>
          </div>
          <nav className="flex gap-10 items-center space-x-4">
            <p className="hover:text-white tracking-widest">Início</p>
            <p className="hover:text-white tracking-widest">Sobre nós</p>
            <p className="hover:text-white tracking-widest">Dúvidas</p>
            <p className="hover:text-white tracking-widest">Trabalhe Conosco</p>
            <button
              onClick={() => navigate("/acesso")}
              className="bg-[#f0b70f] tracking-widest text-white  p-2 rounded-md"
            >
              Pedir na BuyU!
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
