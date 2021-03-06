import CartListItem from "./CartListItem"

const CartList = (props =>
  <ul className="item-list cart--item-list">
      {props.getItemsInCart().map(product => (
          <CartListItem  product = {product} setProducts = {props.setProducts} key = {product.id} addItemInCart = {props.addItemInCart}/>
      ))}    
  </ul>
)

export default CartList