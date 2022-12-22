import React from 'react'

const FloatingInput =({
    value,
    onChange,
    className,
    label,
    id,
    name,
    type,
  }) => {
    return (
        <div className={`relative ${className}`}>
          <input
            type={type ?? "text"}
            id={id}
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
            value={value}
            onChange={onChange}
            name={name}
          />
          <label
            htmlFor={id}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-400 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            {label}
          </label>
        </div>
    );
}

export default FloatingInput