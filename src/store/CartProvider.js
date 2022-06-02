import React, {useReducer} from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedAmount = state.totalAmount + action.item.price* action.item.amount
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
   
    
    let updatedItems;

    if(existingCartItem) {
       const updatedItem ={
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
     
      updatedItems = state.items.concat(action.item)
    }



    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  if(action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingCartItem.price
    let updatedItems;
    if(existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem ={
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  return defaultCartState
}

function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);
  const addItemCartHandler = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item,
    });
  };

  const removeItemCartHandler = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
