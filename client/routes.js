import {Route, Switch} from "react-router-dom"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="" exact>

                </Route>
            </Switch>

        )
    }
    return (
        <div>

        </div>
    )
}