function CardProduto({imgProduto, preco, descricao}) {
    return (
        <div className="w-48 cursor-pointer  justify-center  bg-slate-100">
            <img className="w-full h-56 flex justify-center " src={imgProduto} alt="" />
            <div className="p-5">
                <p className="font-bold text-lg">R$ {preco}</p>
                <p className="text-sm">{descricao}</p>
            </div>
        </div>
    )
}

export default CardProduto