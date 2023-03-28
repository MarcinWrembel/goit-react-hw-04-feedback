import React, { Component } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage(goodValue, totalVotes) {
    return `${Math.floor((goodValue / totalVotes)*100)} %`;
    // return `${((goodValue / totalVotes)*100).toFixed(2)} %`;
  }

  countTotalFeedback(options) {
    const sum = Object.values(options).reduce((prev, el) => prev + el, 0);
    return sum;
  }

  onLeaveFeedback = e => {
    if (e.target.textContent === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (e.target.textContent === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
    if (e.target.textContent === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback(this.state) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics 
            stats={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </div>
    );
  }
}
