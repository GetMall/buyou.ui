import imgLoja from '../../../assets/plataforma/card/img-loja.svg'

function Card ({nomeLoja, onClick}) {
    return (
        <div onClick={onClick} className="flex flex-col w-80 cursor-pointer bg-white h-40 justify-center p-3 border">
            <img className='w-16' src={imgLoja} alt="" />
            <p>{nomeLoja}</p>
            <p>30-40 min</p>
        </div>
    )
}
export default Card