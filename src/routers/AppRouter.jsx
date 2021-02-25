import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../componants/Header'
import HelpPage from '../componants/HelpPage'
import NotFound from '../componants/404'
import EditExpensePage from '../componants/EditExpensePage'
import AddExpensePage from '../componants/AddExpensePage'
import Dashboard from '../componants/Dashboard'
import Reducers from '../componants/reducers'



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Reducers />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter

