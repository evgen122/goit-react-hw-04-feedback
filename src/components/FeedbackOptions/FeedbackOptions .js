export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.getOwnPropertyNames(options).map(i => {
        return (
          <button
            key={[i]}
            name={[i]}
            type="button"
            onClick={eve => onLeaveFeedback(eve.target.name)}
          >
            {[i]}
          </button>
        );
      })}
    </div>
  );
};
