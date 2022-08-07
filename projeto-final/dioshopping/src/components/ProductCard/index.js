import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@material-ui/core/';
import { StyledCard } from './styled';
import GridItem from '../GridItem'
import cartActions from '../store/actions/cart';

const Card = ({ product, children }) => {
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <GridItem>
        <img width="140px" src={product.image} alt={product.name_product} />
        <Typography variant='h6'>
          {children}
        </Typography>
        <Typography variant='subtitle1'>
          R$ {product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          onClick={() => dispatch(cartActions.Add(cart, product))}
        >
          Adicionar
        </Button>
      </GridItem>
    </StyledCard >
  );
}

export default Card;