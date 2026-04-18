import { ProductCategoryRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

export const ProductTable = ({ products }) => {
    // Se recibe "products" como prop desde el componente FilterableProductTable (Este es el array con todos los productos)

    let lastCategory = null;
    // Guarda la última categoría que vimos

    const rows = [];
    // Aquí vamos a ir guardando lo que se va a renderizar
    products.forEach((product) => {
        // Recorremos cada producto

        if (product.category !== lastCategory) {
            // Si la categoría cambió...

            rows.push(
                //categoría de producto
                <ProductCategoryRow
                    key={product.category}
                    categoryName={product.category}
                />
            )
            // Agregamos el título de la categoría
        }

        rows.push(
            <ProductRow
                key={product.name}
                name={product.name}
                price={product.price}
            />
        )
        // Agregamos el producto

        lastCategory = product.category;
        // Actualizamos la última categoría
    })

    return (
        <div className="table-container">
            <div className="table-header">
                <div className="subtitle">Name</div>
                <div className="subtitle">Price</div>
            </div>
            <div className="table-products">
                {rows}
                {/* Renderizamos todo */}
            </div>
        </div>
    )

}