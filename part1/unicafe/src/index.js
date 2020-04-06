import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => (
  <>
    <td>{text}</td>
    <td>{value}</td>
  </>
);

const Statistics = ({
  header,
  good,
  bad,
  neutral,
  total,
  average,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>{header}</h2>
      <br />
      <table>
        <tbody>
          {total > 0 ? (
            <>
              <tr>
                <Statistic text='Good:' value={good} />
              </tr>
              <tr>
                <Statistic text='Neutral:' value={neutral} />
              </tr>
              <tr>
                <Statistic text='Bad:' value={bad} />
              </tr>
              <tr>
                <Statistic text='Total:' value={total} />
              </tr>
              <tr>
                <Statistic text='Average:' value={average} />
              </tr>
              <tr>
                <Statistic
                  text='Positive Feedback: '
                  value={`${positivePercentage} %`}
                />
              </tr>
            </>
          ) : (
            <tr>
              <td>No feedback data yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodVote = () => {
    setGood(good + 1);
  };

  const handleNeutralVote = () => {
    setNeutral(neutral + 1);
  };

  const handleBadVote = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text='Give Feedback'></Header>

      <Button text='Good' handleClick={handleGoodVote} />
      <Button text='Neutral' handleClick={handleNeutralVote} />
      <Button text='Bad' handleClick={handleBadVote} />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={good + bad + neutral}
        average={(good + bad + neutral) / 3}
        positivePercentage={`${(good / (good + bad + neutral)) * 100 || 0}`}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
