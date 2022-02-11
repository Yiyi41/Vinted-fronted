import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Owner from "../components/Owner";
import heroImg from "../assets/img/heroImg.jpg";
import tear from "../assets/img/tear.svg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
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
        {/* <img className="hero" src={heroImg} alt="" /> */}
        <img className="tear" src={tear} alt="tear" />
      </div>

      <div className="flex-container">
        {/* <Header /> */}
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
                      src={offer.product_pictures[0].url}
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
