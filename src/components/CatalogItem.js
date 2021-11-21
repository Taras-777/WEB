import React from 'react'
import { NavLink } from 'react-router-dom'
import item_image from "./assets/boeing.jpg"

const CatalogItem = ({id, name, price, weight, type, count }) => {
    return (
        <div className='catalog-item'>
            <img className="item-image" src={item_image} alt="Item"/>
            <div className="item-description">
                <h3 className="item-name">{name}</h3>
                <label className="item-price">Price: {price} $</label>
                <label className="item-price">Total price: {count * price} hrn.</label>
                <label className="item-weight">Weight: {Math.round(weight * 100) / 100} kg</label>
                <label className="item-weight">Total weight: {Math.round(count * weight * 100) / 100} kg</label>
                <label className="item-count">Ammount: {count}</label>
            </div>
            <NavLink to={`/item/${id}`}>View more</NavLink>
        </div>
    )
}

export default CatalogItem
