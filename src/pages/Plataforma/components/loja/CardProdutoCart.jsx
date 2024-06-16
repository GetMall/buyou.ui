import liveloLogo from '../../../../assets/plataforma/card/livelo-logo.png'

function CardProdutoCart({ preco, onClick, nome }) {
    return (
        <div className="w-full cursor-pointer border-t-2 border-b-2 justify-center shadow-sm bg-white">
            <div className="flex">
                <div className="flex flex-col w-full">
                    <div className="mt-5 p-5">
                        <div className='flex justify-between'>
                            <p className='font-bold f text-sm'>{nome}</p>
                            <p className="font-bold text-sm">R$ {preco}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div className="flex justify-between">
                    <button onClick={onClick} className=' text-sm font-light text-[#a6a29f] p-2 font-bold cursor-pointer h-8'>Remover</button>
                    <div className='flex items-center gap-2'>
                        <img className='w-[30px]' src={liveloLogo} alt="" />
                        <p className='text-[#e50091]'>{preco.toFixed(0)}<span>pts</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProdutoCart