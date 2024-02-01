function Pedido({ itens }) {
    return (
        <>
            <div className="w-full">
                {itens.map((item) => (
                    <div key={item} className="flex shadow-md">
                        <p>{item.nomeProduto}</p>
                        <p>{item.codProduto}</p>
                        <p>{item.quantidade}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Pedido