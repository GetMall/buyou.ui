function HeaderLogo() {
    return (
        <header className="bg-secundary z-50 text-white shadow-md w-full fixed top-0 p-4">
            <div className="flex justify-center">
                <div
                    onClick={() => navigate("/inicio")}
                    className="text-2xl uppercase cursor-pointer font-bold"
                >
                    GetShop
                </div>
            </div>
        </header>
    );
}

export default HeaderLogo