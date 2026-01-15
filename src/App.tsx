import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import data from './data.json';
import type { allDataType } from './Components/Menu/Menu';
import type { FoodItem } from './Components/FoodCard/FoodCard';
import { createContext, useState } from 'react';

const CountContext = createContext(Number);

function App() {
  const [count, setCount] = useState(0);

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
      <CountContext.Provider value={count}>
        <Menu allData={newData} />
        <Cart />
      </CountContext.Provider>
    </>
  );
}

export default App;
