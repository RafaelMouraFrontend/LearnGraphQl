import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="container">
            <img 
              src={logo} 
              alt="SpaceX" 
              style={{width: 200, display: 'block', margin: '30px auto 0'}} 
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
