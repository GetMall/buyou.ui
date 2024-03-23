import LoadingGif from '../assets/loading.gif'

function Loading () {
  return (
    <div className='flex justify-center items-center h-screen'>
        <img src={LoadingGif} alt="loading" />
    </div>
  )
}

export default Loading