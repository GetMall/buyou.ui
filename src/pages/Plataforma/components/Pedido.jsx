function Pedido({ itens, status, dataPedido }) {
    return (
        <>
            <div className="w-full mt-10">
                {itens.map((item) => (
                    <div key={item} className="flex gap-10 p-10 bg-white border h-10" style={{ width: '800px' }}>
                        <div className="w-1/3">
                            <p>{item.nomeProduto}</p>
                        </div>
                        <div className="flex justify-center">
                            <p>{item.codProduto}</p>
                        </div>
                        <div className="flex justify-center" style={{color: status === 'PENDENTE' ? 'gray' : status === 'CANCELADO' ? 'red' : 'green'}}>
                            <p>{status}</p>
                        </div>
                        <div className="flex justify-center">
                            <p>{dataPedido}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Pedido