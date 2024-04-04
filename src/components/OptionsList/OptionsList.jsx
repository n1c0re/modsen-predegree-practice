import './OptionsList.css';

import options from '@constants/options';
import PropTypes from 'prop-types';

const OptionsList = ({ optionSelect, selectedOption }) => {
  return (
    <div className="custom-select" tabIndex="0">
      <ul className="options">
        {options.map((option, index) => (
          <li key={index} id={option.kind} onClick={optionSelect} className={selectedOption == option.kind ? 'selected' : ''}>
            <img src={option.imgSrc} alt={option.label} />{option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

OptionsList.propTypes = {
  optionSelect: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default OptionsList;
