import styles from './styles.module.css';
import FoodCard from '../foodCard/FoodCard';

function Menu() {
  return (
    <>
      <section className={styles.menuContainer}>
        <p>Food menu area</p>
        <FoodCard />
      </section>
    </>
  );
}
export default Menu;
