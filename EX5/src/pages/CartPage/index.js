import React, { Component } from 'react';
import {
    Layout,
    CartItem
} from '../../components/';
import storeData from '../../services/storeData';
import './cartPage.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: storeData.getItems()
        }
    }
    removeItem(itemId) {
        storeData.removeItem(itemId);
        let copyItems = [...storeData.getItems()];        
        this.setState(
            {
                items: copyItems
            });                    
    }
    render() {    
        return (
            <Layout>                
                    <div className="container">
                        <div className="table-responsive">          
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>   
                                        <th>Remove</th>                                                                             
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    {
                                        this.state.items.map((item) => {
                                            return <CartItem key={item.id} {...item} removeItem={this.removeItem.bind(this)}/>  
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>                                   
            </Layout>
        );
    }
}

export default CartPage;
