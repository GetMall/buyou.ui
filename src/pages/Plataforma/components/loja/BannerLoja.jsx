import banner from '../../../../assets/plataforma/Loja/banner-loja.svg'

function BannerLoja ({logoLoja, nome}) {
    return (
        <>
            <div className="w-full">
                <img className='w-full' src={banner} alt="" />
                <div className='relative flex gap-6 bottom-16 items-center'>
                    <img className='relative left-48 w-52' src={logoLoja} alt="logo da loja" />
                    <p className='text-4xl relative left-48'>{nome}</p>
                </div>
            </div>
        </>
    )   
}

export default BannerLoja    