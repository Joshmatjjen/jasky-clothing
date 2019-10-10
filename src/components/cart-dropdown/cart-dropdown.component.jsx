import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector'

import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions'  

import './cart-dropdown.styles.scss';

// withRouter(get {history}) when connected
// react see dispatch to props without creating a new mapDispatchToProps()
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        ) 
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>
      Go TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps =  createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
