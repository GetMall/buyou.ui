import cart from "../../../assets/plataforma/icons/icon-cart.svg";
import profile from "../../../assets/plataforma/icons/icon-profile.svg";
import logoutIcon from "../../../assets/plataforma/icons/icon-logout.svg";
import arrow from "../../../assets/plataforma/icons/icon-arrow.svg";
import config from "../../../assets/plataforma/icons/icon-config.svg";
import cartAddProduto from "../../../assets/plataforma/icons/icon-cart-add.svg";
import buyuLogoRoxo from "../../../assets/plataforma/logos/logotipo-roxo.svg";
import InputPesquisa from "./InputPesquisa";
import SideBar from "../../../components/SideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import localIcon from "../../../assets/plataforma/icons/icon-local.svg";

function Header({ onClick, endereco, totalCarrinho, quantidadeCarrinho }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const nomeUsuario = sessionStorage.getItem("nomeUsuario");
  const [showSideBar, setShowSideBar] = useState(false);

  const local = sessionStorage.getItem("endereco");
  const enderecoData = JSON.parse(local);
  const rua = enderecoData?.rua ?? "";

  const navigate = useNavigate();

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const abrirMenu = () => {
    setMenuAberto(true);
  };
  
  const abrirMenuCarrinho = () => {
    setShowSideBar(true);
  };

  const fecharMenuCarrinho = () => {
    setShowSideBar(false);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("idUsuario");
    sessionStorage.removeItem("nomeUsuario");
    sessionStorage.removeItem("shoppingsProximo");
    sessionStorage.removeItem("endereco");
    navigate("/acesso");
  };

  return (
    <>
      <header className="bg-white z-50 text-black shadow-md w-full fixed top-0 p-4">
        <div className="container mx-auto flex items-center">
          <div
            onClick={() => navigate("/inicio")}
            className="text-2xl uppercase cursor-pointer font-bold"
          >
            <img className="w-32" src={buyuLogoRoxo} alt="" />
          </div>
          <div className="flex items-center mx-auto gap-5">
            <div className="flex gap-1">
              <img src={localIcon} className=""  alt="" />
              <p className="cursor-pointer underline" onClick={onClick}>
                {endereco || rua ? endereco || rua  : "Digitar minha localização"}
              </p>
            </div>
            <InputPesquisa
              bgColor={"#F7F7F7"}
              backgroundColor="#F7F7F7"
              width={"40vw"}
              height={"30px"}
              placeholder={"Pesquise por item ou loja"}
            />
            <div
              onClick={menuAberto ? fecharMenu : abrirMenu}
              className="flex justify-center items-center gap-2 cursor-pointer bg-white p-2"
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
            <div onClick={showSideBar ? fecharMenuCarrinho : abrirMenuCarrinho} className={`flex gap-5 cursor-pointer w-28 rounded-3xl justify-center p-2 ${quantidadeCarrinho > 0 ? "bg-primary" : ""}`}>
              {quantidadeCarrinho > 0 ? (
                <>
                  <div  className="flex gap-2">
                    <img
                      src={cartAddProduto}
                      alt=""
                      className="w-6"
                    />
                    <div>
                      <p className="text-xs text-black">R$ {totalCarrinho.toFixed(2)}</p>
                      <p className="text-xs text-black">{quantidadeCarrinho} itens</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div  className="flex gap-2 cursor-pointer">
                    <img
                      src={cart}
                      alt=""
                      className="w-6"
                    />
                    <div>
                      <p className="text-xs">R$ 0,00</p>
                      <p className="text-xs">0 itens</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <div >
      {showSideBar && (
          <div className="flex justify-end">
            <SideBar fecharCarrinho={fecharMenuCarrinho} show={showSideBar} />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
