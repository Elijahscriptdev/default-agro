import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  // Redirect
} from "react-router-dom";

import { ToastContainer as DefaultToastContainer } from "react-toastify";

// Import Contexts
import { theme, ThemeProvider } from "./context/ThemeProvider";

// Import Utility Components
// import Can from "./utils/rbac/Can";
import SuspenseFallback from "./components/SuspenseFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/UnknownPage";

// Other assets
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

// Import Pages
import Dashboard from "./pages/Dashboard";
import MiniDrawer from "./components/MiniDrawer";
import Configuration from "./layouts/Settings/Configuration";
import VegetationCheck from "./layouts/Vegetation/VegetationCheck";
import VegetationCheckDetail from "./layouts/Vegetation/ViewMore";

// Import Layout Components for Pages
const DashboardIndexSection = React.lazy(() =>
  import("./layouts/dashboard/Index")
);
// const Programme = React.lazy(() => import("./layouts/dashboard/Programme"));
const FarmAnalysis = React.lazy(() =>
  import("./layouts/dashboard/farmAnalysis/FarmAnalysis")
);
const Vegitation = React.lazy(() =>
  import("./layouts/Vegetation/VegetationCheck")
);
const Verification = React.lazy(() =>
  import("./layouts/Verification/Verification")
);
const VerificationList = React.lazy(() =>
  import("./layouts/Verification/ViewMore/VerificationList")
);
const FarmActivities = React.lazy(() =>
  import("./layouts/dashboard/FarmActivities/FarmActivities")
);
const AgentActivities = React.lazy(() =>
  import("./layouts/dashboard/agentActivities/AgentActivities")
);
const MapInsight = React.lazy(() =>
  import("./layouts/dashboard/mapInsight/MapInsight")
);

const Profile = React.lazy(() => import("./layouts/dashboard/Profile/Profile"));
const CropProfileSection = React.lazy(() =>
  import("./layouts/Configurations/CropProfile")
);
const CropCalendarSection = React.lazy(() =>
  import("./layouts/Configurations/CropCalendar")
);
const ManageCropCategoriesSection = React.lazy(() =>
  import("./layouts/Configurations/ManageCategories")
);
const FarmSeasonSection = React.lazy(() =>
  import("./layouts/Configurations/FarmSeasons")
);

const Users = React.lazy(() => import("./layouts/userManagement/Users"));
const AddUser = React.lazy(() => import("./layouts/userManagement/AddUser"));
const EditUser = React.lazy(() => import("./layouts/userManagement/EditUser"));

const Farmers = React.lazy(() => import("./layouts/userManagement/Farmers"));
const AddFarmer = React.lazy(() =>
  import("./layouts/userManagement/AddFarmer")
);
const EditFarmer = React.lazy(() =>
  import("./layouts/userManagement/EditFarmer")
);
const Exports = React.lazy(() => import("./layouts/userManagement/Exports"));

const SourcingAgents = React.lazy(() =>
  import("./layouts/userManagement/SourcingAgents")
);
const AddSourcingAgent = React.lazy(() =>
  import("./layouts/userManagement/AddSourcingAgent")
);

const FarmLots = React.lazy(() =>
  import("./layouts/FarmManagement/ManageFarmLots")
);

const EditFarmUnit = React.lazy(() =>
  import("./layouts/FarmManagement/EditFarmUnit")
);

const AddFarmUnit = React.lazy(() =>
  import("./layouts/FarmManagement/AddFarmUnit")
);

const FarmClusters = React.lazy(() =>
  import("./layouts/FarmManagement/ManageClusters")
);
const ViewFarmClusters = React.lazy(() =>
  import("./layouts/FarmManagement/ViewCluster")
);
const FarmSubClusters = React.lazy(() =>
  import("./layouts/FarmManagement/ManageSubClusters")
);
const ViewSubclusterLots = React.lazy(() =>
  import("./layouts/FarmManagement/ViewSubCluster")
);

const InputTracking = React.lazy(() => import("./layouts/InputTracking/Input"));
const AddTenants = React.lazy(() =>
  import("./layouts/InputTracking/AddTenants")
);
const EditTenants = React.lazy(() =>
  import("./layouts/InputTracking/EditTenants")
);

const Downloads = React.lazy(() => import("./layouts/downloads/Downloads"));

const Developer = React.lazy(() => import("./layouts/Settings/Developer"));
const configuration = React.lazy(() =>
  import("./layouts/Settings/Configuration")
);

const Collections = React.lazy(() =>
  import("./layouts/Collections/Collections")
);

const PaymentCollections = React.lazy(() =>
  import("./layouts/Payment/Collections")
);
const PaymentTransactions = React.lazy(() =>
  import("./layouts/Payment/Transactions")
);
const PaymentDisbursments = React.lazy(() =>
  import("./layouts/Payment/Disbursment")
);
const SendMoney = React.lazy(() => import("./layouts/Payment/SendMoney"));

const Login = React.lazy(() => import("./pages/Login"));

// const Test = React.lazy(() => import("./pages/Test"));

// create a default container so we can override the styles
const ToastContainer = (props) => (
  <DefaultToastContainer style={{ zIndex: "1900" }} {...props} />
);

