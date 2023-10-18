import "../../home.css";
import { FaUserCircle } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineExport } from "react-icons/ai";

function Profile() {
  return (
    <div className="wd-flex-row-container">
      <div className="wd-profile-screen">
        <div>
          <FaUserCircle className="wd-profile-icon" />
          <h1>Liang Jimenez</h1>
          <h2>Contact</h2>
          <p>
            No registered services, you can add some on the
            <a href="#">settings</a>
          </p>
          <h2>Biography</h2>
          <p>Student, CS and Psych major</p>
          <h2>Links</h2>
          <AiOutlineLink />
          <a href="https://youtu.be/9XsRrm-VKj4?si=XgJS1gaEWHTbrSh3">
            YouTube <AiOutlineExport />
          </a>
        </div>
      </div>
      <div>
        <a href="edit.html">
          <button className="btn btn-light float-end">
            {" "}
            <BsPencilSquare />
            Edit Profile
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
