import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Go TO CHECKOUT</CustomButton>
  </div>
);

const mapDispatchToProps = dispath => ({
  tooggleCartHidden: () => dispath(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartDropdown);
