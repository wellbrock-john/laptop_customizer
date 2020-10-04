import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';

function Cart(props) {
    return (
        <div className="summary_total_value">
            {USCurrencyFormat.format(props.total)}
        </div>
    )
}

export default Cart;