import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import TopBar from 'components/Topbar'
import Routes from 'routes'

const App = () => {
   return (
      <Provider store={store}>
         <Router>
            <TopBar />
            <Routes />
         </Router>
      </Provider>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))