function ButtonDefault(onClick, children) {
    return (
        <button onClick={onClick} className='bg-btn_orange text-xs text-white p-2 font-bold cursor-pointer h-8 w-full'>{children}</button>
    )
}

export default ButtonDefault