import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Footer() {
    const { isSidebarOpen } = useContext(GlobalContext);
    return (
        <footer className={`bg-gray-100 text-center text-gray-700 p-0 absolute bottom-0 w-full ${isSidebarOpen ? "pl-28" : ""}`}>
            <p>Copyright © 2023 efrexz</p>
        </footer>
    )
}

export { Footer }