import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from 'components/Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeCounter = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedbacksNumber = this.countTotalFeedback();
    if (totalFeedbacksNumber === 0) {
      return 0;
    }
    return Math.floor((this.state.good / totalFeedbacksNumber) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.changeCounter}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <>
              <Notification message="There is no feedback" />
            </>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
