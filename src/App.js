import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//Getting unique category names
const categoryNames = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoryNames);
  const filterMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    let newMenuItems = items.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(newMenuItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Courses</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
