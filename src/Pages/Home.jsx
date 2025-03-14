import { useContext } from 'react'
import { Card } from '@components/Card'
import { CategoryList } from '@components/CategoryList'
import { SortMenu } from '@components/SortMenu'
import { GlobalContext } from '@context/GlobalContext'
import { CheckoutSideMenu } from '@components/CheckOutSideMenu'
import { ProductDetail } from '@components/ProductDetail'
import MenuIcon from '@assets/burguerMenu.svg?react'
import "../index.css";


function Home() {
    //contexto de los productos filtrados por busqueda y categoria
    const { filteredProducts, isSidebarOpen, setIsSidebarOpen, loading } = useContext(GlobalContext);

    return (
        <main className="flex h-[calc(100vh-22.8px)] w-full relative overflow-y-hidden">
            <CheckoutSideMenu />
            <ProductDetail />

            {/* Botón para mostrar/ocultar sidebar en pantallas pequeñas */}
            <button
                className="md:hidden absolute top-20 left-4 z-40 bg-gray-100 p-2 rounded-lg shadow-md"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <MenuIcon className="w-6 h-6" />
            </button>

            {/* Sidebar con categorías */}
            <section
                className={`bg-gray-100 w-full md:w-[340px] h-screen  mt-16 pl-6 md:pt-6 fixed md:relative z-40 transition-transform duration-300 md:translate-x-0
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <CategoryList />
            </section>

            {/* Contenido principal */}
            <section className={`bg-white p-4 w-full h-auto flex flex-col mt-16 md:ml-0 ${isSidebarOpen ? "ml-52" : "ml-12"} transition-all duration-300`}>
                <div>
                    <SortMenu />
                </div>
                <div className="overflow-y-auto p-4 h-full custom-scrollbar">
                    <div className="flex flex-wrap justify-center gap-4">
                        {loading ? (
                            [...Array(20)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-44 h-52 bg-gray-200 animate-pulse rounded-lg"
                                ></div>
                            ))
                        ) : filteredProducts.length === 0 ? (
                            <div className="text-center w-full mt-16">
                                <img
                                    src="https://citroen.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"
                                    alt="No products found"
                                    className="mx-auto w-60 h-40"
                                />
                                <p className="text-xl font-semibold text-gray-700">No products found</p>
                                <p className="mt-2 text-gray-600">
                                    Try adjusting your search or filter to find what you're looking for.
                                </p>
                            </div>
                        ) : (
                            filteredProducts.map((product) => (
                                <div key={product.id}>
                                    <Card productInfo={product} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}


export { Home }