import React, { useState } from 'react';
import { Container } from './Container/Container';

import { Section } from './Section/Section';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const onLeaveFeedback = grade => {
    if (grade === 'good') setGood(prevGood => prevGood + 1);
    else if (grade === 'neutral') setNeutral(prevNeutral => prevNeutral + 1);
    else if (grade === 'bad') setBad(prevBad => prevBad + 1);
  };

  const countPositiveFeedbackPercentage = Math.round((good / total) * 100) || 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
