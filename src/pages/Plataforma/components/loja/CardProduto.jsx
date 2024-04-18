import liveloLogo from '../../../../assets/plataforma/card/livelo-logo.png'

function CardProduto({ imgProduto, preco, descricao, onClick }) {
    return (
        <div className="w-96 cursor-pointer rounded-sm justify-center border bg-white">
            <img className="w-full h-56 flex rounded-sm justify-center " src={imgProduto} alt="" />
            <div className="p-5">
                <div className="flex justify-between">
                <p className="font-bold text-lg">R$ {preco}</p>
                <div className='flex justify-center items-center gap-2'>
                <img className='w-[30px]' src={liveloLogo} alt="" />
                <p className='text-[#e50091]'>{preco.toFixed(0)}<span>pts</span></p>
                </div>
                </div>
                <p className="text-sm overflow-hidden line-clamp-1">{descricao}</p>
                <div className="flex mt-10">
                    <button onClick={onClick} className='bg-secundary rounded-sm hover:bg-btn_orange text-xs text-white p-2 font-bold cursor-pointer h-8 w-full'>Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduto