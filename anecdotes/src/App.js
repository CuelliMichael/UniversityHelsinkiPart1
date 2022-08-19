import { useState } from 'react';
import { Button } from './Components/Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [anecdotes_votes, setAndecdotesVotes] = useState(Array(anecdotes.length).fill(0));
  const [larges_voted, setLargestVoted] = useState({max_vote: 0, array_position:0});

  const handleChangeAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7));
  }

  const handleChangeAnecdoteVote = () => {
    const new_votes = [...anecdotes_votes];
    new_votes[selected]++;
    if(new_votes[selected] > larges_voted.max_vote){
      const new_max_vote = {
        ...larges_voted,
        max_vote: new_votes[selected],
        array_position: selected
      }
      setLargestVoted(new_max_vote);
    }
    setAndecdotesVotes(new_votes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        {`has ${anecdotes_votes[selected]} votes`}
      </div>
      <div>
        <Button
          name={"vote"}
          onClick={handleChangeAnecdoteVote}
        />
        <Button
          name={"next anecdote"}
          onClick={handleChangeAnecdote}
        />
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[larges_voted.array_position]}
      </div>
      <div>
        {`has ${anecdotes_votes[larges_voted.array_position]} votes`}
      </div>
    </div>
  )
}

export default App