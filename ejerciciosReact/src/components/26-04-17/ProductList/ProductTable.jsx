import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";


export const ProductTable = ({ products, filterText, inStockOnly }) => {
    // Recibimos props desde el componente padre: FilterableProductTable
    // products → array con todos los productos
    // filterText → texto que escribe el usuario
    // inStockOnly → true/false del checkbox


    let lastCategory = null;
    // Guarda la última categoría renderizada
    // Sirve para no repetir categorías


    const rows = [];
    // Aquí vamos a construir la UI (lista de componentes)


    products.forEach((product) => {
        // Recorremos cada producto del array

        // Filtro por texto
        if (
            product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
        ) {
            // Si el nombre del producto NO incluye el texto buscado
            return;
            // Se ignora este producto y se pasa al siguiente
        }


        // Filtro por stock
        if (inStockOnly && !product.stocked) {
            // Si el checkbox está activado (true)
            // Y el producto NO tiene stock
            return;
            // Se ignora este producto
        }


        // Control de categorias
        if (product.category !== lastCategory) {
            // Si la categoría actual es diferente a la anterior

            rows.push(
                <ProductCategoryRow
                    key={product.category}
                    // key → ayuda a React a identificar elementos únicos

                    categoryName={product.category}
                    // Pasamos el nombre de la categoría como prop
                />
            );
            // Agregamos el título de la categoría a la lista
        }


        //  Producto
        rows.push(
            <ProductRow
                key={product.name}
                // key única para cada producto

                name={product.name}
                // nombre del producto

                price={product.price}
                // precio del producto
            />
        );
        // Agregamos el producto a la lista


        lastCategory = product.category;
        // Actualizamos la última categoría
        // para comparar en la siguiente iteración
    });


    return (
        <div className="table-container">

            {/*  Encabezado */}
            <div className="table-header">
                <div className="subtitle">Name</div>
                <div className="subtitle">Price</div>
            </div>

            {/* Contenido */}
            <div className="table-products">
                {rows}
                {/* Renderizamos todo lo que construimos en el array */}
            </div>

        </div>
    );
};