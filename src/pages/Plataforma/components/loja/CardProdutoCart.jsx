function CardProdutoCart({imgProduto, preco, descricao, onClick}) {
    return (
        <div className="w-48 cursor-pointer  justify-center  bg-slate-100">
            <img className="w-full h-56 flex justify-center " src={imgProduto} alt="" />
            <div className="p-5">
                <p className="font-bold text-lg">R$ {preco}</p>
                <p className="text-sm overflow-hidden line-clamp-1">{descricao}</p>
                <div className="flex">
                    <button onClick={onClick} className='bg-btn_orange text-xs text-white p-2 font-bold cursor-pointer h-8 w-full'>Remover do Carrinho</button>
                </div>
            </div>
        </div>
    )
}

export default CardProdutoCart