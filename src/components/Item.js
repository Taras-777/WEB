import React from 'react'
import { useState } from 'react'
import item_image from "./assets/boeing.jpg"

const Item = ({ allItems, id }) => {

    const [item] = useState(allItems.find(item => item.id == id))

    return (
        <div className='item'>
            <img className="item__item-image" src={item_image} alt="Item"/>
            <div className="item-info">
                <h1 className="item-name">{item.name}</h1>
                <label className="item-price">Price: {item.price} $</label>
                <label className="item-price">Total price: {item.count * item.price} $</label>
                <label className="item-weight">Weight: {Math.round(item.weight * 100) / 100} kg</label>
                <label className="item-weight">Total weight: {Math.round(item.count * item.weight * 100) / 100} kg</label>
                <label className="item-count">Ammount: {item.count}</label>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}

export default Item
