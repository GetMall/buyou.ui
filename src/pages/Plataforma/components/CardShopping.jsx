function CardShopping ({img, nome, onClick}) {
    return (
        <div onClick={onClick} className="flex gap-3 flex-col w-1/2 cursor-pointer bg-white h-52 justify-center p-3 shadow-md">
            <img className='w-16' src={img} alt="" />
            <p className='text-2xl'>{nome}</p>
            <p>30-40 min</p>
        </div>
    )
}

export default CardShopping