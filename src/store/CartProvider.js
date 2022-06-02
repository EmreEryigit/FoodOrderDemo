import React, {useReducer} from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item)  
    const updatedAmount = state.totalAmount + action.item.price* action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  if(action.type === "REMOVE_ITEM") {
    
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
