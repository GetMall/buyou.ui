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
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const criarConta = () => {
    setFormularioCadastro(true);
  };

  const efetuarLogin = () => {
    setFormularioCadastro(false);
  };

  const cadastrar = (data) => {
    if (data.senha !== data.confirmarSenha) {
      setError("confirmarSenha", { type: "manual", message: "As senhas não coincidem" });
      return;
    }

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

    if (!data.emailLogin || !data.senhaLogin) {
      setError("senhaLogin", { type: "manual", message: "Preencha os campos acima" });
      return;
    }

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
        setError("senhaLogin", { type: "manual", message: "Email ou senha incorreta" });
        console.log(error);
      });
  };

  const validateEmail = (value) => {
    if (!value.includes('@sptech.school') && !value.includes('@gmail.com') && !value.includes('@outlook.com')) {
      return "Email inválido";
    }
    return true;
  };

  const validatePassword = (value) => {
    if (!value.match(/[A-Z]/)) {
      return "A senha deve conter pelo menos uma letra maiúscula";
    }
    if (!value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      return "A senha deve conter pelo menos um caractere especial";
    }
    if (value.length < 8) {
      return "A senha deve ter no mínimo 8 caracteres";
    }
    return true;
  };

  return (
    <>
      <div>
        <ToastContainer />
        <div className="flex w-96 justify-center absolute mt-60 ml-60">
          <div className="bg-white absolute shadow-xl border ml-96 left-96 justify-center">
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
                        {...register("email", { validate: validateEmail })}
                        className={`outline-none p-2 border-b_gray border-2 ${errors.email ? "border-red-500" : ""}`}
                        type="text"
                        placeholder="Informe seu Email"
                      />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                      <input
                        {...register("senha", { validate: validatePassword })}
                        className={`outline-none p-2  border-b_gray border-2 ${errors.senha ? "border-red-500" : ""}`}
                        type="password"
                        placeholder="Crie uma senha"
                      />
                      {errors.senha && <p className="text-red-500">{errors.senha.message}</p>}
                      <input
                        {...register("confirmarSenha")}
                        className="outline-none p-2 border-b_gray border-2"
                        type="password"
                        placeholder="Confirme sua senha"
                      />
                      {errors.confirmarSenha && <p className="text-red-500">{errors.confirmarSenha.message}</p>}
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
                      {errors.emailLogin && <p className="text-red-500">{errors.emailLogin.message}</p>}
                      <input
                        {...register("senhaLogin")}
                        className={`outline-none p-2 border-b_gray border-2`}
                        type="password"
                        placeholder="Insira sua senha"
                      />
                      {errors.senhaLogin && <p className="text-red-500">{errors.senhaLogin.message}</p>}
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
                        Criar uma conta Buyou!
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