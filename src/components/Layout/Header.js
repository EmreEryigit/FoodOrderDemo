
import classes from "./Header.module.css"
import React from 'react'
import image from "../../meals.jpeg"
import HeaderCartButton from "./HeaderCartButton"
function Header(props) {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onOpen={props.onOpen} />
        </header>
        <div className={classes["main-image"]}>
            <img src={image} alt="" />
        </div>
    </React.Fragment>
  )
}

export default Header