import PropTypes from 'prop-types';
import feed from './Feedback.module.css';

const FeedbackOptions = ({ optionObj, onLeaveFeedback }) => {
  const btnOptions = Object.keys(optionObj).map(e => {
    return (
      <button className={feed.btn} key={e} onClick={onLeaveFeedback}>
        {e}
      </button>
    );
  });

  return <div className={feed.feedback}>{btnOptions}</div>;
};

FeedbackOptions.propTypes = {
  optionObj: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
