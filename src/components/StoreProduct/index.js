import styles from "./StoreProduct.module.css";

export default function StoreProduct(props) {
  const { product } = props;

  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles["card-content"]}>
        <h4 className={styles.title}>{product.title}</h4>
        <div className={styles.desc}>
          <h3 className={styles.price}>${product.price}</h3>
          <div className={styles.rating}>
            <i className="icon fa fa-star" style={{ color: "#FFC400" }}></i>
            <p>{product.rating.rate}</p>
            <p>({product.rating.count})</p>
          </div>
        </div>
      </div>
    </div>
  );
}
