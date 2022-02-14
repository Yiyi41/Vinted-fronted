import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Owner from "../components/Owner";
import tear from "../assets/img/tear.svg";
//import { useParams } from "react-router";

const Home = () => {
  // { filterText, sortType, priceMin, priceMax }
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://lereacteur-vinted-api.herokuapp.com/offers" //mettre les querrys(limit(en dur) et page(useState)) pagination ici, créer 2 boutons pour la pagination --> pour savoir comment envoyer les querys, il faut regarder comment le back est fait
        );
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="site-content">
      <div className="heroContainer">
        <img className="tear" src={tear} alt="tear" />
      </div>

      <div className="flex-container">
        {/* {data.offers
          .filter((offer) => {
            return offer.product_name
              .toLowerCase()
              .includes(filterText.toLowerCase());
          })
          .filter((offer) => {
            return offer.product_price >= priceMin;
          })
          .filter((offer) => {
            return offer.product_price <= priceMax;
          })
          .sort((a, b) => {
            if (sortType === "price-Asc") {
              if (a.product_price < b.product_price) return -1;
              if (a.product_price > b.product_price) return 1;
            } else if (sortType === "price-Dsc") {
              if (a.product_price < b.product_price) return 1;
              if (a.product_price > b.product_price) return -1;
            }
            return 0;
          }) */}
        {data.offers.map((offer, index) => {
          return (
            <Link
              key={offer._id}
              to={`/offer/${offer._id}`}
              className="flex-item"
            >
              <div className="offers">
                <div className="eachOffer">
                  <Owner
                    url={offer.owner.account.avatar.url}
                    username={offer.owner.account.username}
                  />
                  <div className="offerInfo">
                    <img
                      className="imgProduct"
                      src={offer.product_image.secure_url}
                      alt=""
                    />
                    <p>{offer.product_price} €</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
