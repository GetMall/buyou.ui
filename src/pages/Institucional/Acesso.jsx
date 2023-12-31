import bgAcesso from '../../assets/institucional/acesso/bg_acesso.svg'

function Acesso() {
    return (
        <>
            <div>
                <div className='flex w-96 justify-center absolute mt-60 ml-60'>
                    <div className='bg-white absolute shadow-lg ml-96 left-96 justify-center'>
                        <div className='p-12 flex flex-col items-center justify-center'>
                            <h1 className='font-bold size-max text-3xl'>Que bom ver você aqui!</h1>
                            <h2 className='size-max mt-3 mb-3'>Como deseja continuar?</h2>
                            <div className='flex flex-col w-96 gap-5'>
                                <input className='outline-none p-2  border-b_gray border-2' type="text" placeholder='Insira seu Email'/>
                                <input className='outline-none p-2 border-b_gray border-2' type="password" placeholder='Insira sua senha' />
                                <button className='bg-btn_orange text-white p-2 font-bold cursor-pointer'>Acessar a GetShop!</button>
                                <p className='flex text-center justify-center'>Ou</p>
                                <button className='bg-white text-btn_orange p-2 font-bold shadow cursor-pointer'>Acessar a GetShop!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='h-screen' src={bgAcesso} alt="" />
            </div>
        </>
    )
}

export default Acesso