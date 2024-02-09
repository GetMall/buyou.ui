import parceira1 from "../../../assets/institucional/carrossel/Parceira-1.svg"
import parceira2 from "../../../assets/institucional/carrossel/Parceira-2.svg"
import parceira3 from "../../../assets/institucional/carrossel/Parceira-3.svg"
import parceira from "../../../assets/institucional/carrossel/Parceira.svg"
import { useEffect, useState } from "react"

function Carousel() {

    const imagensParceiras = [parceira, parceira1, parceira2, parceira3];
    const imagensConjunto2 = [parceira2, parceira3, parceira, parceira1];
    const imagensConjunto3 = [parceira3, parceira, parceira1, parceira2];
    const imagensConjunto4 = [parceira1, parceira2, parceira3, parceira];

    const [imagemAtualParceiras, setImagemAtualParceiras] = useState(0);
    const [imagemAtualConjunto2, setImagemAtualConjunto2] = useState(0);
    const [imagemAtualConjunto3, setImagemAtualConjunto3] = useState(0);
    const [imagemAtualConjunto4, setImagemAtualConjunto4] = useState(0);


    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setImagemAtualParceiras((prevImagem) => (prevImagem + 1) % imagensParceiras.length);
        }, 3000);

        const intervalId2 = setInterval(() => {
            setImagemAtualConjunto2((prevImagem) => (prevImagem + 1) % imagensConjunto2.length);
        }, 3000);

        const intervalId3 = setInterval(() => {
            setImagemAtualConjunto3((prevImagem) => (prevImagem + 1) % imagensConjunto3.length);
        }, 3000);

        const intervalId4 = setInterval(() => {
            setImagemAtualConjunto4((prevImagem) => (prevImagem + 1) % imagensConjunto4.length);
        }, 3000);

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
            clearInterval(intervalId4);
        };
    }, [imagensParceiras.length, imagensConjunto2.length, imagensConjunto3.length, imagensConjunto4.length]);

    return (
        <>
            <div className="flex gap-28 mt-8 justify-center">
                <img className="w-60" src={imagensParceiras[imagemAtualParceiras]} alt="Imagem de parceira" />
                <img className="w-60" src={imagensConjunto2[imagemAtualConjunto2]} alt="Imagem do conjunto 2" />
                <img className="w-60" src={imagensConjunto3[imagemAtualConjunto3]} alt="Imagem do conjunto 3" />
                <img className="w-60" src={imagensConjunto4[imagemAtualConjunto4]} alt="Imagem do conjunto 4" />
            </div>
        </>
    )
}

export default Carousel