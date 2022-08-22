import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GridProducts from '../components/GridProducts';
import Card from '../components/ProductCard';
import Modal from '../components/Modal/Index';
import FilterMenu from '../components/FilterMenu';
import Filterbar from '../components/FilterBar';

const Produtcs = () => {
  const products = useSelector(state => state.products);
  const categorys = useSelector(state => state.categorys);

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  const filterCategorys = (idCategory) => {
    const search = categorys.find((cat) => cat.id === idCategory);
    return search.show;
  }

  return (
    <>
      <Filterbar active={show} onClick={handleClick}>
        ...clique para filtrar a categoria.
      </Filterbar>
      <Modal active={!show} onClick={handleClick}>
        <FilterMenu />
      </Modal>
      <GridProducts>
        {products.map(item => {
          return (
            filterCategorys(item.id_categorys) && (
              <Card
                key={item.id_product}
                product={item}
              >
                {item.name_product}
              </Card>
            )
          )
        })}
      </GridProducts>
    </>
  );
}

export default Produtcs;