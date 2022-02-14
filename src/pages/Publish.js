import "./Publish.css";
import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="formContainer">
      <h3>Vends to article</h3>
      <form>
        <div className="addImg">
          {/* <i class="fa-solid fa-plus"></i> */}
          <input
            type="file"
            placeholder="Ajoute une photo"
            name="Ajoute"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div className="titleBlock">
          <input
            type="text"
            name="Titre "
            placeholder="ex: Chemise Sézane verte"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            name="Décris ton article"
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
            placeholder="ex: Zara"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <input
            type="text"
            name="Taille"
            placeholder="ex: L/40/12"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <input
            type="text"
            name="Couleur"
            placeholder="ex: Fushia"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <input
            type="text"
            name="Etat"
            placeholder="ex: Neuf avec étiquette"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
          <input
            type="text"
            name="Lieu"
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
            placeholder="ex: 0.00 €"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <input
            type="checkbox"
            onChange={(event) => {
              setCheckbox(event.target.value);
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
