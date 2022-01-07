import { useState } from 'react'
import './styles/index.css'
import initialProducts from './data/data'
import Header from './components/Header'
import Main from './components/Main'
function App() {
  const [products, setProducts] = useState(initialProducts)

  const addItemInCart = targetProduct => {
    const updatedProducts = products =>
    products.map(product =>
        product.id === targetProduct.id
          ? { ...product, amountInCart: product.amountInCart + 1 }
          : product
      )
    setProducts(updatedProducts)
  };

  return (
    <div className="App">
       
    <Header products = {products}  addItemInCart = {addItemInCart} />

    <Main products = {products} setProducts = {setProducts} addItemInCart = {addItemInCart} />
    </div>
  )
}

export default App
