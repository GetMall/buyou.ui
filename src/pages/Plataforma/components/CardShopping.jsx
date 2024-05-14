function CardShopping ({img, nome, onClick}) {
    return (
        <div onClick={onClick} className="flex gap-3 flex-col w-1/2 cursor-pointer h-52 justify-center p-3  border rounded- bg-[#f7f7f7]" >
            <img className='w-16' src={img} alt="" />
            <p className='text-2xl'>{nome}</p>
        </div>
    )
}

export default CardShopping