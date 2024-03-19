import {Link} from 'react-router-dom';

const Navbar = () => { //stateless functional component
    return ( 
        <nav className="navbar">
            <h1>The KD Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to ="/create">New Blog</Link>
            </div>
        </nav>



     );
}
 
export default Navbar;
