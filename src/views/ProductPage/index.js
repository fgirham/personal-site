import NavBar from "components/NavBar"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { selectProduct } from "store/modules/storeSlice"

export default function ProductPage() {
  const pathName = useLocation().pathname
  const productId = parseInt(pathName.substring(pathName.length - 1))
  const product = useSelector(state => selectProduct(state, productId))[0]
  console.log(product)

  return (
    <div className="container">
      <NavBar />
      <h1>{product.title}</h1>
    </div>
  )
}