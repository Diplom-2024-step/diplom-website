import React from 'react'


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
    label = "Choose quantity:",
    min = 0,
    max = 99999,
    helperText = "Please select a 5 digit number from 0 to 9."
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            setValue(newValue);
        }
    };

    return (
        <div className="max-w-xs mx-auto">
            <label 
                htmlFor="quantity-input" 
                className="block mb-2 text-sm text-center font-medium text-gray-900"
            >
                {label}
            </label>
            <div className="relative flex items-center max-w-[8rem]">
                <button
                    type="button"
                    onClick={handleDecrement}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                    <svg 
                        className="w-3 h-3 text-gray-900" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 18 2"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    id="quantity-input"
                    value={value}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                    required
                />
                <button
                    type="button"
                    onClick={handleIncrement}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                    <svg 
                        className="w-3 h-3 text-gray-900" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 18 18"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
            {helperText && (
                <p 
                    id="helper-text-explanation" 
                    className="mt-2 text-sm text-gray-500"
                >
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default NumberInput