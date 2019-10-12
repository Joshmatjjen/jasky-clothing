import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_BZfTCAZJUhyTxvx8SUJJH2UQ';

   const onToken = token => {
     console.log(token);
     alert('Payment Successfully');
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