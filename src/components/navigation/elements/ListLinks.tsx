import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { handleClickAnchor } from '../../../globalTypes';

interface array {
  to: string;
  linkName: string;
  addMobile?: boolean | undefined;
}

const ListLinks: React.FC<{
  array: array[];
  handleClick: handleClickAnchor;
}> = (props) => {
  const { array, handleClick } = props;

  const list = array.map((el) => {
    if (el.addMobile) {
      return (
        <li className='nav-item' key={el.linkName}>
          <Link to={el.to} className='nav-links-mobile' onClick={handleClick}>
            {el.linkName}
          </Link>
        </li>
      );
    } else
      return (
        <li className='nav-item' key={el.linkName}>
          <Link to={el.to} className='nav-links' onClick={handleClick}>
            {el.linkName}
          </Link>
        </li>
      );
  });

  return <Fragment>{list}</Fragment>;
};

export default ListLinks;
