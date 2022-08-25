import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../components/Store/actions/cart';
import { TiTrash, TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  let totalPrice = 0;

  for (let i = 0; i < cart.Cart.length; i++) {
    totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
  }

  return (
    <div>
      <div>
        <div>
          <div>
            <h5>Meu Carrinho</h5>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Qtd</th>
                  <th>Preço</th>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.Cart.map(item => {
                  return (
                    <tr key={item.id}>
                      <th><button onClick={() => dispatch(cartActions.DeleteItem(cart, item))}><TiTrash size="27px" /></button></th>
                      <th><img src={item.image} alt={item.Name} width="50px" /></th>
                      <th><span>
                        {item.quantity}
                      </span></th>
                      <th>{item.price} XP</th>
                      <th><button onClick={() => dispatch(cartActions.AddItem(cart, item))}><TiArrowUpOutline size="27px" /></button></th>
                      <th><button onClick={() => dispatch(cartActions.RemoveItem(cart, item))}><TiArrowDownOutline size="27px" /></button></th>
                      <th>{(item.price * item.quantity)} XP</th>
                    </tr>
                  )
                })}
                <tr>
                  <th colSpan="2">Total</th>
                  <th colSpan="3">{cart.value} itens</th>
                  <th colSpan="2">{totalPrice} XP</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;