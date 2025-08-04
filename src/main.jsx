import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './reduxToolkit/Store.jsx'
import ContextProject from './contextAPI/FilterName.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <ContextProject>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextProject>
    </Provider>
  </StrictMode>,
)
