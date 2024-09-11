import { useState } from "react";
const Anecdotes = () => {
  const initAnecdotes = [
    { quote: "If it hurts, do it more often.", value: 0 },
    {
      quote: "Adding manpower to a late software project makes it later!",
      value: 0,
    },
    {
      quote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      value: 0,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      value: 0,
    },
    { quote: "Premature optimization is the root of all evil.", value: 0 },

    {
      quote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      value: 0,
    },
    {
      quote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      value: 0,
    },
    { quote: "The only way to go fast, is to go well.", value: 0 },
  ];
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initAnecdotes);
  const upvotePost = () => {
    setAnecdotes((prevAnecdotes) => {
      const newAnecdotes = [...prevAnecdotes];
      newAnecdotes[selected].value += 1;
      return newAnecdotes;
    });
  };
  const highestVoted = anecdotes.reduce((prev, current) => {
    return prev.value > current.value ? prev : current;
  });

  return (
    <div>
      <div>
        <h1>{anecdotes[selected].quote}</h1>
      </div>
      <h5>Has {anecdotes[selected].value} upvotes</h5>
      <button onClick={upvotePost}>Upvote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }>
        Next Anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <div>
        <p>{highestVoted.quote}</p>
      </div>
    </div>
  );
};
const Stats = ({ strat, good, bad, neutral }) => {
  if (strat == "sum")
    return (
      <tr>
        <td>All </td>
        <td>{good + bad + neutral}</td>
      </tr>
    );
  if (strat == "avg")
    return (
      <tr>
        <td>Average </td>
        <td>
          {(
            (good * 1 + bad * -1 + neutral * 0) /
            (good + bad + neutral)
          ).toFixed(2)}
        </td>
      </tr>
    );
  if (strat === "percent positive")
    return (
      <tr>
        <td>Positive </td>
        <td>{((good / (good + bad + neutral)) * 100).toFixed(2)} %</td>
      </tr>
    );
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Reviews = ({ good, neutral, bad }) => {
  if (good + neutral + bad <= 0) return <span>No ratings yet!</span>;
  return (
    <table>
      <tb>
        <StatisticLine text={"Good:"} value={good} />
        <StatisticLine text={"Neutral:"} value={neutral} />
        <StatisticLine text={"Bad:"} value={bad} />
        <Stats strat={"sum"} good={good} bad={bad} neutral={neutral} />
        <Stats strat={"avg"} good={good} bad={bad} neutral={neutral} />
        <Stats
          strat={"percent positive"}
          good={good}
          bad={bad}
          neutral={neutral}
        />
      </tb>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <Anecdotes />
      </div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h2>Rating Stats</h2>
      <Reviews bad={bad} good={good} neutral={neutral} />
    </div>
  );
};

export default App;
