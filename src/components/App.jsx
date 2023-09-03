import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from 'components/Section/Section';
export function App() {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const goodIncrement = () => {
    setgood(state => state + 1);
  };
  const neutralIncrement = () => {
    setneutral(state => state + 1);
  };
  const badIncrement = () => {
    setbad(state => state + 1);
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacksNumber = totalFeedback();
    if (totalFeedbacksNumber === 0) {
      return 0;
    }
    return Math.floor((good / totalFeedbacksNumber) * 100);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodeedback={goodIncrement}
          neutraleedback={neutralIncrement}
          badeedback={badIncrement}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() === 0 ? (
          <>
            <Notification message="There is no feedback" />
          </>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
