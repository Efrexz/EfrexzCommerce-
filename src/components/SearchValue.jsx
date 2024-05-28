import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";



function SearchValue() {
    const { searchValue, setSearchValue } = useContext(GlobalContext)

    return (
        <input
            placeholder="Search"
            type="text"
            className="w-full min-w-[220px] max-w-[250px] px-4 py-2 border border-gray-300 rounded-xl"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }
            } />
    )
}

export { SearchValue }