import React from 'react';
import cardArray from './../../view/etc/CardElements';
import CardItem from './CardItem';

import './Cards.css';

const newCardArray = cardArray.map((el, idx) => {
  const { src, text, label, path } = el;

  return (
    <CardItem
      key={label + idx}
      src={src}
      text={text}
      label={label}
      path={path}
    />
  );
});

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>{newCardArray.slice(0, 2)}</ul>
          <ul className='cards__items'>{newCardArray.slice(2, 5)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
