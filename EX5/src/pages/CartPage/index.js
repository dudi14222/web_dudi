import React, { Component } from 'react';
import {
    Layout,
    CartItem
} from '../../components/';
import {removeItem} from '../../actions/actions';
import { connect } from 'react-redux';
import {getItemsSelector} from '../../reducers/cartReducer';
import './cartPage.css';

class CartPage extends Component {
    removeItem(itemId) {
      this.props.removeItem(itemId);                      
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
                                        <th>Qty</th> 
                                        <th></th>    
                                        <th></th>                                                                             
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    {
                                        this.props.items.map((item) => {
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

const mapStateToProps = (state) => ({
    items: getItemsSelector(state)
})

export default connect(mapStateToProps, { removeItem })(CartPage);
