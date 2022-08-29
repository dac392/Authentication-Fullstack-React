import React, { useContext } from "react";
import { Context } from "../Context";

export default () => {
    const { authUser } = useContext(Context);
    return (
        <div className="bounds">
            <div className="grid-100">
                <h1>{authUser.name} is authenticated!</h1>
                <p>Your username is {authUser.username}</p>
            </div>
        </div>
    );
}