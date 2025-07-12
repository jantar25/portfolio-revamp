import React from 'react';

import { capitalizeString } from '../Formatting/FormatData';

interface ReusableInputsProps {
    id: string;
    label: string;
    type: string;
    name: string;
    value?: string;
    placeholder: string;
    validationErrors: Record<string, string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReusableInputs: React.FC<ReusableInputsProps> = ({ id, label, type, name, value, placeholder, validationErrors, handleChange }) => {
    return (
      <div className='flex flex-col w-full'>
        <label htmlFor={name} className='text-sm font-semibold mb-1 text-text-light_extension dark:text-text-dark_extension'>
          {capitalizeString(label)}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`border dark:bg-background-dark_extension bg-background-light_extension p-2 md:p-4 rounded-lg focus:outline-none focus:ring-2
            focus:ring-primary-default ${validationErrors[`${capitalizeString(name)}_${id}`] ? 'border-primary' : 'dark:border-lines-dark border-lines-light'}`}
          onChange={handleChange}
        />
        {validationErrors[`${capitalizeString(name)}_${id}`] && (
          <p className='text-primary text-sm'>{validationErrors[`${capitalizeString(name)}_${id}`]}</p>
        )}
      </div>
    );
}

export default ReusableInputs;