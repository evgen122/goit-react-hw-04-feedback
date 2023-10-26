import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const statistics = (
      <Statistics
        state={this.state}
        total={this.countTotalFeedback()}
        positive={this.countPositiveFeedbackPercentage().toFixed()}
      />
    );

    const notification = <Notification message="There is no feedback" />;

    let info;

    if (this.countTotalFeedback() === 0) {
      info = notification;
    } else {
      info = statistics;
    }

    return (
      <div>
        <Section
          title="Please leave feedback"
          options={this.state}
          onLeaveFeedback={this.changeState}
        />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.changeState}
        />

        <Section title="Statistics" />
        {info}
      </div>
    );
  }
}
