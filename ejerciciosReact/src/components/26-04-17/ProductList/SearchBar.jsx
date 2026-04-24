

export const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    // Recibimos props desde el componente padre (FilterableProductTable)
    // filterText → texto actual del input
    // inStockOnly → estado del checkbox
    // onFilterTextChange → función para actualizar texto
    // onInStockOnlyChange → función para actualizar checkbox
    return (
        <div className="search-bar">
            <input
                type="text"
                className="input-search"
                value={filterText}
                // El input siempre muestra lo que hay en el estado

                onChange={(e) => onFilterTextChange(e.target.value)}
                // Cada vez que el usuario escribe:
                // 1. se dispara onChange (método js)
                // 2. tomamos el valor del input
                // 3. llamamos a la función del padre
                // 4. se actualiza el estado en FilterableProductTable
            />
            <div>
                <input
                    type="checkbox"

                    checked={inStockOnly}
                    // El checkbox refleja el estado (true/false)

                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    // Cada vez que el usuario hace click:
                    // 1. cambia checked (true/false)
                    // 2. enviamos ese valor al padre
                    // 3. el estado se actualiza
                />
                <label>Only show products in stock</label>
            </div>
        </div>

    )
}