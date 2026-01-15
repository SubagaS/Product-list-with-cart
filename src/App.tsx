import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import data from './data.json';
import type { allDataType } from './Components/Menu/Menu';
import type { FoodItem } from './Components/foodCard/FoodCard';

function App() {
  let imageSize: 'mobile' | 'tablet' | 'desktop' = 'mobile';
  if (window.outerWidth <= 500) {
    imageSize = 'mobile';
  } else if (window.outerWidth > 500 && window.outerWidth <= 1200) {
    imageSize = 'tablet';
  } else {
    imageSize = 'desktop';
  }

  const newData: allDataType = data.map((item: FoodItem) => {
    const key: keyof typeof item = imageSize;
    return { ...item, image: item.image[key] };
  });
  console.log(newData);
  return (
    <>
      <Menu allData={newData} />
      <Cart />
    </>
  );
}

export default App;
