import { Link } from "react-router-dom";

function Gift({ gift }) {
  return (
    <tr>
      <td>
        {gift.is_favorite ? (
          <span>✅</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
      
      </td>
      <td>
        <Link to={`/gifts/${gift.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Gift;