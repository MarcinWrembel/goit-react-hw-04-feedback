import PropTypes from 'prop-types';
import feed from './Feedback.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnOptions = Object.keys(options).map(e => {
    return (
      <button className={feed.btn} key={e} onClick={onLeaveFeedback}>
        {e}
      </button>
    );
    // return <button className="" key={e}>{stringFromCapitalLetter(e)}</button>;
  });

  return <div className={feed.feedback}>{btnOptions}</div>;
};

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };

export default FeedbackOptions;
