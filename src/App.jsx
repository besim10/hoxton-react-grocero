import { useState } from 'react'
import './styles/index.css'
import initialProducts from './data/data'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  
  const [products, setProducts] = useState(initialProducts)

  const addItemInCart = targetProduct => {
    if(targetProduct.inStock > 0){
    const updatedProducts = products =>
    products.map(product =>
        product.id === targetProduct.id
        ? { ...product, amountInCart: product.amountInCart + 1, inStock: product.inStock -1 }
        : product
      )
    setProducts(updatedProducts)
  }}
  return (
    <div className="App">
    <Header products = {products} setProducts = {setProducts} addItemInCart = {addItemInCart} />

    <Main products = {products} setProducts = {setProducts} addItemInCart = {addItemInCart} />
    
    </div>
  )
}
export default App
