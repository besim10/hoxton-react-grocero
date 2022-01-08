function Header(props){
   
    const removeItemFromStore = targetProduct => {
        let updatedProducts = props.products
        updatedProducts = updatedProducts.filter(product => product.id !== targetProduct.id)
        props.setProducts(updatedProducts) 
    }
    return (
        <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
            {props.products.map(product => (
                <li key = {product.id}>
                    <button onClick = {() => removeItemFromStore(product)}>X</button>
                    <div className="store--item-icon">
                    <img src={`./src/icons/${product.id.toString().padStart(3,0)}-${product.name}.svg`} alt={product.name} />
                    </div>
                    <button onClick = {() => props.addItemInCart(product)}>Add to cart</button>
                    <span>{`Price: £${product.price}`}</span>
                    <span>{`In Stock: ${product.inStock}`}</span>
                </li>
            ))}
        </ul>
      </header>
    )
}
export default Header