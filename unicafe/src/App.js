import { useState } from 'react';
import { FeedbackButtons } from './Components/FeedbackButtons';
import { Statistics } from './Components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBadClick = () => setBad(bad + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleGoodClick = () => setGood(good + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <FeedbackButtons
        onBad={handleBadClick}
        onGood={handleGoodClick}
        onNeutral={handleNeutralClick}
      />
      <h1>Statistics</h1>
      { good === 0 && neutral === 0 && bad === 0?
        <p>No feedback given</p>
      :
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
      }
    </div>
  )
}

export default App