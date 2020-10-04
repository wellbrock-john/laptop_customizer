import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

export default class Cart extends Component {
    generateCartItemList = () => {
        return Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <CartItem 
                key={featureHash}
                featureHash={featureHash}
                feature={feature}
                selectedOption={this.props.selected[feature]}
              />
            );
        });        
    }
    render( ) {
        const total = Object.keys(this.props.selected).reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.generateCartItemList()}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <CartTotal total={total}/>
                </div>
            </section>
        )
    }
}