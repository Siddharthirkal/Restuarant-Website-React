import React, {useContext} from 'react';
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const cartcontext = useContext(CartContext)
  console.log('reinitialized cartcontext ', cartcontext)
  const addItemToCart = (event) => {
    event.preventDefault();
    // cartcontext.items.push(props.item)
    const quantity = document.getElementById("amount_" +props.id).value
    cartcontext.addItem({...props.item, quantity: quantity})
    console.log('afteraddItemToCart', cartcontext)
  };
  return (
    <form className={classes.form}>
      {console.log('inside render' , cartcontext.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
