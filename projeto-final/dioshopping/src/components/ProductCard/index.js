import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@material-ui/core/';
import { StyledCard } from './styled';
import GridItem from '../GridItem'
import cartActions from '../store/actions/cart';
import ImageLoader from '../ImageLoader';

const Card = ({ product, children }) => {
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <GridItem>
        <ImageLoader src={product.image} alt={product.name_product} />
        <Typography variant='h6'>
          {children}
        </Typography>
        <Typography variant='subtitle1'>
          XP$ {product.price}
        </Typography>
        <Typography variant='subtitle2'>
          {product.description}
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