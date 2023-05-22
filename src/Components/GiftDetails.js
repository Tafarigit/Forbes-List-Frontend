import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function GiftDetails() {
const [gift, setGift] = useState([]);
const { id } = useParams();
const navigate = useNavigate();



useEffect(() => {
    axios.get(`${API}/gifts/${id}`).then((response) => {
        setGift(response.data);
    }).catch((error) => {
        console.log(error);
    })
}, [id]);




  const handleDelete = () => {
   deleteGift();
  }

  const deleteGift = () => {
    axios.delete(`${API}/gifts/${id}`).then(() => {
      navigate("/gifts");
    }).catch((error) => {
      console.warn("catch:", error);
    })
  }



  return ( <article><h3>{true ? <span>✅</span> : null} {gift.name}</h3><h5><span>{gift.brand}</span>
  {gift.brand}</h5><h6>{gift.description}</h6>
  <div className="showNavigation">
      <div>
        <Link to={`/gifts`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/gifts/id/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div><p>gift.description</p></article>
  );
}