// const CanVisitPage = (props) => {
//   const { action, children } = props;
//   return (
//     <Can
//       role={user.role}
//       perform={action}
//       yes={() => children}
//       no={() => (
//         <Redirect
//           to={{
//             pathname: "/unauthorized",
//           }}
//         />
//       )}
//     />
//   );
// };

// const PrivateRoute = (props) => {
//   const { children, ...rest } = props;
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         Object.keys(user).length ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// const UnAuthRoute = (props) => {
//   const { children, ...rest } = props;
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         !Object.keys(user).length ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/dashboard",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <React.Suspense fallback={<SuspenseFallback />}>
          <Router>
            <Switch>
              <Route exact path='/' element={<Login />} />

              {/* <Route exact path="/test" element={<Test />} /> */}

              {/* DASHBOARD */}
              <Route path='/dashboard' element={<Dashboard />}>
                {/* <Route index element={<DashboardIndexSection />} /> */}
                <Route index path='mapping-insight' element={<MapInsight />} />
                <Route
                  path='edit-profile'
                  element={<DashboardIndexSection />}
                />
                <Route path='farm-analysis' element={<FarmAnalysis />} />
                <Route path='farm-activities' element={<FarmActivities />} />
                <Route path='agent-activities' element={<AgentActivities />} />
              </Route>

              {/* PROFILE */}
              <Route path='/profile' element={<Dashboard />}>
                <Route index element={<Profile />} />
              </Route>

              {/* CONFIGURATIONS */}
              <Route path='/configurations' element={<Dashboard />}>
                <Route index element={<DashboardIndexSection />} />
                <Route path='crop-profile' element={<CropProfileSection />} />
                <Route path='crop-calendar' element={<CropCalendarSection />} />
                <Route
                  path='crop-calendar/manage-categories'
                  element={<ManageCropCategoriesSection />}
                />
                <Route path='farm-seasons' element={<FarmSeasonSection />} />
              </Route>

              {/* USER MANAGEMENT */}
              <Route path='/user-management' element={<Dashboard />}>
                <Route index element={<DashboardIndexSection />} />
                <Route path='users' element={<Users />} />
                <Route path='add-user' element={<AddUser />} />
                <Route path='edit-user/:userId' element={<EditUser />} />
                <Route path='sourcing-agents' element={<SourcingAgents />} />
                <Route
                  path='add-sourcing-agent'
                  element={<AddSourcingAgent />}
                />
                <Route path='farmers' element={<Farmers />} />
                <Route path='farmers/exports' element={<Exports />} />
                <Route path='add-farmer' element={<AddFarmer />} />
                <Route path='edit-farmer/:farmerId' element={<EditFarmer />} />
              </Route>

              {/* FARM MANAGEMENT */}
              <Route path='/farm-management' element={<Dashboard />}>
                <Route index element={<DashboardIndexSection />} />
                <Route path='farm-lots' element={<FarmLots />} />
                <Route path='add-farm-unit' element={<AddFarmUnit />} />
                <Route
                  path='edit-farm-unit/:farmId'
                  element={<EditFarmUnit />}
                />
                <Route path='clusters' element={<FarmClusters />} />
                <Route
                  path='clusters/:clusterId'
                  element={<ViewFarmClusters />}
                />
                <Route path='sub-clusters' element={<FarmSubClusters />} />
                <Route
                  path='sub-clusters/:subClusterId'
                  element={<ViewSubclusterLots />}
                />
              </Route>

              {/* INPUT TRACKING */}
              <Route path='/tenants' element={<Dashboard />}>
                <Route index element={<InputTracking />} />
                <Route path='add-tenant' element={<AddTenants />} />
                <Route path='edit-tenant' element={<EditTenants />} />
              </Route>

              {/* Downloads */}
              <Route path='/downloads' element={<Dashboard />}>
                <Route index element={<Downloads />} />
              </Route>

              {/* COMMUNICATION */}
              <Route path='/settings' element={<Dashboard />}>
                <Route index element={<DashboardIndexSection />} />
                <Route path='developer' element={<Developer />} />
                <Route path='configuration' element={<Configuration />} />
              </Route>

              {/* COLLECTIONS */}
              <Route path='/collections' element={<Dashboard />}>
                <Route index element={<Collections />} />
              </Route>
              {/* VERIFICATION */}
              <Route path='/verification' element={<Dashboard />}>
                <Route index element={<Verification />} />
                <Route path="verification-list" element={<VerificationList />} />
              </Route>
              
              {/* VEGETATION */}
              <Route path='/vegetation-check' element={<Dashboard />}>
                <Route index element={<VegetationCheck />} />
                <Route path="vegetation-check-detail" index element={<VegetationCheckDetail />} />
              </Route>


              {/* PAYMENT */}
              <Route path='/payment' element={<Dashboard />}>
                <Route index element={<DashboardIndexSection />} />
                <Route path='transactions' element={<PaymentTransactions />} />
                <Route path='collections' element={<PaymentCollections />} />
                <Route path='disbursments' element={<PaymentDisbursments />} />
                <Route path='send-money' element={<SendMoney />} />
              </Route>

              <Route path='/dashboard2' element={<MiniDrawer />} />

              <Route path='*' element={<NoPage />} />
            </Switch>
          </Router>
          <ToastContainer />
        </React.Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
