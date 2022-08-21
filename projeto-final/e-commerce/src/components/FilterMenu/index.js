import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledList, StyledItem, StyledSelect } from './styled';

const FilterMenu = () => {

  const categorys = useSelector(state => state.categorys);

  const handleChange = (id) => {
    categorys[id].show = !categorys[id].show;
    console.log(categorys);
  }

  return (
    <StyledList>
      {categorys.map(
        (category, index) => {
          return (
            <StyledItem key={category.id}>
              <StyledSelect
                defaultChecked={category.show}
                onChange={() => handleChange(index)}
              />
              {category.name} ({category.count})
            </StyledItem>
          )
        }
      )}
    </StyledList>
  );
}

export default FilterMenu;