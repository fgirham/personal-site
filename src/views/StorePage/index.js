import styles from "./Store.module.css";
import NavBar from "components/NavBar";
import { QUERY_ALL_PRODUCT } from "constants/apis";
import { useEffect, useState } from "react";
import StoreProduct from "components/StoreProduct";

export default function StorePage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(QUERY_ALL_PRODUCT)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
    </div>
  );
}
