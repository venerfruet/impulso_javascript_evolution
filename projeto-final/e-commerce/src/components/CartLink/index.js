import React from 'react';
import { useSelector } from 'react-redux';
import { StyledText } from './styled';

const CartLink = () => {
    const cart = useSelector(state => state.cart)

    if (cart.value > 0) {
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
    }

    return (
        <StyledText>
            {cart.value}
        </StyledText>
    )
}

export default CartLink;
