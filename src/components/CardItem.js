import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props) {
    return (
        <li className="cards__li">
           <Link className="cards__link" to={props.path}>
                <figure className="cards__figure" data-category={props.label}>
                    <img className="cards__img" src={props.src} alt={props.label} />
                </figure>   
                <h5 className="cards__text">{props.text}</h5>
            </Link> 
        </li>
    )
}

export default CardItem
