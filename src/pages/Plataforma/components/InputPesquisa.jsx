import search from '../../../assets/plataforma/icon-search.svg'
import ContainerBusca from './ContainerBusca';

function InputPesquisa({ width, placeholder }) {

    const inputStyle = {
        width: width,
    }

    return (
        <ContainerBusca>
            <img src={search} alt="" />
            <input style={inputStyle} className='bg-none text-slate-800 w- border-none outline-none bg-slate-200' type="text" placeholder={placeholder} />
        </ContainerBusca>

    )
}

export default InputPesquisa;