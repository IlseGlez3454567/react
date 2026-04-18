

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" className="input-search"></input>
            <div>
                <input type="checkbox"></input>
                <label>Only show products in stock</label>
            </div>
        </div>

    )
}