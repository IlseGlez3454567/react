import { useState } from "react";
// Importamos useState → sirve para guardar y actualizar estado en React

import { ProductTable } from "./ProductTable";
// Componente que mostrará la tabla de productos

import { SearchBar } from "./SearchBar";
// Componente que tiene el input y el checkbox


export const FilterableProductTable = () => {

    // Arreglo de datos
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];
    // Este array contiene todos los productos
    // Cada producto es un objeto con propiedades


    // Estado para el texto de búsqueda
    const [filterText, setFilterText] = useState('');
    // filterText ->  guarda lo que el usuario escribe
    // setFilterText ->  función para actualizar ese valor


    // Estado para el checkbox
    const [inStockOnly, setInStockOnly] = useState(false);
    // inStockOnly -> true/false dependiendo del checkbox
    // false ->  mostrar todo
    // true ->  solo productos en stock
    // setInStockOnly -> función para actualizar el checkbox


    return (
        <div className="filterable-product-table">

            <SearchBar 
                filterText={filterText} 
                // Le pasamos el valor actual del input
                inStockOnly={inStockOnly} 
                // Le pasamos el estado del checkbox
                onFilterTextChange={setFilterText} 
                // Le pasamos la función para actualizar el texto
                onInStockOnlyChange={setInStockOnly}
                // Le pasamos la función para actualizar el checkbox
            />

            <ProductTable 
                products={products} 
                // Le pasamos el array de productos
                filterText={filterText} 
                // Le pasamos el texto para filtrar
                inStockOnly={inStockOnly}
                // Le pasamos el estado del checkbox
            />

            {/* 
            Este componente actúa como "padre"
            Controla el estado y lo pasa a sus hijos mediante props.
            */}

        </div>
    )
}
