import { useNavigate } from "react-router-dom";
import buyuLogoAmarelo from "../../../assets/plataforma/logos/logotipo-amarelo.svg";

function HeaderLogo() {

    const navigate = useNavigate();

    return (
        <header className="bg-white z-50 text-black shadow-md w-full fixed top-0 p-4">
            <div className="flex justify-center">
                <div
                    onClick={() => navigate("/inicio")}
                    className="text-2xl uppercase cursor-pointer font-bold"
                >
                    <img className="w-32" src={buyuLogoAmarelo} alt="" />
                </div>
            </div>
        </header>
    );
}

export default HeaderLogo