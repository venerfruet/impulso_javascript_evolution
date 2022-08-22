import React from 'react';
import { StyledCard, Titulo, Normal, Button } from './styled';
import GridItem from '../GridItem'
import ImageLoader from '../ImageLoader';

const Card = ({ product, children }) => {

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
        <Button>
          Adicionar
        </Button>
      </GridItem>
    </StyledCard >
  );
}

export default Card;