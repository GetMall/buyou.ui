function ContainerCard({ children, titulo }) {
    return (
        <div className="mt-16">
            <h2 className='text-xl font-bold'>{titulo}</h2>
            <div className="flex w-full flex-wrap gap-10 mt-8  ">
                {children}
            </div>
        </div>
    )
}

export default ContainerCard