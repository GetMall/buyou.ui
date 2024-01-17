import banner from '../../../assets/plataforma/Loja/banner-loja.svg'
import logoLoja from '../../../assets/plataforma/card/img-loja.svg'   

function BannerLoja ({nome}) {
    return (
        <>
            <div className="w-full">
                <img className='w-full' src={banner} alt="" />
                <div className='flex'>
                    <img src={logoLoja} alt="logo da loja" />
                    <p>{nome}</p>
                </div>
            </div>
        </>
    )   
}

export default BannerLoja   