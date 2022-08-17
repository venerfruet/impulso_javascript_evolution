import React from 'react';
import { useSelector } from 'react-redux';
import { StyledList, StyledItem, StyledSelect } from './styled';

const FilterMenu = () => {

  const products = useSelector(state => state.products);

  const categorys = products.map(
    category => {
      const container = {};
      container['id'] = category.id_categorys;
      container['name'] = category.name_categorys;
      return container;
    }
  );


  const category = categorys.map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse);

  const arrayCategory = categorys.map(category => category.name);
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    let key = arrayCategory[i];
    count[key] = (count[key] ? count[key] + 1 : 1);
  }

  return (
    <StyledList>
      {category.map(
        category => {
          return (
            <StyledItem key={category.id}>
              <StyledSelect defaultChecked={true} />
              {category.name} ({count[category.name]})
            </StyledItem>
          )
        }
      )}
    </StyledList>
  );
}

export default FilterMenu;