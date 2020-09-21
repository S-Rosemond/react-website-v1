import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import { handleClickButton } from '../../globalTypes';

interface Button {
  children: any;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  handleClick?: handleClickButton;
  buttonStyle?: string;
  buttonSize?: string;
  [propName: string]: any;
}

const STYLES: string[] = ['btn-primary', 'btn-outline'];
const SIZES: string[] = ['btn-medium', 'btn-large'];

const Button = ({
  children,
  type = 'button',
  handleClick,
  buttonStyle = '',
  buttonSize = '',
}: Button) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/' className='btn-mobile'>
      <button
        className={`btn btn-border ${checkButtonStyle} ${checkButtonSize}`}
        onClick={handleClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
