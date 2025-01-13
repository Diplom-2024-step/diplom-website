import React from "react";

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
  label = "",
  min = 0,
  max = 99999,
  helperText = "",
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
    <div className="w-full mx-auto flex-col justify-center items-center">
      <div>
        <label
          className="block mb-2 text-sm font-medium text-center text-gray-900"
          htmlFor="quantity-input"
        >
          {label}
        </label>
      </div>
      <div className="relative flex items-center justify-center">
        <button
          className="bg-white hover:bg-gray-200 border-black border  rounded-full p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
          type="button"
          onClick={handleDecrement}
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-gray-900"
            fill="none"
            viewBox="0 0 18 2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1h16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div
          className="bg-white border border-gray-300 border-opacity-0  text-center text-gray-900 text-sm focus:ring-transparent block w-14 py-2.5"
          id="quantity-input"
        >
          {value}
        </div>
        <button
          className="bg-white hover:bg-gray-200 border border-black rounded-full p-3  focus:ring-gray-100 focus:ring-2 focus:outline-none"
          type="button"
          onClick={handleIncrement}
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-gray-900"
            fill="none"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1v16M1 9h16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      {helperText && (
        <p className="mt-2 text-sm text-gray-500" id="helper-text-explanation">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default NumberInput;
