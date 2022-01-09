function HeaderStoreItem(props){

    const removeItemFromStore = targetProduct => {
        let updatedProducts = props.products
        updatedProducts = updatedProducts.filter(product => product.id !== targetProduct.id)
        props.setProducts(updatedProducts) 
    }

    return (
        <li>
            <button onClick = {() => removeItemFromStore(props.product)}>X</button>
            <div className="store--item-icon">
                <img src={`./src/icons/${props.product.id.toString().padStart(3,0)}-${props.product.name}.svg`} alt={props.product.name} />
            </div>
            <button onClick = {() => props.addItemInCart(props.product)}>Add to cart</button>
            <span>{`Price: £${props.product.price}`}</span>
            <span className={`${props.product.inStock> 0 ? 'in-stock' : 'out-of-stock'}`}>
                {`${props.product.inStock > 0 ? `In Stock: ${props.product.inStock}` : 'Out Of Stock😟'}`}
            </span>
        </li>
    )
}
export default HeaderStoreItem