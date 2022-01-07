function Main(props){

    function getItemsInCart(){
        let products = props.products
        products = products.filter(function (product){
            return product.amountInCart > 0
        })
        return products
    }
    
    const removeItemFromCart = targetProduct => {
      const updatedProducts = products =>
      products.map(product =>
          product.id === targetProduct.id
            ? { ...product, amountInCart: product.amountInCart - 1 }
            : product
        )
      props.setProducts(updatedProducts)
    }
    return (   
        <main id="cart">
        <h2>Your Cart</h2>
  
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
              {getItemsInCart().map(product => (
                <li key = {product.id}>
                <img
                    className="cart--item-icon"
                    src={`./src/icons/${product.id.toString().padStart(3,0)}-${product.name}.svg`}
                    alt={`product.name`}
                />
                <p>{`${product.name}`}</p>
                <button onClick = {() => removeItemFromCart(product)} 
                className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">{product.amountInCart}</span>
                <button onClick = {() => props.addItemInCart(product)}
                className="quantity-btn add-btn center">+</button>
            </li>
              ))}
            
          </ul>
        </div>
  
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
  
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    )
}
export default Main