import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../payment/CheckoutForm";
function Payment() {
  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {/* <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements> */}
      
    </>
  );
}

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

export default Payment;
