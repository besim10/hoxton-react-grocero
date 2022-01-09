import CartListItem from "./CartListItem"

function CartList(props){

    return (
        <ul className="item-list cart--item-list">
              {props.getItemsInCart().map(product => (
                <CartListItem  product = {product} setProducts = {props.setProducts} key = {product.id} addItemInCart = {props.addItemInCart}/>
              ))}
            
        </ul>
    )
}
export default CartList