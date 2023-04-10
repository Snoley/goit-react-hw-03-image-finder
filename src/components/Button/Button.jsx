import React from 'react';
import { BtnLoadMore } from './Button.Styled';

const Button = ({ handleLoad }) => {
  return (
    <BtnLoadMore onClick={handleLoad}>
      Load more
    </BtnLoadMore>
  );
};

export default Button;
