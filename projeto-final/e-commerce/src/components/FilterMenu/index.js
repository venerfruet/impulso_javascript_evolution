import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledList, StyledItem, StyledSwitchPosition } from './styled';
import Switch from 'react-switch';

const FilterMenu = () => {

  const categorys = useSelector(state => state.categorys);

  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (id) => {
    setIsChecked(!isChecked);
    categorys[id].show = !categorys[id].show;
  }

  return (
    <StyledList>
      {categorys.map(
        (category, index) => {
          return (
            <StyledItem key={category.id}>
              <StyledSwitchPosition>
                <Switch
                  onChange={() => handleChange(index)}
                  checked={category.show}
                  onHandleColor="#ff1493"
                  offHandleColor="#ff1493"
                />
              </StyledSwitchPosition>
              {category.name} ({category.count})
            </StyledItem>
          )
        }
      )}
    </StyledList>
  );
}

export default FilterMenu;