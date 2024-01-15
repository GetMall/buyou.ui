import Header from "./components/Header"
import Categoria from "./components/Categoria"

function Loja() {
    return (
        <>
            <Header />
            <div className='flex p-5 justify-center w-full pl-20 mt-28'>
                <Categoria />
            </div>
        </>
    )
}

export default Loja