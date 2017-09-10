import React from 'react';
import { 
    Header,
    Body
} from '../components'


import classNames from 'classnames';
import authService from '../services/authenticationService';
import storeData from '../services/storeData';
import T from 'i18n-react';
import heb from '../translations/heb.json';
import en from '../translations/en.json';
     
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: false,            
            isEnLanguage: localStorage.lang !== 'he'
        }
        T.setTexts(localStorage.lang === 'he' ? heb:en);
    }
 
  open = () =>  {
    this.setState({
      menuState: true
    })
  }

  switchLanguage = () =>{
      if(this.state.isEnLanguage){ 
          T.setTexts(heb);         
          this.setState({ isEnLanguage: false});
          localStorage.setItem("lang", "he");
      }
      else{    
          T.setTexts(en);      
          this.setState({ isEnLanguage: true});
          localStorage.setItem("lang", "en");
      }
  }

  close = (e) => {
    if (this.state.menuState) {
      this.setState({
        menuState: false
      })
    } 
  }

  render() { 
    const {         
        open, 
        close, 
        switchLanguage,
        state: { menuState }, 
        props: { 
            className,
            children,
            subHeader,
            showHeaderButton          
        }
    } = this;
    const headerButton = authService.isLogedIn ?         
        {   
            name: {key: 'Cart', nItems: storeData.getItemCount()},
            path: '/cart'
        }
        :
        {   
            name: {key: 'LogIn'},
            path: '/login'
        };
    return (
        <div className={classNames(["App", className ])} onClick={() => close()}>    
            <Header showHeaderButton={showHeaderButton} headerButton={headerButton} menuConfig={{ menuState, open, switchLanguage }} >
                {subHeader}
            </Header>
            <Body>
                { children }
            </Body>              
        </div>
    )
  }
}