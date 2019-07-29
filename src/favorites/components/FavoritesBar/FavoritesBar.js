import React from 'react';

import './FavoritesBar.scss'
import {Link} from "react-router-dom";

function FavoritesBar({linkTo}) {
    return (
        <div className='favorite-bar'>
            <Link to={linkTo}>
                <div className='favorite-bar-toggle u-hoverable'>Favorites</div>
            </Link>
        </div>
    )
}

export default FavoritesBar;