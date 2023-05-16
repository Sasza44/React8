import React, { useState, useEffect } from 'react';
import './menu.css';
import Service from'../services/index.js';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/menuSlice';

const Menu = () => {
    const dispatch = useDispatch();

    const menu = new Service();
    const [card, setCard] = useState(menu.getMenu());
    //console.log(card);

    return(
        <>
            {card === undefined ? <p>Завантаження</p> : <div className='cards'>
                {card.filter(e => e.stopList === false).map(item => <div key={item.id} className='card'>
                    <img src={item.productImageUrl}></img>
                    <div>{item.productName}</div>
                    <div>{item.price}</div>
                    <button onClick={() => {dispatch(addProduct(item))}}>Замовити</button>
                </div>)}
            </div>}
        </>
    );
}

export default Menu;