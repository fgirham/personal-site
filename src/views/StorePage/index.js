import styles from "./Store.module.css";
import NavBar from "components/NavBar";
import { QUERY_ALL_PRODUCT } from "constants/apis";
import { useEffect, useState } from "react";
import StoreProduct from "components/StoreProduct";

import { caption } from "./caption";
import request from "utils/request";

export default function StorePage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    request(QUERY_ALL_PRODUCT, {}, setProducts)
  }, []);

  return (
    <div className="container">
      <NavBar />
      <h1>Store</h1>
      <div className={styles["product-list"]}>
        {products &&
          products.map((product) => (
            <StoreProduct key={product.id} product={product} />
          ))}
      </div>
      {caption}
    </div>
  );
}
