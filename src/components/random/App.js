import "bulma/css/bulma.css";
import "./App.css";
import Course from "../../Course";
import { useState } from "react";

function getRandomCourse() {
  const courseArray = [
    {
      name: "Angular",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi quam aliquid magnam incidunt? Aliquam ipsam veniam obcaecati nisi labore optio modi? Fuga at dicta incidunt voluptas quidem beatae vitae.",
    },
    {
      name: "Bootstrap",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi quam aliquid magnam incidunt? Aliquam ipsam veniam obcaecati nisi labore optio modi? Fuga at dicta incidunt voluptas quidem beatae vitae.",
    },
    {
      name: "Csharp",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi quam aliquid magnam incidunt? Aliquam ipsam veniam obcaecati nisi labore optio modi? Fuga at dicta incidunt voluptas quidem beatae vitae.",
    },
    {
      name: "Komple Web",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi quam aliquid magnam incidunt? Aliquam ipsam veniam obcaecati nisi labore optio modi? Fuga at dicta incidunt voluptas quidem beatae vitae.",
    },
  ];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="cards" style={{
    }}>

      <section className="section">
        <button className="appButton" onClick={handleClick}>
          Rastgele Ekle!
        </button>
      </section>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
