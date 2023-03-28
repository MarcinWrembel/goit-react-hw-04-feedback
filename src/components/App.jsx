import React, { useState } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  let options = {
    good,
    neutral,
    bad,
  }

   const countPositiveFeedbackPercentage = (goodValue, totalVotes) => {
    return `${Math.floor((goodValue / totalVotes) * 100)} %`;

  };


  const countTotalFeedback = options => {
    const sum = Object.values(options).reduce((prev, el) => prev + el, 0);
    return sum;
  };

  const onLeaveFeedback = e => {
    if (e.target.textContent === 'good') {
      setGood(good + 1 );
    }
    if (e.target.textContent === 'bad') {
     setBad(bad + 1 );
    }
    if (e.target.textContent === 'neutral') {
      setNeutral(neutral + 1 );
    }
  };


  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          optionObj={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback(options) === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          stats={options}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </div>
  );
};
