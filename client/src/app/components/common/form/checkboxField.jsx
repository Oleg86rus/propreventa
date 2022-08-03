import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };
  const getInputClasses = () => {
    return 'h-4 w-4 text-amber-500 focus:ring-amber-500 border-amber-300';
  };
  return (
    <>
      <div className="flex items-center">
        <input
          className={getInputClasses()}
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={handleChange}
          checked={value}
        />
        <label className='ml-2 block text-sm text-gray-900' htmlFor="flexCheckDefault">
          {children}
        </label>
      </div>
      {error && <div className='text-red-600 text-xs mt-1 mb-3'>{error}</div>}
    </>
  );
};
CheckboxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  error: PropTypes.string
};
export default CheckboxField;