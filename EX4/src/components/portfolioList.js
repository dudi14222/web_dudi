import React, { Component } from 'react';
import PortfolioItem from './portfolioItem/portfolioItem';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'


class PortfolioList extends Component {
    constructor(props) {
        super(props);        
    }    

    render() {
        const itemList = this.props.items;
        const transitionOptions = {
            transitionName: 'fade',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 800,
            transitionAppear: true,
            transitionAppearTimeout: 900
        };
        return (
            <div className="item-list">
                    <CSSTransitionGroup {...transitionOptions}>
                    {
                        itemList.map((item) => {
                            return <PortfolioItem id={item.id} key={item.id} removeItem={this.props.removeItem} editItem={this.props.editItem} displayItem={this.props.displayItem} title={item.title} imagePath={item.path} />
                        })
                    }
                    </CSSTransitionGroup>
                             
            </div>
        );
    }
}

PortfolioList.propTypes = {
    items: PropTypes.array.isRequired,
    editItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    displayItem: PropTypes.func.isRequired
};
export default PortfolioList;