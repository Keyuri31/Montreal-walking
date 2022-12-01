import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN
console.log(domain)
const clientId = process.env.REACT_APP_AUTH0_CLIENTID

root.render(
  // <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    // domain="dev-yvsbi282ksqaopcu.us.auth0.com"
    // clientId="SWDOCwBHPOiL76XCemj5ghE65yLCjZdJ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  // </React.StrictMode>
);
