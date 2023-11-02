import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-bzqgl3ggb31qg4vd.us.auth0.com"
    clientId="qqYWQiJe1gfCgXVvrJenAX7BW2ntyqIO"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    audience= "http://localhost:8000"
    scope="openid profile email"
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
