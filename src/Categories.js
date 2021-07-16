import React, { useState } from 'react';

const Categories = ({ filterMenuItems, categories }) => {
  const [value, setValue] = useState(0);

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className={`filter-btn ${index === value ? 'active' : ''}`}
            key={index}
            onClick={() => {
              filterMenuItems(category);
              setValue(index);
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
