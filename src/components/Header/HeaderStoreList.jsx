import HeaderStoreItem from "./HeaderStoreItem"

function HeaderStoreList(props){

    return (
        <ul className="item-list store--item-list">
            {props.products.map(product => (
                <HeaderStoreItem products = {props.products} setProducts = {props.setProducts} product = {product} key = {product.id} addItemInCart = {props.addItemInCart}/>
            ))}
        </ul>
    )
}
export default HeaderStoreList