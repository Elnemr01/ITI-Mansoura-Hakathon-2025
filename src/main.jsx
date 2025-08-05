import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import FilterName from './contextAPI/FilterName.jsx'
import { Provider } from 'react-redux'
import { store } from './reduxToolKit/Store.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <FilterName>
        <App />
      </FilterName>
    </Provider>
  </BrowserRouter>
)
