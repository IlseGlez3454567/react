import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"


export const FilterableProductTable = () => {
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    return (
        <div className="filterable-product-table">
            <SearchBar />
            <ProductTable products={products} />
            {/*Pasando datos como props a componente ProductTable desde el componente padre FilteredProductTable */}
        </div>
    )
}

