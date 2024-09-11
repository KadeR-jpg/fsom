const Header = ({ course }) => {
  console.log(course);
  return (
    <header>
      <h1>{course}</h1>
    </header>
  );
};
const Part = ({ name, section }) => {
  return (
    <p>
      {name} {section}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <section>
      <Part name={parts[0]["name"]} section={parts[0]["exercises"]} />
      <Part name={parts[1]["name"]} section={parts[1]["exercises"]} />
      <Part name={parts[2]["name"]} section={parts[2]["exercises"]} />
    </section>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Total exercises:{" "}
      {parts[0]["exercises"] + parts[1]["exercises"] + parts[2]["exercises"]}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course["parts"]} />
      <Total parts={course["parts"]} />
    </div>
  );
};

export default App;
