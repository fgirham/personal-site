import styles from './Cart.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
  cartDecrement, cartIncrement, emptyCart, removeFromCart, selectCartItems, selectTotalCartPrice,
} from "../../store/modules/storeSlice";
import {useEffect, useState} from "react";
import Button from "../Button";

export default function Cart(props) {
  const {isOpened} = props
  const [cartStyle, setCartSyle] = useState({
    visibility: 'hidden', transition: "all 200ms ease-in",
  });
  const cartItems = useSelector(selectCartItems)
  const cartPrice = useSelector(selectTotalCartPrice)

  const isNotEmpty = cartItems.length > 0
  const frmtNum = cartPrice >= 0 ? Number(cartPrice).toFixed(2) : '0.00'

  const dispatch = useDispatch()

  const decreaseItem = (product) => {
    dispatch(cartDecrement({
      data: product
    }))
  }

  const increaseItem = (product) => {
    dispatch(cartIncrement({
      data: product
    }))
  }

  const removeItem = (product) => {
    dispatch(removeFromCart({
      data: product
    }))
  }

  const emptyList = () => {
    dispatch(emptyCart())
  }

  useEffect(() => {
    const targetStyle = {
      visibility: isOpened ? 'visible' : 'hidden',
      transition: `all 200ms ${isOpened ? "ease-in" : "ease-out"}`,
      transform: isOpened ? "none" : "translate(0, -100%)",
    };

    if (JSON.stringify(targetStyle) === JSON.stringify(cartStyle)) return;

    setCartSyle(targetStyle);
  }, [cartStyle, isOpened])

  return (<>
    <div className={styles.card} style={cartStyle}>
      <div className={styles.list}>
        {isNotEmpty && cartItems.map((item) => (<div key={item.id} className={styles.item}>
          <img className={styles.image} alt={""} src={item.image}/>
          <h4 className={styles.title}>{item.title}</h4>
          <h4 className={styles.price}>${item.price}</h4>
          <div className={styles.amount}>
            <Button value={"-"} size={"small"} onClick={() => {
              decreaseItem(item)
            }}/>
            <h4>{item.amount}</h4>
            <Button value={"+"} size={"small"} onClick={() => {
              increaseItem(item)
            }}/>
            <i className="icon fa fa-trash-o" style={{color: "red"}} onClick={() => removeItem(item)}></i>
          </div>
        </div>))}
        {isNotEmpty ? <>
          <div className={styles.total}>
            <h4 className={styles.title}>Total</h4>
            <h4 className={styles.price}>${frmtNum}</h4>
          </div>
          <div className={styles["remove-all"]} onClick={() => emptyList()}>
            <i className="icon fa fa-trash-o" style={{color: "red"}}></i>
            <p>Remove all item from cart</p>
          </div>
        </> : <div className={styles.empty}>
          <h2>Cart is Empty</h2>
          <p>Browse the store and add some product to cart</p>
        </div>}
      </div>
    </div>
  </>)
}