import React from "react";
import StripeCheakout from "react-stripe-checkout";

const StripeCheakoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePublickKey =
    "pk_test_51HXfTVDyBKGhwxaHZzvzHn620Bc8wwk1nJl0sEOcuK5Hg6RQIPVrUGKPuXiY9ysixqxz8Un6Eoon71JBr7ycrT1u00fUJOls4A";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheakout
      label="Pay Now"
      name="Crwon Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`You totla is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripePublickKey}
    />
  );
};

export default StripeCheakoutButton;
