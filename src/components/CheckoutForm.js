import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ token }) => {
  const stripe = useStripe();
  const elements = useElements();

  //   console.log("Le token du user passé en props ===> ", token);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //Etape 2:envoie numéro de carte + récupèrer les données cb
      const cardInfos = elements.getElement(CardElement);
      //Etape 3 et 4: Envoie ces données à l'API Stripe: vlaidation de la carte + réception d'un token
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: token, // à la place du token on puisse envoyer l'id du user
      });
      console.log("Stripe Response ===> ", stripeResponse);
      // Envoie la requête à notre propre serveur
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { token: stripeResponse.token.id, amount: 10 }
      );
      console.log(response.data.status); // Succeeded
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="checkoutContainer">
      <form onSubmit={handleSubmit}>
        <CardElement className="cardInfo" />
        <input className="pay-btn" type="submit" value="Pay" />
      </form>
    </div>
  );
};

export default CheckoutForm;
