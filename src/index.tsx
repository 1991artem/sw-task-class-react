import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './index.css';
import App from './App';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
);
