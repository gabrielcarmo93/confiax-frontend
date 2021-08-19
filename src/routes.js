import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import InsertPage from './pages/Insert'
import ListPage from './pages/List'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
        <Route path={'/insert'} exact>
          <InsertPage />
        </Route>
        <Route path={'/list'} exact>
          <ListPage />
        </Route>
      </Switch>
    </Router>
  )
}