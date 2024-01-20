import ContainerBusca from "./ContainerBusca"

function Filtro({ width, placeholder }) {

    const inputStyle = {
        width: width,
    }

    return (
        <ContainerBusca>
            <select name='select' style={inputStyle} className='bg-none text-slate-800 w- border-none outline-none bg-slate-200' type="text" placeholder={placeholder}>
                <option className='text-slate-800' value="maior">Maior preço</option>
                <option className='text-slate-800' value="menor">Menor preço</option>
            </select>
        </ContainerBusca>
    )
}

export default Filtro