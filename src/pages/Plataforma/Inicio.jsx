import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


function Inicio() {
    return (
        <>
            <Header />
            <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Próximos da sua região</h2>
                <div className="flex gap-5">
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Shoppings Populares</h2>
                <div className="flex gap-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='flex p-5 gap-3 flex-col pl-20 mt-36'>
                <h2 className='text-xl'>Lojas Populares</h2>
                <div className="flex gap-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inicio