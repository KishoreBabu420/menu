import React, { useState } from 'react';

const Categories = ({ filterMenuItems, categories }) => {
  const [isActive, setActive] = useState(false);
  let active = '';
  const toggleClass = (cat) => {
    active = cat;
    setActive(!isActive);
  };

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className={!isActive ? 'filter-btn active' : 'filter-btn'}
            key={index}
            onClick={() => {
              filterMenuItems(category);
              toggleClass(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
