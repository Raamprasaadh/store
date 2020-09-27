import React from 'react'
import SearchBar from './searchBar';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <h4>Title-logo</h4>
            <ul>
                <Link to="/"><li>Products</li></Link>
                <SearchBar />
                <Link to="/cart"><li>Cart</li></Link>
            </ul>
            
        </div>
    )
}
