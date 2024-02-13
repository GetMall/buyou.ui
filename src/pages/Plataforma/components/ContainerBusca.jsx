function ContainerBusca({ children, backgroundColor }) {


    const inputStyle = {
        backgroundColor: backgroundColor,
    }


    return (
        <div style={inputStyle} className="flex rounded-lg bg-slate-200 gap-2 p-2">
            {children}
        </div>
    )
}

export default ContainerBusca