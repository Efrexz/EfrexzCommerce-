import { useContext } from 'react'
import { Card } from './Card'
import { CategoryList } from './CategoryList'
import { SortMenu } from './SortMenu'
import { GlobalContext } from '../context/GlobalContext'

function HeroSection() {

    //traemos del contexto los productos que se han filtrado por busqueda
    const { searchedProducts } = useContext(GlobalContext);
    console.log(searchedProducts);

    return (
        <main className="flex h-screen w-full pt-[75px]">
            <section className="bg-gray-100 pl-6 w-[18%] h-full pt-9">
                <CategoryList />
            </section>
            <section className="bg-white p-4 w-full h-full flex flex-col">
                <div>
                    <SortMenu />
                </div>
                <div className="flex-grow overflow-y-auto p-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {
                            searchedProducts.map((product) => (
                                <div key={product.id}>
                                    <Card productInfo={product} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export { HeroSection }