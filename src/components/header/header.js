import React from 'react';
import{NavLink,Link} from 'react-router-dom';

let Header =(props) =>

{
    return(
     <header id="header">
        <div className="container">
            <nav>
                <div className="logo"><Link to= "/"><i className="fas fa-book-open"></i></Link></div>
                <ul className="categories">
                    <li><NavLink to="/book/category/HTML">HTML</NavLink></li>
                    <li><NavLink to="/book/category/CSS">CSS</NavLink></li>
                    <li><NavLink to="/book/category/Javascript">JavaScript</NavLink></li>
                    <li><NavLink to="/book/category/React">React</NavLink></li>
                    <li><NavLink to="/book/category/NodeJS">Node JS</NavLink></li>
                </ul>
            </nav>
        </div>  
 </header>
    )
}

export default Header;