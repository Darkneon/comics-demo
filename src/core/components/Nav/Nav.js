import React from "react";

import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Nav = ({links, ...props}) => {
    return (
        <nav data-testid='nav' {...props}>
            {
                links.map(item => (
                    <Link key={item.to}>item.text</Link>
                ))
            }
        </nav>
    );
};

Nav.propTypes = {
    links: PropTypes.array.isRequired,
};

export default Nav;