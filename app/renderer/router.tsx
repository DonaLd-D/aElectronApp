import React from 'react'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'
import Root from './container/root'
import Resume from './container/resume'

function Router(){
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Root></Root>
        </Route>
        <Route path="/resume" exact>
          <Resume></Resume>
        </Route>
      </Switch>
      <Redirect to="/"></Redirect>
    </HashRouter>
  )
}

export default Router