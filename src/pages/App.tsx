import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import GeneralLayout from '../layouts/general-layout'
import Experience from './experience'

const App = () => (
  <HashRouter>
    <GeneralLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
      </Switch>
    </GeneralLayout>
  </HashRouter>
)

export default App
