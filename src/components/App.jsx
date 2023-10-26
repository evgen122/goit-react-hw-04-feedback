import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const data = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const changeState = option => {
    if (option === 'good') {
      return setGood(good + 1);
    }
    if (option === 'neutral') {
      return setNeutral(neutral + 1);
    }
    if (option === 'bad') {
      return setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0 ? 0 : (good / countTotalFeedback()) * 100;
  };

  const statistics = (
    <Statistics
      state={data}
      total={countTotalFeedback()}
      positive={countPositiveFeedbackPercentage().toFixed()}
    />
  );

  const notification = <Notification message="There is no feedback" />;

  let info;

  if (countTotalFeedback() === 0) {
    info = notification;
  } else {
    info = statistics;
  }

  return (
    <div>
      <Section
        title="Please leave feedback"
        options={data}
        onLeaveFeedback={changeState}
      />
      <FeedbackOptions options={data} onLeaveFeedback={changeState} />

      <Section title="Statistics" />
      {info}
    </div>
  );
};
