import { useState } from "react"
import Drawer from "../../layout/Drawer"
import ChangePassword from "./ChangePassword"
import EditProfile from "./EditProfile"

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="flex flex-row">
            <Drawer />
            <div className="flex flex-row w-4/5 flex-grow">
                <div className="h-screen bg-red-200 w-1/2 hidden md:block">
                    jdfk
                </div>
                <div className="md:w-1/2 w-full md:px-8 p-2">

                    <div className="p-4 w-full bg-green-500 rounded-lg mb-8 flex flex-row items-center">
                        <div
                            onClick={() => setSelectedTab(0)}
                            className={`p-2 mx-2 cursor-pointer ${selectedTab === 0 ? 'bg-white' : 'bg-transparent'} text-center rounded-md`}>
                            <p >Edit Profile</p>
                        </div>
                        <div
                            onClick={() => setSelectedTab(1)}
                            className={`p-2 mx-2 cursor-pointer ${selectedTab === 1 ? 'bg-white' : 'bg-transparent'} text-center rounded-md`}>

                            <p>Change Password</p>
                        </div>
                    </div>
                    {selectedTab === 0 && <EditProfile />}
                    {selectedTab === 1 && <ChangePassword />}
                </div>
            </div>
        </div>

    )


}

export default Profile