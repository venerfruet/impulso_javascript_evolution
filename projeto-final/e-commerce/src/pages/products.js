import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GridProducts from '../components/GridProducts';
import Card from '../components/ProductCard';
import Modal from '../components/Modal/Index';
import FilterMenu from '../components/FilterMenu';
import Filterbar from '../components/FilterBar';

const Produtcs = () => {
  const products = useSelector(state => state.products)

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <>
      <Filterbar active={show} onClick={handleClick}>
        ...exibindo tudo.
      </Filterbar>
      <Modal active={!show} onClick={handleClick}>
        <FilterMenu />
      </Modal>
      <GridProducts>
        {products.map(item => {
          return (
            <Card
              key={item.id_product}
              product={item}
            >
              {item.name_product}
            </Card>
          )
        })}
      </GridProducts>
    </>
  );
}

export default Produtcs;