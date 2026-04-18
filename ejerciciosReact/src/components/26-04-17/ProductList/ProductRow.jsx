
export const ProductRow = ({name, price}) => {


    return (
        <div className="product-row">
            <div className="product-name">
                {name}
            </div>
            <div className="product-price">
                {price}
            </div>
        </div>
    )
}
