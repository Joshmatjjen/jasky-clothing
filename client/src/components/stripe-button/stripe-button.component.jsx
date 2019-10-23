import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_BZfTCAZJUhyTxvx8SUJJH2UQ';

   const onToken = token => {
     axios({
       url: 'payment',
       method: 'post',
       data: {
         amount: priceForStripe,
         token
       }
     }).then(response =>  {
       alert('Payment successful');
     }).catch(error => {
       console.log('Payment error: ', JSON.parse(error));
       alert(
         'There was an isssue with your payment. Please be sure you use the provided credit card.'
       );
     })
   }

   return (
    <StripeCheckout 
      label='Pay Now'
      name='J-Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://image.flaticon.com/icons/svg/1170/1170764.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
   );
};

export default StripeCheckoutButton;