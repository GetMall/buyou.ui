import search from '../../../assets/plataforma/icons/icon-search.svg'
import ContainerBusca from './ContainerBusca';

function InputPesquisa({ width, height, backgroundColor, placeholder, bgColor }) {

    const inputStyle = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
    }

    return (
        <ContainerBusca backgroundColor={bgColor}>
            <img src={search} alt="" />
            <input style={inputStyle} className='bg-none text-slate-800 w- border-none outline-none bg-slate-200' type="text" placeholder={placeholder} />
        </ContainerBusca>

    )
}

export default InputPesquisa;