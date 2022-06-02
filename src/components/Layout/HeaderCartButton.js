import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import React, {useContext} from 'react'
import CartContext from "../../store/cart-context";
function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
    const numberOfItems = ctx.items.reduce((curNumber, item) => {
     return curNumber + item.amount
    }, 0)
  return (
    <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCartButton
