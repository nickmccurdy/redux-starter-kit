import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@acemarke/redux-starter-kit'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'

const store = configureStore({ reducer })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
