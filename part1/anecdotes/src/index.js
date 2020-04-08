import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [clickCount, setClickCount] = useState(new Array(6).fill(0));

  const handleNext = () => {
    const randomValue = Math.floor(Math.random() * 5 + 1);
    setSelected(randomValue);
  };

  const handleVote = () => {
    const copy = [...clickCount];
    copy[selected] += 1;
    setClickCount(copy);
  };

  const maxValueInArray = Math.max(...clickCount);
  const indexOfTheHighestVote = clickCount.indexOf(maxValueInArray);
  const highestVotedAnecdote = props.anecdotes[indexOfTheHighestVote];

  return (
    <div className="container">
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <br />
      <p>{`has ${clickCount[selected]} ${maxValueInArray > 1 ? 'votes' : 'vote'}`}</p>
      <br />
      <button onClick={handleNext}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>

      <h2>
        Anecdote with the highest vote{' '}
        {` (${maxValueInArray} ${maxValueInArray > 1 ? 'votes' : 'vote'})`}
      </h2>
      <p>{maxValueInArray > 0 ? highestVotedAnecdote : 'No votes yet'}</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
