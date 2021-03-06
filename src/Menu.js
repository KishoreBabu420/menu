import React from 'react';

function formatToCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

const Menu = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <article className='menu-item' key={id}>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>₹ {formatToCurrency(price)}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
