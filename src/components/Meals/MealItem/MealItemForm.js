import classes from ".//MealItemForm.module.css";
import React, {useRef, useState} from 'react'
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const amount = inputRef.current.value
    const enteredAmount = +amount
    if(amount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmount)
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <Input 
        ref={inputRef}
        label="Amount" input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }} />
        <button >+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  )
}

export default MealItemForm
