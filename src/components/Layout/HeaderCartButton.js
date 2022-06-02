import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import React, {useContext, useEffect, useState} from 'react'
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [btn, setBtn] = useState(false)
    const ctx = useContext(CartContext);
    const numberOfItems = ctx.items.reduce((curNumber, item) => {
     return curNumber + item.amount
    }, 0)
    const btnClasses = `${classes.button} ${btn ? classes.bump : ""} `
    const {items} = ctx
    useEffect(() => {
      
      setBtn(true)
      const timer = setTimeout(() => {
        setBtn(false)
      }, 300)

      return () => {
        clearTimeout(timer)
      }
    },[items])
  return ( 
    <button className={btnClasses} onClick={props.onOpen}>
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
