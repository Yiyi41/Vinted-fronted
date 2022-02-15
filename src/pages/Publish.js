import "./Publish.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();
  const [checkbox, setCheckbox] = useState(false);

  const navigate = useNavigate();
  //send form info to server

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //   setIsLoading(true);

      //create FormData, type of objet
      const formData = new FormData();
      //add keys/value to the objet data
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("checkbox", checkbox);
      console.log(formData);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: `Bearer ${Cookies.get("userToken")}` } }
      );
      console.log(response.data._id);

      response.data && navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <div className="publishContainer">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="addImg">
            {/* <i class="fa-solid fa-plus"></i> */}
            <input
              type="file"
              placeholder="Ajoute une photo"
              name="Ajoute"
              // value={picture} type file n'a pas de champs value
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
          </div>
          <div className="titleBlock">
            <input
              type="text"
              name="Titre "
              value={title}
              placeholder="ex: Chemise Sézane verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              type="text"
              name="Décris ton article"
              value={description}
              placeholder="ex: porté quelques fois, taille correctement"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div className="detailsBlock">
            <input
              type="text"
              name="Marque"
              value={brand}
              placeholder="ex: Zara"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
            <input
              type="text"
              name="Taille"
              value={size}
              placeholder="ex: L/40/12"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
            <input
              type="text"
              name="Couleur"
              value={color}
              placeholder="ex: Fushia"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
            <input
              type="text"
              name="Etat"
              value={condition}
              placeholder="ex: Neuf avec étiquette"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
            <input
              type="text"
              name="Lieu"
              value={city}
              placeholder="ex: Paris"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div className="priceBlock">
            <input
              type="text"
              name="Prix"
              value={price}
              placeholder="ex: 0.00 €"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <input
              type="checkbox"
              onChange={(event) => {
                setCheckbox(event.target.checked);
              }}
            />
            <span>Je suis intéressé(e) par les échanges</span>
          </div>
          <div>
            <input type="submit" value="Ajouter" />
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default Publish;
