import { Link } from "react-router-dom";

function Gift({ gift }) {
  return (
    <div className="Gift">
      <p>
       {gift.is_favorite ? <span>✅</span> : null} {gift.name}
    
        <Link to={`/gifts/${gift.id}`}>✏️</Link>
      </p>
    </div>
  );
}

export default Gift;