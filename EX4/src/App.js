import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sideBar/sideBar'
import MainContent from './components/mainContent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: 'images'
    }
  }

  setMainContent(_mainContent){
    this.setState({ mainContent: _mainContent });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row content">
          <SideBar navigateContent={this.setMainContent.bind(this)}/>
          <MainContent navigateContent={this.setMainContent.bind(this)} mainContent={this.state.mainContent} showModal={this.state.mainContent === 'openModal'} />
        </div>
      </div>
    );
  }
}

export default App;
