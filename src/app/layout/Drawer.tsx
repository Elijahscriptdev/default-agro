import { useHistory, useLocation } from "react-router-dom";
import Can from "../../utils/rbac/Can";
import useStore from "../auth/store/authStore";

type MenuItemProps = {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

const primaryActivePathStyle = "bg-green-50 border-r-2 border-green-700";
const primaryActivePathTextStyle = "text-green-700";

const Drawer = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const user = useStore((state) => state.user);

  const MenuItem = (props: MenuItemProps) => {
    const { text, isActive, onClick: action } = props;
    return (
      <div
        className={`py-2 ${isActive && primaryActivePathStyle
          } my-2 cursor-pointer`}
        onClick={action}
      >
        <p
          className={`px-4 ${isActive ? primaryActivePathTextStyle : "text-grey-700"
            }`}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className='min-h-screen top-0 left-0 right-0 sticky w-1/5 hidden md:block border'>
      <div className='pt-16'>
        <Can
          role={user.role}
          perform='dashboard:visit'
          yes={() => (
            <MenuItem
              text='Dashboard'
              isActive={pathname === "/dashboard"}
              onClick={() => history.push("/dashboard")}
            />
          )}
          no={() => null}
        />
        <Can
          role={user.role}
          perform='users:visit'
          yes={() => (
            <MenuItem
              text='Users'
              isActive={pathname === "/users"}
              onClick={() => history.push("/users")}
            />
          )}
          no={() => null}
        />

        <Can
          role={user.role}
          perform='tenants:visit'
          yes={() => (
            <MenuItem
              text='Tenants'
              isActive={pathname === "/tenants"}
              onClick={() => history.push("/tenants")}
            />
          )}
          no={() => null}
        />
        <Can
          role={user.role}
          perform='settings:developer'
          yes={() => (
            <MenuItem
              text='Developer'
              isActive={pathname === "/settings/developer"}
              onClick={() => history.push("/settings/developer")}
            />
          )}
          no={() => null}
        />
        <Can
          role={user.role}
          perform='settings:configuration'
          yes={() => (
            <MenuItem
              text='Configuration'
              isActive={pathname === "/settings/configuration"}
              onClick={() => history.push("/settings/configuration")}
            />
          )}
          no={() => null}
        />
        <Can
          role={user.role}
          perform='verification:visit'
          yes={() => (
            <MenuItem
              text='Verification'
              isActive={pathname === "/verification"}
              onClick={() => history.push("/verification")}
            />
          )}
          no={() => null}
        />
        
      </div>
    </div>
  );
};

export default Drawer;
