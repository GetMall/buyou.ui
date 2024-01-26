
import FormCadastro from "./FormCadastro"
function Container({children}) {
    return (
        <div className="bg-white shadow-md h-2/3 w-2/3 flex">
            <div className="p-10">
                {children}
            </div>
        </div>
    )
}

export default Container