import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div id="education" className="text-center my-5">
        <h1 className="text-4xl font-Poppins font-bold">Education</h1>
        <p className="font-Poppins mt-2 max-sm:w-[80%] px-3 mx-auto max-sm:text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
      </div>
      <VerticalTimeline className="mt-5" lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "#fff",
            border: "2px solid#854ce6",
            color: "#b1b2b3",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-Poppins font-bold">
            Vellore Institute of Technology, Bhopal
          </h3>
          <h4 className="vertical-timeline-element-subtitle mt-2 font-Poppins font-medium ">
            MCA - Master of Computer Application
          </h4>
          <h6 className="vertical-timeline-element-subtitle font-Poppins font-medium ">
            Grade : 7.2 CGPA
          </h6>
          <p className="font-Poppins font-medium ">
            I am currently pursuing a Master's degree in Computer Application
            and Engineering at Vellore Institue of Technology, Bhopal. I have
            completed 1 semesters and have a CGPA of 0.00. I have taken courses
            in Data Structures, Algorithms, Object-Oriented Programming,
            Database Management Systems, Operating Systems, and Computer
            Networks, among others.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            border: "2px solid#854ce6",
            color: "#b1b2b3",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-Poppins font-bold">
            Institute of Management Studies, Noida
          </h3>
          <h4 className="vertical-timeline-element-subtitle mt-2 font-Poppins font-medium">
            BCA - Bachelor of Computer Application{" "}
          </h4>
          <h6 className="vertical-timeline-element-subtitle font-Poppins font-medium">
            Grade : 7.25 CGPA
          </h6>
          <p className="font-medium font-Poppins">
            I was completed my a Bachlor's degree in Computer Application and
            Engineering at Institue of Managemenr Studies, Noida. I have
            completed 6 semesters and have a CGPA of 7.25 CGPA.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            border: "2px solid#854ce6",
            color: "#b1b2b3",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold font-Poppins text-2xl">
            Sony Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle mt-2 font-medium font-Poppins">
            12th
          </h4>
          <h6 className="vertical-timeline-element-subtitle font-medium font-Poppins">
            Grade : 7.2 CGPA
          </h6>
          <p className="font-medium font-Poppins">
            I completed my class 12 high school education at Sony Academy,
            Bharatpur, where I studied Commerce with Computer Science.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Education;
