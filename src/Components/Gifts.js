import axios from "axios";
import { useState, useEffect } from "react";
import Gift from "./Gift";

const API = process.env.REACT_APP_API_URL;

function Gifts() {
  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    axios.get(`${API}/gifts`).then((response) => {
      setGifts(response.data);  
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  return (
    <div className="Gifts">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift) => {
              return <Gift key={gift.id} bookmark={gift} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Gifts;