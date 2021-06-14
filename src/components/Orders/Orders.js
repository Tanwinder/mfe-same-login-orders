import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import List from '../../presentational/List';
import {CALL_ORDERS} from '../../actions/actionTypes'

import './orders.scss'

const Orders = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state?.orders?.items);
    useEffect(() => {
        dispatch({type: CALL_ORDERS});
    }, [])
    return(
        <div className="orders">
            <List items={items}/>
        </div>
    )
}

export default Orders;