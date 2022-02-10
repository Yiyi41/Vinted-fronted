// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Owner from "../components/Owner";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="containerInOffer">
      <div>
        <img
          className="imgInOffer"
          src={data.product_pictures[0].secure_url}
          alt=""
        />
      </div>
      <div className="offerInfoBlock1">
        <p className="price">{data.product_price} €</p>
        {data.product_details.map((detail, index) => {
          const keys = Object.keys(detail);
          console.log(keys);
          return (
            <div className="offerDetails" key={index}>
              {keys[0]}: {detail[keys[0]]}
            </div>
          );
        })}
        <div className="offerInfoBlock2">
          <h2>{data.product_name}</h2>
          <h3>{data.product_description}</h3>
          <Owner
            url={data.owner.account.avatar.url}
            username={data.owner.account.username}
          />
          <button>Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
