import { useContext } from 'react'
import { Card } from '../components/Card'
import { CategoryList } from '../components/CategoryList'
import { SortMenu } from '../components/SortMenu'
import { GlobalContext } from '../context/GlobalContext'
import { CheckoutSideMenu } from '../components/CheckOutSideMenu'
import { ProductDetail } from '../components/ProductDetail'
import "../index.css";

function Home() {
    //contexto de los productos filtrados por busqueda y categoria
    const { filteredProducts } = useContext(GlobalContext);

    console.log(filteredProducts)

    return (
        <>
            <main className="flex h-[calc(100vh-72.8px)] w-full ">
                <CheckoutSideMenu />
                <ProductDetail />

                <section className="bg-gray-100 pl-6 w-[18%] h-full pt-9">
                    <CategoryList />
                </section>
                <section className="bg-white p-4 w-full h-auto flex flex-col">
                    <div>
                        <SortMenu />
                    </div>
                    <div className="overflow-y-auto p-4 h-full custom-scrollbar">
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                filteredProducts.length === 0 ? (
                                    <div className="text-center w-full mt-16">
                                        <img
                                            src="https://citroen.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"
                                            alt="No products found"
                                            className="mx-auto w-60 h-40"
                                        />
                                        <p className="text-xl font-semibold text-gray-700">No products found</p>
                                        <p className="mt-2 text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
                                    </div>
                                ) : (
                                    filteredProducts.map((product) => (
                                        <div key={product.id}>
                                            <Card productInfo={product} />
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export { Home }