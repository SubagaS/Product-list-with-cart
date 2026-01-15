import styles from './styles.module.css';
import { useState } from 'react';
import addCart from './../../../public/assets/images/icon-add-to-cart.svg';
import minusIcon from './../../../public/assets/images/icon-decrement-quantity.svg';
import plusIcon from './../../../public/assets/images/icon-increment-quantity.svg';

export type FoodItem = {
  image: string;
  category: string;
  name: string;
  price: number;
};

function AddToCartButton({ onclick }) {
  return (
    <>
      <button className={styles.addToCartBtn} onClick={onclick}>
        <img src={addCart} alt="cart-icon" className={styles.cartIcon} />
        <p className={styles.addCartTxt}>Add to cart</p>
      </button>
    </>
  );
}

function QuantityButton({ decreaseQuantity, addQuantity, quantity }) {
  return (
    <>
      <div className={styles.quantityBtn}>
        <button className={styles.minusIconBtn} onClick={decreaseQuantity}>
          <img src={minusIcon} alt="minus-icon" />
        </button>
        <p className={styles.quantity}>{quantity}</p>
        <button className={styles.plusIconBtn} onClick={addQuantity}>
          <img src={plusIcon} alt="plus-icon" />
        </button>
      </div>
    </>
  );
}

function FoodCard(foodProps: FoodItem) {
  const { image, category, name, price } = foodProps;
  const [count, setCount] = useState(0);

  function handleAddQuantity() {
    setCount((c) => c + 1);
  }
  function handleDecreaseQuantity() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <div className={styles.cardContainer}>
        <img src={image} alt="dessert-thumbnail" className={styles.imgFood} />
        <div className={styles.txtContainer}>
          <p className={styles.categoryTxt}>{category}</p>
          <p className={styles.nameTxt}>{name}</p>
          <p className={styles.priceTxt}>&#36; {price}</p>
        </div>
        {count === 0 ? (
          <AddToCartButton onclick={handleAddQuantity} />
        ) : (
          <QuantityButton
            quantity={count}
            decreaseQuantity={handleDecreaseQuantity}
            addQuantity={handleAddQuantity}
          />
        )}
      </div>
    </>
  );
}

export default FoodCard;
