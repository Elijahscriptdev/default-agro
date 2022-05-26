import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { ToastContainer as DefaultToastContainer } from "react-toastify";
import { theme, ThemeProvider } from "./context/ThemeProvider";

import ErrorBoundary from "./components/ErrorBoundary";

import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import Configurations from "./layout/Configurations";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import ManageUsers from "./pages/UserManagement/ManageUsers/ManageUsers";

// window.__react_toast_provider = React.createRef();
// create a default container so we can override the styles
const ToastContainer = (props) => (
  <DefaultToastContainer style={{ zIndex: "1900" }} {...props} />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Configurations />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
            <Route path="test/123" element={<Test />} />
            <Route path="/manage-users" element={<ManageUsers />} />
          </Switch>
        </Router>
        <ToastContainer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
