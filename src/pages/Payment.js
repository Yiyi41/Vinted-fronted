import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  const location = useLocation();
  const { productName } = location.state;
  const { price } = location.state;

  return (
    <div className="paymentContainer">
      <h2>Résumé de la commande</h2>
      <div className="detail">
        <p>Commande</p>
        <p>{price} €</p>
      </div>
      <div className="detail">
        <span>Frais protection acheteurs</span>
        <span>0 €</span>
      </div>
      <div className="detail">
        <span> Frais de port</span>
        <span>0 €</span>
      </div>
      <div className="detail">
        <span>Total</span>
        <span>{price} €</span>
      </div>

      <div>
        Il ne vous reste plus qu'un étape pour vous offrir {productName}. Vous
        allez payer {price} € (frais de protection et frais de port inclus).
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm token={token} />
      </Elements>
    </div>
  );
};

export default Payment;
