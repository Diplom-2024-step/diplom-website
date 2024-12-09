import React from 'react';

interface NumberInputProps {
  value: number;
  setValue: (value: number) => void;
  label?: string;
  min?: number;
  max?: number;
  helperText?: string;
}

const NumberInput = ({
  value,
  setValue,
  label = '',
  min = 0,
  max = 99999,
  helperText = ''
}: NumberInputProps) => {
  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  

  return (
    <div className="w-full mx-auto">
      <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-center text-gray-900">
        {label}
      </label>
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-white hover:bg-gray-200 border-black border  rounded-full p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>

        <div
          id="quantity-input"
          className="bg-white border border-gray-300 border-opacity-0  text-center text-gray-900 text-sm focus:ring-transparent block w-14 py-2.5"
        >
            {value}
        </div>
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-white hover:bg-gray-200 border border-black rounded-full p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
      {helperText && (
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default NumberInput;