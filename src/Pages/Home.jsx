import { useContext } from 'react'
import { Card } from '../components/Card'
import { CategoryList } from '../components/CategoryList'
import { SortMenu } from '../components/SortMenu'
import { GlobalContext } from '../context/GlobalContext'
import { CheckoutSideMenu } from '../components/CheckOutSideMenu'
import { ProductDetail } from '../components/ProductDetail'

function Home() {
    //contexto de los productos filtrados por busqueda y categoria
    const { filteredProducts } = useContext(GlobalContext);

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
                    <div className="overflow-y-auto p-4 h-full">
                        <div className="flex flex-wrap justify-center gap-4">
                            {
                                filteredProducts.map((product) => (
                                    <div key={product.id}>
                                        <Card productInfo={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export { Home }