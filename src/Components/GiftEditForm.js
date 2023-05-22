import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function GiftEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [gift, setGift] = useState({
    name: "",
    brand: "",
    description: "",
    quantity: 0,
    price: 0,
    is_favorite: false,
    is_wearable: false,
  });

  const updateGift = (updatedGift) => {
    axios
      .put(`${API}/gifts/${id}`, updatedGift)
      .then(
        () => {
          navigate(`/gifts/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((err) => console.warn("catch", err));
  };

  const handleTextChange = (event) => {
    setGift({ ...gift, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setGift({ ...gift, is_favorite: !gift.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/gifts/${id}`).then(
      (response) => setGift(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGift(gift, id);
  };
  return (
    <div className="Edit">
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
          name="brand"
          value={gift.brand}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={gift.price}
          placeholder=""
          onChange={handleTextChange}
        />
        
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          required
          value={gift.quantity}
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description</label>
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

        <br />

        <input type="submit" />
      </form>
      <Link to={`/gifts/${id}`}>{/* <button>Click</button> */}</Link>
    </div>
  );
}

export default GiftEditForm;
