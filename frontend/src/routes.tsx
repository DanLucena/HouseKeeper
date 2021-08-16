import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { isAuthenticated } from './services/auth';


const LogedRoutes = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);


export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);