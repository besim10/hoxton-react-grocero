import HeaderStoreList from "./HeaderStoreList"

function Header(props){

    return (
        <header id="store">
        <h1>Grocero</h1>

        <HeaderStoreList products = {props.products} setProducts = {props.setProducts} addItemInCart = {props.addItemInCart} />

      </header>
    )
}
export default Header