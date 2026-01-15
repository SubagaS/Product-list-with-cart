import styles from './styles.module.css';
import FoodCard from '../foodCard/FoodCard';
import type { FoodItem } from '../foodCard/FoodCard';

export type allDataType = {
  allData: FoodItem[];
};

function Menu({ allData }: allDataType) {
  return (
    <>
      <section className={styles.menuContainer}>
        <h1 className={styles.title}>Desserts</h1>
        {allData.map((item) => (
          <FoodCard
            image={item.image}
            category={item.category}
            name={item.name}
            price={item.price}
            key={item.category}
          />
        ))}
      </section>
    </>
  );
}
export default Menu;
