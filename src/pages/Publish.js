import "./Publish.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("test");
  const [description, setDescription] = useState("test");
  const [brand, setBrand] = useState("test");
  const [size, setSize] = useState("test");
  const [color, setColor] = useState("test");
  const [condition, setCondition] = useState("test");
  const [location, setLocation] = useState("test");
  const [price, setPrice] = useState(30);
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
      formData.append("location", location);
      formData.append("price", price);
      formData.append("checkbox", checkbox);
      console.log(formData);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: `Bearer ${Cookies.get("userToken")}` } }
      );
      //   console.log(response.data);

      response.data && navigate(`/offer${response.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="publishForm">
      <h3>Vends to article</h3>
      <form onSubmit={handleSubmit}>
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
          <input
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
            value={location}
            placeholder="ex: Paris"
            onChange={(event) => {
              setLocation(event.target.value);
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
      </form>
    </div>
  );
};

export default Publish;
