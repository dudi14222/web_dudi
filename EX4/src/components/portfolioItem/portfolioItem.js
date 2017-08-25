import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './portfolioItem.css';


class PortfolioItem extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-3">
                <div className="thumbnail">
                    <div className="parent">
                        <button type="button" className="glyphicon glyphicon-edit" onClick={() => { this.props.editItem(this.props.id) }}></button>
                        <img className="delete-icon" src='/images/delete.png' onClick={() => { this.props.removeItem(this.props.id) }} />
                    </div>
                    <h4 className="text-center"><u> {this.props.title}</u> </h4>                                        
                    <img className="main-image" src={this.props.imagePath} style={{width: '200px', height: '200px'}} onClick={() => { this.props.displayItem(this.props.id) }} />
                </div>
            </div>
        );
    }
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    editItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    displayItem: PropTypes.func.isRequired
};

export default PortfolioItem;
