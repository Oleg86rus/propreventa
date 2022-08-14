import React from 'react';
import PropTypes from 'prop-types';

const RadioField = ({options, name, onChange, value, label}) => {
  const handleChange = ({ target }) => {
    onChange({name: target.name, value: target.value});
  };
  
  return (
    <div className="mb-4 mt-4">
      <label className="form-label">
        {label}
      </label>
      <div className='flex items-center'>
        {options.map((option) => (
          <div
            key={option.name + '_' + option.value}
            className="flex items-center mr-4"
          >
            <input
              className="h-4 w-4 bg-gray-100 border-amber-300 text-red-500 focus:ring-amber-500"
              type="radio"
              name={name}
              id={option.name + '_' + option.value}
              checked={option.value===value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="ml-1.5 min-w-0 text-sm text-gray-900"
              htmlFor={option.name + '_' + option.value}
            >
              {option.name}
            </label>
          </div>

        ))}
      </div>
    </div>
  );
};
RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label:PropTypes.string
};
export default RadioField;