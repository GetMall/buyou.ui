import liveloLogo from "../../../../assets/plataforma/card/livelo-logo.png";
import "./Card.css";


function CardProduto({ imgProduto, preco, descricao, onClick, openDesc, nome }) {
  return (
    <div className="mb-4 card-container">
      <div onClick={openDesc} className="w-56 cursor-pointer rounded-sm justify-center  bg-white">
        <img
          className="w-full h-56 flex rounded-xl justify-center "
          src={imgProduto}
          alt=""
        />
        <div className="p-5">
          <div className="flex justify-between">
            <p className="text-base font-medium">R$ {preco}</p>
          </div>
          <p className="text-base">{nome}</p>
          <p className="text-sm overflow-hidden line-clamp-1">{descricao}</p>
          <div className="flex items-center relative top-5 gap-2">
            <img className="w-[30px]" src={liveloLogo} alt="" />
            <p className="text-[#e50091]">
              {preco.toFixed(0)}
              <span>pts</span>
            </p>
          </div>
          <div className="flex mt-10">

          </div>
        </div>
      </div>
      <button
        onClick={onClick}
        className="bg-secundary mb-5 rounded-md hover:bg-btn_orange text-xs text-white p-2 font-bold cursor-pointer h-8 w-full"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default CardProduto;
