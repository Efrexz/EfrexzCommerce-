import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";



function SearchValue() {
    const { searchValue, setSearchValue } = useContext(GlobalContext)

    return (
        <form className="relative w-72 bg-white  rounded-md min-w-52 hidden md:block">
            <label className="flex items-center w-full h-10">
                <input
                    required
                    autoComplete="off"
                    placeholder="Search..."
                    id="search"
                    type="text"
                    value={searchValue}
                    className="w-full pl-14 outline-none bg-transparent border-0 "
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
                <div className="icon absolute left-6 flex items-center justify-center">
                    <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-on h-4">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </div>
            </label>
        </form>
    )
}

export { SearchValue }