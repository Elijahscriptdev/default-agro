import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AppReducer from "./AppReducer";
import DashboardReducer from './DashboardReducer';
import UserManagementReducer from './UserManagementReducer';
import FarmMangementReducer from './FarmManagementReducer';
import ConfigReducer from './ConfigurationsReducer';
import CollectionsReducer from "./CollectionsReducer";
import InputReducer from "./InputReducer";
import TenantReducer from "./TenantReducer";
import PaymentReducer from "./PaymentReducer";

export default combineReducers({
  AuthReducer,
  AppReducer,
  DashboardReducer,
  UserManagementReducer,
  FarmMangementReducer,
  ConfigReducer,
  CollectionsReducer,
  InputReducer,
  TenantReducer,
  PaymentReducer
});
