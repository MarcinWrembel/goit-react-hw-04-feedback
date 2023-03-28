import React from 'react';
import PropTypes from 'prop-types';
import stat from './Statistics.module.css';

const Statistics = ({ stats, total, positivePercentage }) => {
  const opinion = Object.keys(stats).map(el => {
    return (
      <p className={stat.category} key={el}>
        {el}: {stats[el]}
      </p>
    );
  });

  return (
    <div className={stat.counting}>
      {opinion}
      <p>Total: {total(stats)} </p>
      <p>Positive feedback: {positivePercentage(stats.good, total(stats))} </p>
    </div>
  );
};

//prop types
Statistics.propTypes = {
  good: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
