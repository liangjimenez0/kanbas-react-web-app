import { Link, useLocation } from "react-router-dom";
import "../home.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsInboxFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { HiDesktopComputer } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiSolidUserCircle className="wd-icon-account" />,
    Dashboard: <AiFillDashboard className="wd-icon" />,
    Courses: <BiBook className="wd-icon" />,
    Calendar: <BsFillCalendarFill className="wd-icon" />,
    Inbox: <BsInboxFill className="wd-icon" />,
    History: <AiFillClockCircle className="wd-icon" />,
    Studio: <HiDesktopComputer className="wd-icon" />,
    Commons: <AiOutlineArrowRight className="wd-icon" />,
    Help: <AiFillQuestionCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
