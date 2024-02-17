import { Outlet } from "react-router-dom";
import { ProfileMenu } from "../../components/ProfileMenu";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
            <ProfileMenu />
            <Outlet />
    </div>
  )
}
