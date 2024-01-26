import { Sidebar } from "./components/perfil/Sidebar"
import FormCadastro from "./components/perfil/FormCadastro"
import Pedidos from "./components/perfil/Pedidos";
import Ajuda from "./components/perfil/Ajuda";
import FormLoja from "./components/perfil/FormLoja";
import Container from "./components/perfil/Container"
import { useState } from "react";

function Perfil () {
    const [selectedOption, setSelectedOption] = useState('configuracoes');


    const handleMenuClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex">
            <Sidebar onSelect={handleMenuClick}/>
            <div className="flex w-full justify-center items-center">
                <Container>
                    {selectedOption === 'configuracoes' ? (
                        <FormCadastro />
                    ) : selectedOption === 'pedidos' ? (
                        <Pedidos />
                    ) : selectedOption === 'ajuda' ? (
                        <Ajuda />
                    ) : <FormLoja />
                    }
                </Container>
            </div>
        </div>
    )
}

export default Perfil