import React from 'react';
import './footer.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearAll } from '../redux/menuSlice';

const Footer = () => {
    const orderSum = useSelector((state) => state.order.sum);
    const orderList = useSelector((state) => state.order.productList);
    const quantityFood = useSelector((state) => state.order.quantity);

    const dispatch = useDispatch();

    return(
        <footer>
            <div className='counter'>{orderSum}</div>
            <ul>
                {orderList.map(item => <li>{item}</li>)}
            </ul>
            <ul>
                {quantityFood.map(item => <li>{item}</li>)}
            </ul>
            <button className='order' onClick={() => {dispatch(clearAll())}}>Відправити замовлення</button>
        </footer>
    );
}

export default Footer;