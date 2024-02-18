import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import bgAcesso from "../../assets/institucional/acesso/bg_acesso.svg";
import iconRetun from "../../assets/institucional/acesso/icon_return.svg";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Acesso() {
  const [formularioCadastro, setFormularioCadastro] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const criarConta = () => {
    setFormularioCadastro(true);
  };

  const efetuarLogin = () => {
    setFormularioCadastro(false);
  };

  const cadastrar = (data) => {
    api
      .post("/clientes", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso!", {
          position: "top-right",
          autoClose: true, 
          closeButton: true, 
        });
        setFormularioCadastro(false);
      })
      .catch((error) => {
        toast.error("Houve um erro ao realizar o cadastro.", {
          position: "top-right",
          autoClose: true, 
          closeButton: true, 
        });
        console.log(error);
      });
  };

  const entrar = (data) => {
    api
      .post("/clientes/login", {
        email: data.emailLogin,
        senha: data.senhaLogin,
      })
      .then((response) => {
        const token = response.data.token;

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("idUsuario", response.data.id);
        sessionStorage.setItem("nomeUsuario", response.data.nome);

        navigate("/inicio");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
      <ToastContainer/>
        <div className="flex w-96 justify-center absolute mt-60 ml-60">
          <div className="bg-white absolute shadow-lg ml-96 left-96 justify-center">
            <div className="p-12 flex flex-col items-center justify-center">
              {formularioCadastro ? (
                <>
                  <form onSubmit={handleSubmit(cadastrar)}>
                    <img
                      onClick={efetuarLogin}
                      className="flex relative mr-96 bottom-5 cursor-pointer"
                      src={iconRetun}
                      alt=""
                    />
                    <h1 className="font-bold text-center text-3xl">
                      Falta pouco para encontrar seu produto!
                    </h1>
                    <h2 className="flex justify-center mt-3 mb-3">
                      Crie sua conta aqui!
                    </h2>
                    <div className="flex flex-col w-96 gap-5">
                      <input
                        {...register("nome")}
                        className="outline-none p-2  border-b_gray border-2"
                        type="text"
                        placeholder="Informe seu nome de usuário"
                      />
                      <input
                        {...register("email")}
                        className="outline-none p-2 border-b_gray border-2"
                        type="text"
                        placeholder="Informe seu Email"
                      />
                      <input
                        {...register("senha")}
                        className="outline-none p-2  border-b_gray border-2"
                        type="password"
                        placeholder="Crie uma senha"
                      />
                      <input
                        className="outline-none p-2 border-b_gray border-2"
                        type="password"
                        placeholder="Confirme sua senha"
                      />
                      <button
                        className="bg-btn_orange text-white p-2 font-bold cursor-pointer"
                        type="submit"
                      >
                        Me tornar um cliente
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form onSubmit={handleSubmit(entrar)}>
                    <h1 className="font-bold text-center text-3xl">
                      Que bom ver você aqui!
                    </h1>
                    <h2 className=" flex justify-center mt-3 mb-3">
                      Como deseja continuar?
                    </h2>
                    <div className="flex flex-col w-96 gap-5">
                      <input
                        {...register("emailLogin")}
                        className="outline-none p-2  border-b_gray border-2"
                        type="text"
                        placeholder="Insira seu Email"
                      />
                      <input
                        {...register("senhaLogin")}
                        className="outline-none p-2 border-b_gray border-2"
                        type="password"
                        placeholder="Insira sua senha"
                      />
                      <button
                        type="submit"
                        className="bg-btn_orange text-white p-2 font-bold cursor-pointer"
                      >
                        Acessar a GetShop!
                      </button>
                      <p className="flex text-center justify-center">Ou</p>
                      <button
                        onClick={criarConta}
                        className="bg-white text-btn_orange p-2 font-bold shadow cursor-pointer"
                      >
                        Criar uma conta GetShop!
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <img className="h-screen" src={bgAcesso} alt="" />
      </div>
    </>
  );
}

export default Acesso;
