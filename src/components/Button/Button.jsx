import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button className={s.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
