import React from "react";
import { capitalizeString } from "../Formatting/FormatData";

interface ReusableTextAreaProps {
  id: string;
  label: string;
  rows: number;
  name: string;
  placeholder: string;
  value: string;
  maxLength?: number;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validationErrors: Record<string, string>;
}

const ReusableTextArea: React.FC<ReusableTextAreaProps> = ({
  id,
  label,
  rows,
  name,
  placeholder,
  value,
  handleChange,
  maxLength = 500,
  validationErrors,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className='text-sm font-semibold mb-1 text-text-light_extension dark:text-text-dark_extension'>
        {capitalizeString(label)}
      </label>
      <textarea
        maxLength={maxLength}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`border dark:bg-background-dark_extension bg-background-light_extension p-2 lg:p-4 rounded-lg focus:outline-none focus:ring-2 resize-none
            focus:ring-primary-default ${validationErrors[`${capitalizeString(name)}_${id}`] ? 'border-primary' : 'dark:border-lines-dark border-lines-light'}`}
        onChange={handleChange}
        rows={rows}
      />
      {validationErrors &&
        validationErrors[`${capitalizeString(name)}_${id}`] && (
          <p className="text-primary text-sm">
            {validationErrors[`${capitalizeString(name)}_${id}`]}
          </p>
        )}
    </div>
  );
};

export default ReusableTextArea;