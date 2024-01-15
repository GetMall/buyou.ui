import mirror from '../../../assets/plataforma/icon-mirror.svg' 
import toy from '../../../assets/plataforma/icon-toy.svg'
import shoes from '../../../assets/plataforma/icon-shoes.svg'
import book from '../../../assets/plataforma/icon-book.svg'
import shirt from '../../../assets/plataforma/icon-shirt.svg'

function Categoria() {
  return (
    <div className="flex items-center text-xl gap-36">
        <div className="flex cursor-pointer gap-2">
            <img src={mirror} alt="" />
            <p>Beleza</p>
        </div>
        <div className="flex cursor-pointer gap-2">
            <img src={toy} alt="" />
            <p>Brinquedos</p>
        </div>
        <div className="flex cursor-pointer gap-2">
            <img src={shoes} alt="" />
            <p>Calçados</p>
        </div>
        <div className="flex cursor-pointer gap-2">
            <img src={book} alt="" />
            <p>Livrária</p>
        </div>
        <div className="flex cursor-pointer gap-2">
            <img src={shirt} alt="" />
            <p>Vestuário</p>
        </div>
    </div>
  )
}

export default Categoria