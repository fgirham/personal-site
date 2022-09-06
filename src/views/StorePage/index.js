import styles from "./Store.module.css";
import NavBar from "components/NavBar";
import { useEffect } from "react";
import StoreProduct from "components/StoreProduct";

import { caption } from "./caption";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoreProducts } from "store/modules/storeAction";
import { useNavigate } from "react-router-dom";

export default function StorePage() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.fakeStore.productsList)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchStoreProducts())
  }, [dispatch])

  const openProductPage = (id) => {
    navigate(`product/${id}`)
  }

  return (
    <div className="container">
      <NavBar />
      <h1>Store</h1>
      <div className={styles["product-list"]}>
        {products &&
          products.map((product) => (
            <StoreProduct key={product.id} onClick={() => {openProductPage(product.id)}} product={product} />
          ))}
      </div>
      {caption}
    </div>
  );
}
