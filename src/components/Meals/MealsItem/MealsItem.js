import classes from './MealsItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.descripton}>{props.descripton}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {console.log(props)}
        <MealItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default MealItem;
