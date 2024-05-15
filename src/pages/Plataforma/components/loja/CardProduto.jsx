import liveloLogo from "../../../../assets/plataforma/card/livelo-logo.png";

function CardProduto({ imgProduto, preco, descricao, onClick, nome }) {
  return (
    <div className="w-56 cursor-pointer rounded-sm justify-center  bg-white">
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
          <button
            onClick={onClick}
            className="bg-secundary rounded-md hover:bg-btn_orange text-xs text-white p-2 font-bold cursor-pointer h-8 w-full"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
