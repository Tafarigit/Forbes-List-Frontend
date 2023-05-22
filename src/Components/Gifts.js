import axios from "axios";
import { useState, useEffect } from "react";
import Gift from "./Gift";

const API = process.env.REACT_APP_API_URL;

function Gifts() {
  const [gifts, setGifts] = useState([]);
 
  useEffect(() => {
    axios.get(`${API}/gifts`).then((response) => {
      setGifts(response.data);  
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  return (
    <div className="Gifts">
      <main>
   

              <p><strong>Take a look at our goods</strong></p>
              <br>
              </br>
              <p>See this item</p>
         
          <ul>
            {gifts.map((gift) => {
              return <Gift key={gift.id} gift={gift} />;
            })}
          </ul>
        
      
      </main>
    </div>
  );
}

export default Gifts;