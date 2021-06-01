import * as React from 'react'
import { Provider } from 'react-redux'

import AppNavigator from './src/navigation/app-navigation'
import store from './src/redux/store/store.redux'

function App () {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
