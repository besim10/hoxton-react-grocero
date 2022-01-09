import { useState } from 'react'
import './styles/index.css'
import initialProducts from './data/data'
import Header from './components/Header'
import Main from './components/Main'
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
  // function addItemInCart2 (targetProduct2){
  //   if(targetProduct2.inStock > 0){
  //       function updatedProducts2 (products){
  //       return products.map(function (product){
  //         if (product.id === targetProduct2.id){
  //           return {...product, amountInCart: product.amountInCart + 1, inStock: product.inStock -1}
  //         }
  //         else{
  //           return product
  //         }
  //       })
  //     }
  //     setProducts(updatedProducts2(products))
  //   }
  // }
  return (
    <div className="App">
       
    <Header products = {products} setProducts = {setProducts} addItemInCart = {addItemInCart} />

    <Main products = {products} setProducts = {setProducts} addItemInCart = {addItemInCart} />
    
    </div>
  )
}

export default App
