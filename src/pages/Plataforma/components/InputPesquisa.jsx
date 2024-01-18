import search from '../../../assets/plataforma/icon-search.svg'

function InputPesquisa({width, bgColor, placeholder}) {

    const inputStyle = {
        width: width,
    }

    return (
        <>
            <div className="flex bg-slate-200 gap-2 p-2">
                <img src={search} alt="" />
                <input style={inputStyle} className='bg-none text-slate-800 w- border-none outline-none bg-slate-200' type="text" placeholder={placeholder} />
            </div>
        </>
    )
}

export default InputPesquisa;