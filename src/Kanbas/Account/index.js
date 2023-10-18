import React from "react";
import "../home.css"; // Import your CSS file
import AccountNavigation from "./AccountNavigation";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Profile from "./Profile";

function Account() {
  return (
    <div className="wd-flex-row-container">
      <div>
        <div className="wd-header-profile">
          <p>
            <i className="fa fa-bars"></i> Liang Jimenez's Profile
          </p>
          <hr />
        </div>

        <div className="wd-flex-row-container">
          <AccountNavigation />
          <div>
            <div
              className="overflow-y-scroll position-fixed bottom-0 end-0"
              style={{
                left: "320px",
                top: "50px",
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="Profile" />} />
                <Route path="Profile" element={<Profile />} />
                {/* <Route
                  path="Assignments/:assignmentId"
                  element={<ProfileEditor />}
                /> */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
