import React from 'react';

const CartItem = ({name, id, price, quantity, removeItem}) => (
    <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button type="button" className="btn btn-primary" onClick={() => removeItem(id)}>Remove</button></td>                
    </tr>    
);
export default CartItem;
