import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import App from './App';

const client = new ApolloClient({
  uri: "https://api.8base.com/ckgaj0d8o00ey08jnd1mzcwzm"
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


