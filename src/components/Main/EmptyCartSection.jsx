import initialProducts from '../../data/data'

function EmptyCartSection(props){
    
    const emptyCart = () => props.setProducts(initialProducts)

    return (
        <button onClick = {() => emptyCart()} 
        className='empty-cart-button'>Empty Cart
        </button>
    )
}
export default EmptyCartSection