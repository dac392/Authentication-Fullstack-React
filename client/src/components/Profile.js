import React, { useContext } from "react";
import { Context } from "../Context";

const Profile = ()=>{
    const { authUser } = useContext(Context);

    return (
        <div className="bounds">
            <div className="grid-100">
                <h1>Profile</h1>
                <ul className="profile" data-header="-Information-">
                    <li>name: {authUser.name}</li>
                    <li>username: {authUser.username}</li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;