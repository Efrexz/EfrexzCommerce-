import { useContext } from 'react'
import { Card } from './Card'
import { CategoryList } from './CategoryList'
import { SortMenu } from './SortMenu'
import { GlobalContext } from '../context/GlobalContext'

function HeroSection() {

    const { data } = useContext(GlobalContext);
    console.log(data)

    const prueba = {
        name: "Zapatos mollejuos 4K papa",
        price: 100,
        image: "/productItem.png",
        rating: 4,
    }
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
                        {data.map((product) => (
                            <div key={product.id}>
                                <Card productInfo={prueba} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export { HeroSection }