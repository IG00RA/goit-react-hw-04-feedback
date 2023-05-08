import { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Feedbacks } from './Feedbacks/Feedbacks';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = feed => {
    if (feed === 'good') {
      setGood(prevFeed => prevFeed + 1);
    }
    if (feed === 'neutral') {
      setNeutral(prevFeed => prevFeed + 1);
    }
    if (feed === 'bad') {
      setBad(prevFeed => prevFeed + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };
  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <GlobalStyle />
      <Section tittle="Please leave feedback">
        <Feedbacks options={options} onAddFeedback={addFeedback} />
      </Section>

      <Section tittle="Statistics">
        <Notification message="There is no feedback" total={countTotalFeedback}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        </Notification>
      </Section>
    </>
  );
};
