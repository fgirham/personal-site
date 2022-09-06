import Button from "components/Button";
import styles from "./StoreProduct.module.css";
import {useDispatch} from "react-redux";
import {storeAction} from "../../store/modules/storeSlice";

export default function StoreProduct(props) {
  const dispatch = useDispatch();
  const { product, onClick } = props;

  const cartIcon = <><span>+ Add to Cart  | </span><i className="icon fa fa-shopping-basket"></i></>

  const addToCart = (event, product) => {
    event.stopPropagation()
    dispatch(storeAction.addToCart({
      data: product,
    }))
  }

  return (
    <div className={styles.card} onClick={onClick}>
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
        <div className={styles["btn-add-cart"]}>
          <Button type="btn-secondary" size="sm" value={cartIcon} hover={true} onClick={(event) => {addToCart(event, product)}} />
        </div>
      </div>
    </div>
  );
}
