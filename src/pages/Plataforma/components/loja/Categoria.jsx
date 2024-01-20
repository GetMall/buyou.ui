import mirror from '../../../../assets/plataforma/icons/icon-mirror.svg' 
import toy from '../../../../assets/plataforma/icons/icon-toy.svg'
import shoes from '../../../../assets/plataforma/icons/icon-shoes.svg'
import book from '../../../../assets/plataforma/icons/icon-book.svg'
import shirt from '../../../../assets/plataforma/icons/icon-shirt.svg'

function Categoria( {onCategoriaSelecionada} ) {
  return (
    <div className="flex items-center text-xl gap-36">
        <div onClick={() => onCategoriaSelecionada('COSMETICOS')} className="flex cursor-pointer gap-2">
            <img src={mirror} alt="" />
            <p>Beleza</p>
        </div>
        <div onClick={() => onCategoriaSelecionada('BRINQUEDOS')} className="flex cursor-pointer gap-2">
            <img src={toy} alt="" />
            <p>Brinquedos</p>
        </div>
        <div onClick={() => onCategoriaSelecionada('CALCADOS')} className="flex cursor-pointer gap-2">
            <img src={shoes} alt="" />
            <p>Calçados</p>
        </div>
        <div onClick={() => onCategoriaSelecionada('LIVRARIA')} className="flex cursor-pointer gap-2">
            <img src={book} alt="" />
            <p>Livrária</p>
        </div>
        <div onClick={() => onCategoriaSelecionada('VESTUARIO')} className="flex cursor-pointer gap-2">
            <img src={shirt} alt="" />
            <p>Vestuário</p>
        </div>
    </div>
  )
}

export default Categoria