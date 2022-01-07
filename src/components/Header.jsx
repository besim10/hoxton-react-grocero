function Header(props){
   
    return (
        <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
            {props.products.map(product => (
                <li key = {product.id}>
                    <div className="store--item-icon">
                    <img src={`./src/icons/${product.id.toString().padStart(3,0)}-${product.name}.svg`} alt={product.name} />
                    </div>
                    <button onClick = {() => props.addItemInCart(product)}>Add to cart</button>
                </li>
            ))}
        </ul>
      </header>
    )
}
export default Header