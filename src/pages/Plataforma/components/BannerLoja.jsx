import banner from '../../../assets/plataforma/Loja/banner-loja.svg'
import logoLoja from '../../../assets/plataforma/card/img-loja.svg'   

function BannerLoja ({nome}) {
    return (
        <>
            <div className="w-full">
                <img className='w-full' src={banner} alt="" />
                <div className='flex relative gap-6 left-60 bottom-16 items-center'>
                    <img className='border-4 rounded-full border-secundary w-52' src={logoLoja} alt="logo da loja" />
                    <p className='text-4xl'>{nome}</p>
                </div>
            </div>
        </>
    )   
}

export default BannerLoja    