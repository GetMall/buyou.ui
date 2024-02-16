import cart from "../../../assets/plataforma/icons/icon-cart.svg";
import profile from "../../../assets/plataforma/icons/icon-profile.svg";
import logoutIcon from "../../../assets/plataforma/icons/icon-logout.svg";
import local from "../../../assets/plataforma/icons/icon-local.svg";
import arrow from "../../../assets/plataforma/icons/icon-arrow.svg";
import config from "../../../assets/plataforma/icons/icon-config.svg";
import cartAddProduto from "../../../assets/plataforma/icons/icon-cart-add.svg";
import InputPesquisa from "./InputPesquisa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ onClick, endereco }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const nomeUsuario = sessionStorage.getItem("nomeUsuario");

  const [carrinhoItens, setCarrinhoItens] = useState(
    JSON.parse(sessionStorage.getItem("carrinho")) || []
  );

  const navigate = useNavigate();

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const abrirMenu = () => {
    setMenuAberto(true);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("idUsuario");
    sessionStorage.removeItem("nomeUsuario");
    sessionStorage.removeItem("shoppingsProximo");
    sessionStorage.removeItem("endereco");
    navigate("/acesso");
  };

  useEffect(() => {
    const carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
    setCarrinhoItens(carrinho);
  }, []);

  return (
    <header className="bg-secundary z-50 text-white shadow-md w-full fixed top-0 p-4">
      <div className="container mx-auto flex">
        <div
          onClick={() => navigate("/inicio")}
          className="text-2xl uppercase cursor-pointer font-bold"
        >
          GetShop
        </div>
        <div className="flex items-center mx-auto gap-5">
          <div className="flex gap-1">
            <img src={local} alt="" />
            <p className="cursor-pointer underline" onClick={onClick}>
              {endereco ? endereco : "Digitar minha localização"}
            </p>
          </div>
          <InputPesquisa
            bgColor={"#F7F7F7"}
            backgroundColor="#F7F7F7"
            width={"40vw"}
            height={"30px"}
            placeholder={"Pesquise por item ou loja"}
          />
          <div className="flex gap-5">
            {carrinhoItens.length > 0 ? (
              <>
                <img
                  className="cursor-pointer"
                  src={cartAddProduto}
                  onClick={() => navigate("/carrinho")}
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  className="cursor-pointer"
                  src={cart}
                  onClick={() => navigate("/carrinho")}
                  alt=""
                />
              </>
            )}
            <div
              onClick={menuAberto ? fecharMenu : abrirMenu}
              className="flex justify-center items-center gap-2 cursor-pointer bg-secundary p-2"
            >
              <img src={profile} alt="" />
              <p>{nomeUsuario}</p>
              <img src={arrow} className="size-3" alt="" />
              {menuAberto && (
                <div className="absolute mt-36 text-secundary bg-white rounded shadow-md">
                  <div
                    onClick={() => navigate("/perfil")}
                    className="p-2 gap-2 flex items-center"
                  >
                    <img className="size-4" src={config} alt="" />
                    <p>Configurações</p>
                  </div>
                  <div onClick={logout} className="p-2 gap-2 flex items-center">
                    <img className="size-6" src={logoutIcon} alt="" />
                    <p>Sair</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
