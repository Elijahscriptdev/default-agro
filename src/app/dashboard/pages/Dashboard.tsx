import { Link } from "react-router-dom";
import Drawer from "../../layout/Drawer";

const Dashboard = () => {
    return (
        <div className="flex flex-row">
            <Drawer />
            <div className="flex flex-row w-4/5 flex-grow">
                <Link to="/profile">Update Profile</Link>
            </div>
        </div>
    )
}

export default Dashboard;