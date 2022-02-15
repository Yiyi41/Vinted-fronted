import "./Offer.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Owner from "../components/Owner";

const Offer = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
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
    <div className="offerContainer">
      <div className="offerImg">
        {data.product_image ? (
          <img src={data.product_image.secure_url} alt="" />
        ) : (
          ""
        )}
      </div>

      <div className="offerTextBlock">
        <div className="offerTextBlock1">
          <p className="price">{data.product_price} €</p>
          {data.product_details.map((detail, index) => {
            const keys = Object.keys(detail);
            // console.log(keys);
            return (
              <div className="offerDetails" key={index}>
                <span>{keys[0]}</span> : &nbsp; &nbsp; &nbsp;{detail[keys[0]]}
              </div>
            );
          })}
        </div>

        <div className="offerTextBlock2">
          <p className="product-name">{data.product_name}</p>
          <p>{data.product_description}</p>
          <Owner
            url={data.owner.account.avatar ? data.owner.account.avatar.url : ""}
            username={data.owner.account.username}
          />
        </div>
        <div className="button-achter">
          <button
            onClick={() => {
              token
                ? navigate("/payment", {
                    state: {
                      productName: data.product_name,
                      price: data.product_price,
                    },
                  })
                : navigate("/signin");
            }}
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
