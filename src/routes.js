import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import User from './components/User'
import AdPage from './components/AdPage'
import AdvtsPage from './components/AdvtsPage'
import NotFound from './components/NotFound'
import requireAuthentication from './containers/AuthenticatedComponent'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={AdPage} />
    <Route path='/edit' component={requireAuthentication(User)} />
      <Route path='/:_id' component={AdvtsPage} />
      <Route path='/edit/:_id' component={requireAuthentication(User)} />
      </Route>
    <Route path='*' component={NotFound} />
  </div>
)
