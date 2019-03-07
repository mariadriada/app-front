import React, { Component } from 'react';

import logo from './logo.svg';
import Menu from './Components/Menu/Menu'
import './App.scss';



class App extends Component {

  constructor(props) {
    super()
    this.state = {
      component: <h3>Default</h3>
    }
  }

  onChangePage(newComponent){
    console.log('conchangepage')
    this.setState({
      component: newComponent
    })
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <header className="App-header">
            <Menu changePage={this.onChangePage.bind(this)}></Menu>
          </header>        
          <section className="dinamic-content">
            { this.state.component }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
