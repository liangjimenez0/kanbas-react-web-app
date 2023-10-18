import ModuleList from "../Modules/ModuleList";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiBan } from "react-icons/hi";
import { AiFillFile } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCompass } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";

function Home() {
  return (
    <div className="container-home-courses">
      <div className="content-when-mobile-menu-active">
        <div class="d-block d-md-none wd-bg-color-black menu-when-screen-small">
          <div class="wd-flex-row-container justify-content-between align-items-center">
            <div>
              <a href="kanbas-navigation.html">
                <i class="fa fa-bars wd-text-color-white"></i>
              </a>
            </div>

            <div class="center-on-menu">
              <p>CS4550.12631.202410</p>
              <p>Modules</p>
            </div>
          </div>
        </div>

        <ModuleList />
      </div>
      <div class="course-status d-none d-xl-block">
        <h5>Course Status</h5>

        <div class="top-buttons">
          <button type="button" class="btn btn-light">
            <HiBan className="button-home-page" />
            Unpublish
          </button>
          <button type="button" class="btn btn-success">
            <BsCheckCircleFill className="button-home-page" /> Published
          </button>
          <br />
        </div>

        <a href="#">
          <button type="button" class="btn btn-light">
            <AiFillFile className="button-home-page" />
            Import Existing Content
          </button>
        </a>
        <br />
        <a href="#">
          <button type="button" class="btn btn-light">
            <BsFillArrowRightCircleFill className="button-home-page" />
            Import From Commons
          </button>
        </a>
        <br />
        <a href="#">
          <button type="button" class="btn btn-light">
            <AiFillCompass className="button-home-page" />
            Choose Home Page
          </button>
        </a>
        <br />
        <a href="#">
          <button type="button" class="btn btn-light">
            <BsFillFileBarGraphFill className="button-home-page" />
            View Course Stream
          </button>
        </a>
        <br />
        <a href="#">
          <button type="button" class="btn btn-light">
            <BsFillMegaphoneFill className="button-home-page" />
            New Announcement
          </button>
        </a>
        <br />
        <a href="#">
          <button type="button" class="btn btn-light">
            <BsFillFileBarGraphFill className="button-home-page" />
            New Analytics
          </button>
        </a>
        <br />
        <a href="#">
          <button type="button" class="btn btn-light">
            <AiFillBell className="button-home-page" />
            View Course Notifications
          </button>
        </a>
        <br />

        <h6>To Do</h6>
        <hr />

        <div class="home-coming-up">
          <li>
            <div class="wd-flex-row-container">
              <BsCheckCircleFill class=" color-red home-icons" />
              <div>
                <a href="#">Grade A1 - ENV + HTML</a>
                <p>100 points • Sep 18 at 11:59pm</p>
              </div>
            </div>
          </li>
        </div>

        <div class="wd-flex-row-container view-calendar">
          <h6>Coming Up</h6>

          <div class="float-end">
            <AiFillCalendar />

            <a href="#"> View Calendar</a>
          </div>
        </div>
        <hr />

        <div class="home-coming-up">
          <li>
            <div class="wd-flex-row-container">
              <AiFillCalendar className="home-icons" />
              <div>
                <a href="#">Lecture</a>
                <p>
                  CS4550.12631.202410
                  <br />
                  Sep 7 at 11:45am
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="wd-flex-row-container">
              <AiFillCalendar className="home-icons" />
              <div>
                <a href="#">Lecture</a>
                <p>
                  CS4550.12631.202410 <br />
                  Sep 7 at 11:45am
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="wd-flex-row-container">
              <AiFillCalendar className="home-icons" />
              <div>
                <a href="#">Lecture</a>
                <p>
                  CS4550.12631.202410 <br />
                  Sep 7 at 11:45am
                </p>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}
export default Home;
