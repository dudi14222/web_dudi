import React from 'react';
import { Layout, ProductCard } from '../../components/';
import {
  Link
} from 'react-router-dom';
import mockData from '../../data/jsonData.json';
import './products.css';

const Products = ({ links, match, location }) => (
    <Layout showHeaderButton={true}>
        <div className="product-list">
            {mockData.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                <ProductCard key={`product-${id}-${index}`} className="product-card" 
                style={{ backgroundImage: `url(${imageUrl})` }}>
                    <Link to={`${match.url}/${id}`} className="product-wrapping-link">
                        <div className="product-top-title">
                            <p className="product-title">{name}</p>
                            <p className="product-price">{price}</p>
                        </div>
                        <p className="product-bottom-desc">{shortDesc}</p>
                    </Link>
                </ProductCard>
            ))
            }
        </div>
    </Layout>
);

export default Products;
