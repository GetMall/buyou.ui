import { useEffect, useState } from 'react';
import api from '../../../../services/api'
import { useForm } from "react-hook-form";

function Container() {

    const idUsuario = sessionStorage.getItem('idUsuario')
    const [dadosUsuario, setDadosUsuario] = useState([])

    const { register, handleSubmit, setValue:setValueUsuario  } = useForm();

    const getDadosUsuario = () => {
        api.get(`/clientes/${idUsuario}`).then(response => {
            console.log(response.data)
            setDadosUsuario(response.data)
            setValueUsuario("nome", response.data.nome)
            setValueUsuario("email", response.data.email)
            setValueUsuario("cpf", response.data.cpf)
            setValueUsuario("genero", response.data.genero)
            setValueUsuario("telefone", response.data.telefone)
            setValueUsuario("celular", response.data.celular)
            setValueUsuario("dataNascimento", response.data.dataNascimento)
        }).catch(error => {
            console.log(error)
        });
    }

    const editar = (data) => {
        api.put(`/clientes/${idUsuario}`, {
            nome: data.nome,
            email: data.email,
            cpf: data.cpf,
            genero: data.genero,
            telefone: data.telefone,
            celular: data.celular,
            dataNascimento: data.dataNascimento
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getDadosUsuario()
    }, [])

    return (
        <div className="bg-white shadow-md h-2/3 w-2/3 flex">
            <div className="p-10">
                <h1 className="text-xl">Dados de Cadastro</h1>
                <form onSubmit={handleSubmit(editar)}>
                    <div className="flex justify-between gap-48">
                        <div className="flex flex-col gap-2 mt-10">
                            <label className="text-lg">Nome de Usuário</label>
                            <input className="border-2 border-gray-300 w-96 h-10 rounded-md p-2"
                                type="text"
                                {...register("nome")}
                            />
                            <label className="text-lg">Email</label>
                            <input className="border-2 border-gray-300 h-10 rounded-md p-2"
                                type="text"
                                {...register("email")}
                            />
                            <label className="text-lg">CPF</label>
                            <input className="border-2 border-gray-300 h-10 rounded-md p-2"
                                type="text"
                                {...register("cpf")}
                            />
                            <label className="text-lg">Genêro</label>
                            <div className="flex gap-2">
                                <div className="flex gap-2">
                                    <input name="Genero" type="radio"
                                        value="Masculino"
                                        {...register("genero")}
                                    />
                                    <label htmlFor="Masculino">Masculino</label>
                                </div>
                                <div className="flex gap-2">
                                    <input name="Genero" type="radio"
                                        value="Feminino"
                                        {...register("genero")}
                                    />
                                    <label htmlFor="Feminino">Feminino</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-10">
                            <label className="text-lg">Telefone</label>
                            <input className="border-2 border-gray-300 w-96 h-10 rounded-md p-2"
                                type="text"
                                {...register("telefone")}
                            />
                            <label className="text-lg">Celular</label>
                            <input className="border-2 border-gray-300 h-10 rounded-md p-2" type="text"
                                {...register("celular")}
                            />
                            <label className="text-lg">Data de Nascimento</label>
                            <input className="border-2 border-gray-300 h-10 rounded-md p-2"
                                {...register("dataNascimento")}
                                type="date" />
                        </div>
                    </div>
                    <button className='bg-btn_orange mt-5 text-white p-2 font-bold cursor-pointer' type='submit'>Salvar Informações</button>
                </form>
            </div>
        </div>
    )
}

export default Container