import React from "react";
import {
  ChartNoAxesCombined,
  House,
  MonitorCheck,
  Settings,
  BadgeQuestionMark,
  BellRing,
  Search 
} from "lucide-react";
import profileicon from "./assets/profileicon.png";
import Cards from "./components/Cards.jsx";
import reactImg from "./assets/react.png";
import nodeImg from "./assets/node.jpg";
import expressImg from "./assets/express.png";
import Progress from "./components/Progress.jsx";
import Quizzes from "./components/Quizzes.jsx";


function App() {
  return (
    <div className="flex flex-row">
      <div className="bg-blue-950 min-h-screen w-80 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl text-white pt-4 pl-2 text-center ">
            <b>E-Learning </b>
            <br />
            <b className="text-green-300 text-2xl">Dashboard</b>
          </h1>
          <p className="text-white flex flex-row justify-center mt-10 hover:bg-amber-900 cursor-pointer rounded-2xl p-2">
            <House />
            &nbsp;&nbsp;&nbsp;&nbsp;<b>Home</b>
          </p>
          <p className="text-white flex flex-row justify-center mt-10 hover:bg-amber-900 cursor-pointer rounded-2xl p-2">
            <MonitorCheck />
            &nbsp;&nbsp;&nbsp;&nbsp;<b>My Courses</b>
          </p>
          <p className="text-white flex flex-row justify-center mt-10 hover:bg-amber-900 cursor-pointer rounded-2xl p-2">
            <ChartNoAxesCombined />
            &nbsp;&nbsp;&nbsp;&nbsp;<b>Progress</b>
          </p>
          <p className="text-white flex flex-row justify-center mt-10 hover:bg-amber-900 cursor-pointer rounded-2xl p-2">
            <BadgeQuestionMark />
            &nbsp;&nbsp;&nbsp;&nbsp;<b>Quizzes</b>
          </p>
          <p className="text-white flex flex-row justify-center mt-10 hover:bg-amber-900 cursor-pointer rounded-2xl p-2">
            <Settings />
            &nbsp;&nbsp;&nbsp;&nbsp;<b>Setting</b>
          </p>
        </div>
        <div className="flex flex-row ml-14 pt-8 mb-10 pb-8 ">
          <img
            src={profileicon}
            alt="profile"
            className="rounded-full bg-blue-950 h-18 w-18"
          />
          <div className="flex flex-col text-white text-xl pl-2">
            <h3>
              <b>Arya Jain</b>
            </h3>
            <h3>Student</h3>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 min-h-screen w-full">
        <div className="flex flex-row justify-between">
            <div>
                <h1 className="font-bold text-3xl pl-2 pt-2">Welcome Arya!👍</h1>
                <p className=" text-xl pl-2 pt-2">Continue your learning journey</p>
            </div>
            <div className="flex flex-row justify-around">
             <Search className="rounded-full h-8 w-8  mt-11" /><input  type="text" placeholder="Search courses....." className="bg-white rounded-full w-80 h-10 p-2 border-2 border-gray-400 mr-20 mt-10"/>
             <BellRing className="rounded-full h-8 w-8 mr-10 mt-10" />
             <img src={profileicon} alt="profile" className="rounded-full h-12 w-12 mr-10 mt-8"/>
             </div>
        </div>
        <div className="flex flex-row justify-between mt-10">
          <p className="pl-2 pt-2 font-bold text-[20px]">My Courses</p>
          <button className="bg-white py-1 px-4 border-2 border-gray-600 rounded-lg mr-10">View All</button>
        </div>

        <div className="flex flex-row justify-around mt-6">
          <Cards imgUrl={reactImg} name="React Js Basics" status="80%" btn="Continue" progress="" variant="primary" bgvariant="upcoming"/>
          <Cards imgUrl={nodeImg} name="Node Js Basics" status="pending" btn="Start" progress="" variant="secondary" bgvariant="new"/>
          <Cards imgUrl={expressImg} name="Express Js Basics" status="completed" btn="Review" progress="" variant="tertiary" bgvariant="old"/>
        </div>

      <div className="flex flex-row justify-around mt-10">
        <Progress/>
        <Quizzes/>
      </div>
      </div>
     
    </div>
  );
}

export default App;
