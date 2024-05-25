import { CategoryList } from './CategoryList'
import { SortMenu } from './SortMenu'

function HeroSection() {
    const categoryList = [
        { name: "Beuty" },
        { name: "Fragrances" },
        { name: "Furniture" },
        { name: "Groceries" },
        { name: "Home Appliances" },
    ]

    return (
        <main className="flex h-[100vh] w-full pt-[75px]">
            <section className="bg-gray-100 pl-6 w-[18%] h-100vh pt-9">
                <CategoryList categories={categoryList} />
            </section>
            <section className="bg-white p-4 w-full h-100vh">
                <div>
                    <SortMenu />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <img src="/productItem.png" alt="product" className="w-[300px] h-[300px] rounded-lg" />
                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-bold">
                            Product Name
                        </p>
                        <p className="text-sm">
                            Product Description
                        </p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </section>
        </main>

    )
}

export { HeroSection }