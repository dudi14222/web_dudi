import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './sideBar.css';

class SideBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="col-md-2 sidenav text-center">
                <div className="parent-side-SideBar">
                    <div className="row">
                        <div className="logo-brand">
                            <img className="logo" src="/images/logo.jpg" style={{ width: '100px', height: '100px' }} />
                        </div>
                    </div>

                    <ul className="nav nav-pills nav-stacked">
                        <li className="active"></li>
                        <a><li onClick={() => { this.props.navigateContent('images') }}><h4>Portfolio</h4></li></a>
                        <a><li onClick={() => { this.props.navigateContent('openModal') }}><h4>Add Portfolio</h4></li></a>
                        <a><li onClick={() => { this.props.navigateContent('about') }}><h4>About</h4></li></a>
                    </ul>
                    <div className="social-media">
                        <ul className="list-inline">
                            <li><a target="_blank" href="https://www.facebook.com/dudi.hamdi" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a target="_blank" href="https://twitter.com/?lang=en" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://plus.google.com/discover?hl=iw" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

SideBar.propTypes = {
    navigateContent: PropTypes.func.isRequired
};

export default SideBar;