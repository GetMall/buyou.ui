import liveloLogo from '../../../../assets/plataforma/card/livelo-logo.png'

function CardProdutoCart({ imgProduto, preco, descricao, onClick, tamanho, cor }) {
    return (
        <div className="w-full cursor-pointer border justify-center shadow-sm bg-white">
            <div className="flex">
                <img className="w-56 h-56 flex justify-center " src={imgProduto} alt="" />
                <div className="flex flex-col p-5">
                    <h2 className="text-xl font-bold">Caracteristicas</h2>
                    <p className="text-sm overflow-hidden line-clamp-1">{descricao}</p>
                    <p className="text-sm overflow-hidden line-clamp-1">Tamanho: {tamanho}</p>
                    <p className="text-sm overflow-hidden line-clamp-1">Cor: {cor}</p>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <div className='flex'>
                                <h2 className="text-xl font-bold">Total</h2>
                                <p className="font-bold text-lg">R$ {preco}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                    <div className='flex items-center gap-2'>
                        <img className='w-[30px]' src={liveloLogo} alt="" />
                        <p className='text-[#e50091]'>{preco.toFixed(0)}<span>pts</span></p>
                    </div>
                    <button onClick={onClick} className=' text-xs bg-primary text-white p-2 font-bold cursor-pointer h-8'>Remover do Carrinho</button>
                </div>

            </div>
        </div>
    )
}

export default CardProdutoCart