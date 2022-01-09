import CartList from "./CartList"
import EmptyCartSection from "./EmptyCartSection"
import TotalToPaySection from "./TotalToPaySection"

function Main(props){

    const getItemsInCart = () => {
      let products = props.products
        products = products.filter(product => product.amountInCart > 0)
        return products
    }

    return (   
      <main id="cart">
        
        <h2>Your Cart</h2>
  
        <div className="cart--item-list-container">
          <CartList  setProducts = {props.setProducts} addItemInCart = {props.addItemInCart} getItemsInCart = {getItemsInCart}/>
        </div>

        <TotalToPaySection getItemsInCart = {getItemsInCart} />

        <EmptyCartSection products = {props.products} setProducts = {props.setProducts} />

      </main>
    )
}
export default Main