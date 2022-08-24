import React from 'react';
import { StyledCard, Titulo, Normal, Button } from './styled';
import GridItem from '../GridItem'
import ImageLoader from '../ImageLoader';
import cartActions from '../Store/actions/cart';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ product, children }) => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <GridItem>
        <ImageLoader src={product.image} alt={product.name_product} />
        <Titulo>
          {children}
        </Titulo>
        <Normal>
          Categoria {product.name_categorys}
        </Normal>
        <Normal>
          XP$ {product.price}
        </Normal>
        <Normal>
          {product.description}
        </Normal>
        <Button
          onClick={() => dispatch(cartActions.Add(cart, product))}
        >
          Adicionar
        </Button>
      </GridItem>
    </StyledCard >
  );
}

export default Card;