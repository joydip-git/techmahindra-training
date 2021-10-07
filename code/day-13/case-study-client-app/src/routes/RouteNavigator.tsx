import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { appRoutes } from './app-routes'

const RouteNavigator = () => {
    return (
        <Switch>
            {
                appRoutes.map(r => {
                    return <Route key={r.routeId} path={r.routePath} component={r.component} exact />
                })
            }
        </Switch>
    )
}

export default RouteNavigator
