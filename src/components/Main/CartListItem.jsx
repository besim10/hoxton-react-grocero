function CartListItem(props){

    const removeItemFromCart = targetProduct => {
        if(targetProduct.amountInCart > 0){
        const updatedProducts = products => 
        products.map(product =>
            product.id === targetProduct.id
              ? { ...product, amountInCart: product.amountInCart - 1, inStock: product.inStock + 1 }
              : product
        )
        props.setProducts(updatedProducts)
    }}

    return (
        <li>
            <img
                className="cart--item-icon"
                src={`./src/icons/${props.product.id.toString().padStart(3,0)}-${props.product.name}.svg`}
                alt={`${props.product.name}`}
            />
            <p>{`${props.product.name}`}</p>
            <button onClick = {() => removeItemFromCart(props.product)} 
                className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{props.product.amountInCart}</span>
            <button onClick = {() => props.addItemInCart(props.product)}
                className="quantity-btn add-btn center">+</button>
        </li>
    )
}
export default CartListItem