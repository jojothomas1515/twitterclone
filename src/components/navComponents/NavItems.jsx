import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function NavItems({classes,to, g1,g2,name}) {
    g2 = g2 == null? g1:g2
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    console.log(isActive)
    return (
        <Link to={to} className={`nav-items ${classes}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                {isActive? g2:g1}
            </svg>
            <span>{name? name:null}</span>
        </Link>
    );
}

export default NavItems;
