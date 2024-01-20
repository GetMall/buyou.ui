import banner from '../../../../assets/plataforma/Loja/banner-loja.svg'
import logoLoja from '../../../../assets/plataforma/card/img-loja.svg'   

function BannerLoja ({nome}) {
    return (
        <>
            <div className="w-full">
                <img className='w-full' src={banner} alt="" />
                <div className='relative flex gap-6 bottom-16 items-center'>
                    <img className='border-4 relative left-48 rounded-full border-secundary w-52' src={logoLoja} alt="logo da loja" />
                    <p className='text-4xl relative left-48'>{nome}</p>
                </div>
            </div>
        </>
    )   
}

export default BannerLoja    