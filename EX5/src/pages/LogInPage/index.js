import React, { Component } from 'react';
import {
    Layout,
    SingleInput,
    SubHeader
} from '../../components/';
import authService from '../../services/authenticationService';
import { withRouter } from 'react-router-dom';
import './logInPage.css';

class LogInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hideClass: 'hidden'
        }
    }
    handleAuthenticate(e){        
        e.preventDefault();                  
        if(authService.authenticateUser(this.state.email, this.state.password)){       
            this.props.history.goBack();
        } 
        else{
            this.setState({hideClass: ''});
        }   
        return false;                               
    }

    clearErrorMessage(){
        this.setState({hideClass: 'hidden'});
    }

    handleEmailChange(e) {
        this.clearErrorMessage();
        this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
        this.clearErrorMessage();
        this.setState({ password: e.target.value });
    }

    render() {   
        return (
            <Layout subHeader={<SubHeader>Login Page</SubHeader>}>  
                <div className="main-container">
                    <div className="inner-container col-md-4 col-md-offset-4">
                    <form action="" onSubmit={this.handleAuthenticate.bind(this)}>                        
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <SingleInput required={'true'} inputType={'text'} content={this.state.email} placeholder={'email'}
                                 className={'form-control'} id={'email'} controlFunc={this.handleEmailChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <SingleInput required={'true'} inputType={'password'} content={this.state.password} placeholder={'password'}
                                 className={'form-control'} id={'password'} controlFunc={this.handlePasswordChange.bind(this)} />
                        </div>
                        <span className={`label label-danger ${this.state.hideClass}`}>The email address or password you entered is not valid</span>
                        <button type="submit" className="btn-change btn btn-primary login-button">Submit</button>                    
                    </form>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withRouter(LogInPage);
