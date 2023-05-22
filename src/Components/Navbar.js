import { Link } from 'react-router-dom';

 function Navbar() {
    return (
        <div>
            <h1>Welcome to the House of Swag</h1>
            <button>
                <Link to="/gifts">Gifts</Link>
            </button>
            <button>
                <Link to="/gifts/new">New Gift</Link>
            </button>
            
        </div>
    )
}

export default Navbar;

