function ContainerCard({ children, titulo }) {
    return (
        <div className="mt-16">
            <h2 className='text-3xl'>{titulo}</h2>
            <div className="flex mt-8">
                {children}
            </div>
        </div>
    )
}

export default ContainerCard