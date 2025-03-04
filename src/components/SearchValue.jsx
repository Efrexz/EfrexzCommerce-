import { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import SearchIcon from "@assets/icons/search.svg?react";

function SearchValue() {
    const { searchValue, setSearchValue } = useContext(GlobalContext)

    return (
        <form className="relative w-72 lg:w-[400px] bg-white rounded-md min-w-52">
            <div className="flex items-center w-full h-10">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="absolute left-6 flex items-center justify-center">
                    <SearchIcon className="w-5 h-5 text-gray-600" />
                </div>
                <input
                    required
                    autoComplete="off"
                    placeholder="Search..."
                    id="search"
                    type="search"
                    value={searchValue}
                    className="w-full pl-14 outline-none bg-transparent border-0"
                    onChange={(event) => setSearchValue(event.target.value)}
                />
            </div>
        </form>
    )
}

export { SearchValue }