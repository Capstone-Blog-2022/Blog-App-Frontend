import React from "react";
import Navbar from "./navbar";
import "./profilepage.css"

function ProfilePage(props) {
    return (
        <div>
            <Navbar />

            <div>
                <h1 className="username">{props.username}</h1>

            </div>
            <div>
                <image>{props.image}</image>
                    <p>Change Profile Pic</p>
            </div>
            <footer>
                <ul>
                    <li>Sign Out</li>
                    <li>Delete Account</li>
                </ul>
            </footer>
        </div>
    )
}

export default ProfilePage;