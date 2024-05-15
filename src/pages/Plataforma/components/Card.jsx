
function Card ({imgLoja,nomeLoja, onClick}) {
    return (
        <div onClick={onClick} className="flex items-center w-80 cursor-pointer h-40 p-2 gap-6 border rounded-md" style={{backgroundColor: '#F7F7F7'}}>
            <img className='w-16' src={imgLoja} alt="" />
            <p>{nomeLoja}</p>
        </div>
    )
}
export default Card