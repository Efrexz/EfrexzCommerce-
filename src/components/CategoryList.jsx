import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function CategoryList() {

    const { categoriesWithIcons } = useContext(GlobalContext);
    return (
        <fieldset>
            <legend className="text-lg font-bold text-gray-900">Categorías</legend>

            <div className="mt-4 space-y-3.5">
                {categoriesWithIcons.map((category) => (
                    <label key={category} className="flex cursor-pointer items-start gap-4">
                        <div className="flex items-center">
                            &#8203;
                            <input type="checkbox" className="size-4 rounded border-gray-300" />
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> {category} </strong>
                        </div>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

export { CategoryList };