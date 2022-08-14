import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {EyeIcon} from '@heroicons/react/solid';

const TextField = ({ label, type, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({name: target.name, value: target.value});
  };
  const getInputClasses = () => {
    return 'appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-300 sm:text-sm text-base';
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };
  
  return (
    <div className="rounded-md shadow-sm -space-y-px">
      <label htmlFor={name}> {label}</label>
      <div className="input-group relative">
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {type === 'password' && (
          <button
            className="btn btn-outline-secondary absolute right-2.5 top-[10px] flex items-center"
            type="button"
            onClick={toggleShowPassword}
          >
            <span>
              <EyeIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-500 opacity-40 hover:opacity-70 transition-all duration-300" aria-hidden="true"/>
            </span>
          </button>
        )}
        {error && <div className="text-red-600 text-xs mt-1 mb-3">{error}</div>}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: 'text'
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};
export default TextField;