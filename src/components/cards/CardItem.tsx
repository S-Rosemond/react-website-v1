import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Mapped type potential second solution;
// search Typescript mapped types
interface Props {
  [propName: string]: string;
}

const CardItem = ({ src, text, label, path }: Props) => {
  return (
    <Fragment>
      <li className='cards__item'>
        <Link to={path} className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img src={src} alt='' className='cards__item__img' />
          </figure>

          <div className='cars__item__info'>
            <h5 className='cars__item__text'>{text}</h5>
          </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default CardItem;
