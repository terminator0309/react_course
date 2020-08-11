import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/Main.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore.js'

const store = ConfigureStore();

class App extends Component{
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <Provider store={store}>
      <BrowserRouter>  
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
