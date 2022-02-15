import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ token }) => {
  const stripe = useStripe();
  const elements = useElements();

  const userToken = token;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //Etape 2:envoie numéro de carte + récupèrer les données cb
      const CardElements = elements.getElement(CardElement);
      //Etape 3 et 4: Envoie ces données à l'API Stripe: vlaidation de la carte + réception d'un token
      const stripeResponse = await stripe.createToken(CardElement, {
        token: userToken,
      });
      console.log("Stripe Response ===> ", stripeResponse);
      // Envoie la requête à notre propre serveur
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { token: stripeResponse.token.id, amount: 10 }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h2>Payer</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CheckoutForm;
