import { useState, useEffect } from "react";
import HeaderLogo from "./components/HeaderLogo";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import imageMap from "../../assets/maps/mapsIcon.jpg"

function Compra() {
    const [dadosParaEnviar, setDadosParaEnviar] = useState({});
    const [itens, setItens] = useState([]);
    const [isPix, setIsPix] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm();
    const [isDisabled, setIsDisabled] = useState(true);
    const [formValues, setFormValues] = useState({ cpf: "", nomeCompleto: "" });
    const endereco = JSON.parse(sessionStorage.getItem("endereco"));

    const idUsuario = sessionStorage.getItem("idUsuario");

    sessionStorage.getItem("endereco")

    const finalizarPedido = () => {
        const itensParaEnviar = itens.map((item) => ({
            idProduto: item.idProduto,
            codProduto: item.codProduto,
            nomeProduto: item.nomeProduto,
            quantidade: item.quantidade,
        }));

        const dadosParaEnviar = {
            idCliente: idUsuario,
            itens: itensParaEnviar,
            valorTotal: 0,
            status: "PENDENTE",
            dataPedido: new Date().toISOString().split("T")[0],
            dataPagamento: new Date().toISOString().split("T")[0],
        };

        api
            .post("/pedidos", dadosParaEnviar)
            .then((res) => {
                toast.success("Pedido realizado com sucesso!", {
                    position: "top-right",
                    autoClose: true,
                    closeButton: true,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const efetuarPagamento = (data) => {
        api
            .post("/transacao/pix", null, {
                params: {
                    cpf: data.cpf,
                    nome: data.nomeCompleto,
                    valor: dadosParaEnviar.valorTotal.toString(),
                },
            })
            .then((res) => {
                finalizarPedido();
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedFormValues = { ...formValues, [name]: value };
        setFormValues(updatedFormValues);

        if (
            updatedFormValues.cpf.trim() !== "" &&
            updatedFormValues.nomeCompleto.trim() !== ""
        ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };
    useEffect(() => {
        console.log(endereco)
        const obterDadosParaEnviar = JSON.parse(
            sessionStorage.getItem("dadosParaEnviar")
        );
        if (obterDadosParaEnviar) {
            setDadosParaEnviar(obterDadosParaEnviar);
            setItens(obterDadosParaEnviar.itens);
            console.log(dadosParaEnviar.valorTotal);
        }
    }, []);

    return (
        <>
            <HeaderLogo />
            <ToastContainer />
            <div className="container mt-32 flex justify-center gap-[200px]">
                <div className="flex">
                    <div className="flex flex-col gap-6">
                        <div className="mb-10">
                            <h1 className="text-2xl font-bold">Finalize seu pedido</h1>
                        </div>
                        <div className="bg-white flex w-full gap-2 p-2 border-sm border">
                            <img src={imageMap} className="w-[50px]" alt="" />
                            <div>
                                <p className="text-lg">{endereco?.rua}</p>
                                <p>{endereco?.bairro}</p>
                            </div>
                        </div>
                        <h2 className="text-xl">Forma de Pagamento</h2>
                        <div className="flex flex-col">
                            <div className="flex gap-2 mt-2">
                                <input
                                    id="pix"
                                    name="pagamento"
                                    onChange={() => setIsPix(true)}
                                    type="radio"
                                />
                                <label htmlFor="pix">Pix</label>
                            </div>
                            {isPix && (
                                <>
                                    <form onSubmit={handleSubmit(efetuarPagamento)}>
                                        <div className="flex flex-col gap-2 mt-2">
                                            <label htmlFor="chavePix">CPF</label>
                                            <input
                                                name="cpf"
                                                {...register("cpf")}
                                                id="chavePix"
                                                className="border-slate-200 border-2 outline-none p-2"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 mt-2">
                                            <label htmlFor="chavePix">Nome Completo</label>
                                            <input
                                                name="nomeCompleto"
                                                {...register("nomeCompleto")}
                                                id="chavePix"
                                                className="border-slate-200 border-2 outline-none p-2"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 mt-2">
                                            <label htmlFor="chavePix">Valor Total</label>
                                            <input
                                                disabled={true}
                                                defaultValue={`R$ ${dadosParaEnviar.valorTotal}`}
                                                id="chavePix"
                                                className="bg-slate-200 border-2 outline-none p-2"
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex mt-5 justify-end">
                                            <button
                                                disabled={isDisabled}
                                                className={`w-full h-10 rounded-sm ${isDisabled
                                                        ? "bg-slate-200"
                                                        : "bg-btn_orange text-white"
                                                    }`}
                                                type="submit"
                                            >
                                                Solicitar Pedido
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                            <div className="flex gap-2 mt-2">
                                <input
                                    id="cartao"
                                    name="pagamento"
                                    type="radio"
                                    onChange={() => setIsPix(false)}
                                />
                                <label htmlFor="cartao">Cartão de Crédito</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl mb-10 font-bold">Resumo da Compra</h2>
                    <div className="flex flex-col mt-2 p-10 gap-2 bg-white border-sm border">
                        <h1 className="text-lg font-bold ">Produtos</h1>
                        {itens.map((item) => (
                            <div key={item.id}>
                                <div className="flex gap-2 mt-2">
                                    <p className="text-lg">
                                        {item.quantidade}x {item.nomeProduto}
                                    </p>
                                    <p className="text-lg text-secundary font-semibold">
                                        R$ {item.valorUnitario}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="border"></div>
                        <p className="text-lg">
                            Custo dos Produtos:{" "}
                            <span className="text-secundary font-semibold">
                                {" "}
                                R$ {dadosParaEnviar.valorTotal?.toFixed(2)}{" "}
                            </span>
                        </p>
                        <p className="text-lg">
                            Total:{" "}
                            <span className="text-secundary font-semibold">
                                R$ {dadosParaEnviar.valorTotal?.toFixed(2)}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Compra;
