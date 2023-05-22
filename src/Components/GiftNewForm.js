import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
console.log(API);

export default function GiftNewForm() {
  let navigate = useNavigate();

  const addGift = (newGift) => {
    axios
      .post(`${API}/gifts`, newGift)
      .then(
        () => {
          navigate(`/gifts`);
        //   navigate(`/`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn("catch", error));
  };

  const [gift, setGift] = useState({
    name: "",
    brand: "",
    price: "",
    description: false,
    quantity: "",
    is_favorite: false,
    is_wearable: false,
  });

//   const [price, setPrice] = useState(0);
//   const [quantity, setQuantity] = useState(0);

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//     setGift({ ...gift, price: event.target.value });
//   };

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//     setGift({ ...gift, quantity: event.target.value });
//   };

  const handleTextChange = (event) => {
    setGift({ ...gift, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setGift({
      ...gift,
      is_favorite: !gift.is_favorite,
      is_wearable: !gift.is_wearable,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGift(gift);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={gift.name}
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
        />
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={gift.brand}
          placeholder=""
          onChange={handleTextChange}
          required
       
        
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={gift.description}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={gift.is_favorite}
        />
        <label htmlFor="is_wearable">Wearable:</label>
        <input
          id="is_wearable"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={gift.is_wearable}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={gift.price}
          onChange={handleTextChange}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={gift.quantity}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
