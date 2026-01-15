import styles from './styles.module.css';
import addCart from './../../../public/assets/images/icon-add-to-cart.svg';

// type ImageSource = {
//   thumbnail: string;
//   mobile:string;
//   desktop:string;
// };

export type FoodItem = {
  image: string;
  category: string;
  name: string;
  price: number;
};

function FoodCard(foodProps: FoodItem) {
  const { image, category, name, price } = foodProps;
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={image} alt="dessert-thumbnail" className={styles.imgFood} />
        <div className={styles.txtContainer}>
          <p className={styles.categoryTxt}>{category}</p>
          <p className={styles.nameTxt}>{name}</p>
          <p className={styles.priceTxt}>&#36; {price}</p>
        </div>
        <button className={styles.addToCartBtn}>
          <img src={addCart} alt="cart-icon" className={styles.cartIcon} />
          <p className={styles.addCartTxt}>Add to cart</p>
        </button>
      </div>
    </>
  );
}

export default FoodCard;
