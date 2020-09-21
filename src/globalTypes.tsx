import React from 'react';

export type handleClickAnchor = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => void;

export type handleClickButton = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

// Ultimate Interface solution from doc;
//  [propName: string]:any;
