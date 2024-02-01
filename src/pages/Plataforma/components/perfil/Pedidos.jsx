import Pedido from '../Pedido'
import api from '../../../../services/api'
import { useEffect, useState } from 'react'

function Pedidos() {

    const idUsuario = sessionStorage.getItem('idUsuario')

    const [pedidos, setPedidos] = useState([])

    const getPedidos = () => {
        api.get(`/pedidos/por-cliente/${idUsuario}`).then(response => {
            setPedidos(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getPedidos()
    }, [])

    return (
        <>
            <h1 className="text-xl">Últimos Pedidos</h1>
                {pedidos.length === 0 ? (
                    <p>Você ainda não fez nenhum pedido...</p>
                ) : (
                    pedidos.map((pedido) => (
                        <Pedido key={pedido.id} itens={pedido.itens} />
                    ))
                )}
        </>
    )
}

export default Pedidos