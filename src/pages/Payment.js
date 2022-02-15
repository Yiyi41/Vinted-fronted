import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  return (
    <div>
      <h2>Résumé de la commande</h2>
      <p>
        Commande <span>0</span> €
      </p>
      <p>Frais protection acheteurs</p>
      <p>Frais de port</p>
      <h3>
        Total <span>0</span>€
      </h3>
      <p>
        Il ne vous reste plus qu'un étape pour vous offrir shoe. Vous allez
        payer 0 € (frais de protection et frais de port inclus).
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm token={token} />
      </Elements>
    </div>
  );
};

export default Payment;
