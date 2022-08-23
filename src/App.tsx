import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import useStore from "./app/auth/store/authStore";
import { Fallback } from "./components/Fallback";
import SuspenseFallback from "./components/SuspenseFallback";
import Can from "./utils/rbac/Can";
import "./App.css";

const LazyLogin = React.lazy(() => import("./app/auth/pages/Login"));
const LazyForgotPassword = React.lazy(
  () => import("./app/auth/pages/ForgotPassword")
);
const LazyResetPassword = React.lazy(
  () => import("./app/auth/pages/ResetPassword")
);
const LazyChangePassword = React.lazy(
  () => import("./app/profile/pages/ChangePassword")
);
const LazyDashboard = React.lazy(
  () => import("./app/dashboard/pages/Dashboard")
);
const LazyProfile = React.lazy(() => import("./app/profile/pages"));
const LazyDeveloper = React.lazy(
  () => import("./app/settings/pages/Developer")
);
const LazyConfiguration = React.lazy(
  () => import("./app/settings/pages/Configuration")
);
const LazyUsers = React.lazy(() => import("./app/users/pages/Users"));
const LazyAddUsers = React.lazy(() => import("./app/users/pages/AddUsers"));
const LazyEditUsers = React.lazy(() => import("./app/users/pages/EditUsers"));
const LazyTenants = React.lazy(() => import("./app/tenants/pages/Tenants"));
const LazyAddTenant = React.lazy(() => import("./app/tenants/pages/AddTenant"));
const LazyEditTenant = React.lazy(
  () => import("./app/tenants/pages/EditTenant")
);

const LazyVerification = React.lazy(() => import("./app/verification/pages/VerificationList"));
const LazyVerificationDetails = React.lazy(() => import("./app/verification/pages/VerificationDetails"))

function App() {
  const user = useStore((state) => state.user);

  type RouteProps = {
    children: React.ReactNode;
    exact: boolean;
    path: string;
  };

  type CanVisitProps = {
    action: string;
    children: React.ReactElement;
  };

  const CanVisitPage = (props: CanVisitProps) => {
    const { action, children } = props;
    return (
      <Can
        role={user.role}
        perform={action}
        yes={() => children}
        no={() => (
          <Redirect
            to={{
              pathname: "/unauthorized",
            }}
          />
        )}
      />
    );
  };

  const PrivateRoute = (props: RouteProps) => {
    const { children, ...rest } = props;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          Object.keys(user).length ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  const UnAuthRoute = (props: RouteProps) => {
    const { children, ...rest } = props;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !Object.keys(user).length ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  const errorHandler = (error: Error, errorInfo: React.ErrorInfo) => {
    console.log(error, errorInfo);
  };

  return (
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <React.Suspense fallback={<SuspenseFallback />}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/login' />
              </Route>

              <UnAuthRoute exact path='/login'>
                <LazyLogin />
              </UnAuthRoute>

              <Route exact path='/forgot-password'>
                <LazyForgotPassword />
              </Route>

              <Route exact path='/reset-password/:token'>
                <LazyResetPassword />
              </Route>

              <PrivateRoute exact path='/change-password'>
                <LazyChangePassword />
              </PrivateRoute>

              <PrivateRoute exact path='/dashboard'>
                <CanVisitPage action='dashboard:visit'>
                  <LazyDashboard />
                </CanVisitPage>
              </PrivateRoute>

              <PrivateRoute exact path='/users'>
                <CanVisitPage action='users:visit'>
                  <LazyUsers />
                </CanVisitPage>
              </PrivateRoute>

              <PrivateRoute exact path='/user/add'>
                <LazyAddUsers />
              </PrivateRoute>

              <PrivateRoute exact path='/user/edit/:id'>
                <LazyEditUsers />
              </PrivateRoute>

              <PrivateRoute exact path='/tenants'>
                <CanVisitPage action='tenants:visit'>
                  <LazyTenants />
                </CanVisitPage>
              </PrivateRoute>

              <PrivateRoute exact path='/tenant/add'>
                <LazyAddTenant />
              </PrivateRoute>

              <PrivateRoute exact path='/tenant/edit/:id'>
                <LazyEditTenant />
              </PrivateRoute>

              <PrivateRoute exact path='/profile'>
                <LazyProfile />
              </PrivateRoute>

              <PrivateRoute exact path='/settings/developer'>
                <CanVisitPage action='settings:developer'>
                  <LazyDeveloper />
                </CanVisitPage>
              </PrivateRoute>

              <PrivateRoute exact path='/settings/configuration'>
                <CanVisitPage action='settings:configuration'>
                  <LazyConfiguration />
                </CanVisitPage>
              </PrivateRoute>

              <PrivateRoute exact path='/verification'>
                <CanVisitPage action='verification:visit'>
                  <LazyVerification />
                </CanVisitPage>
              </PrivateRoute>

              <PrivateRoute exact path='/verification/:id'>
                <CanVisitPage action='verification:details'>
                  <LazyVerificationDetails />
                </CanVisitPage>
              </PrivateRoute>

              <Route exact path='/unauthorized'>
                <p>You are not allowed to access this page</p>
              </Route>
            </Switch>
          </Router>
        </React.Suspense>
      </ErrorBoundary>
  );
}

export default App;
