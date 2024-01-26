import { Sidebar } from "./components/perfil/Sidebar"
import FormCadastro from "./components/perfil/FormCadastro"
import Container from "./components/perfil/Container"

function Perfil () {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex w-full justify-center items-center">
                <Container>
                    <FormCadastro />
                </Container>
            </div>
        </div>
    )
}

export default Perfil