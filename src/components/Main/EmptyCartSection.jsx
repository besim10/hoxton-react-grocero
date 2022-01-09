function EmptyCartSection(props){
    
    const emptyCart = () => {
        let products = props.products
        products = products.map(product => {return{...product, amountInCart: product.amountInCart = 0}})
        props.setProducts(products)
    }
    
    return (
        <button onClick = {() => emptyCart()} 
        className='empty-cart-button'>Empty Cart
        </button>
    )
}
export default EmptyCartSection