import React, { useState, ChangeEvent } from 'react';
import { DatePicker } from 'antd';
import { IoEyeOutline } from 'react-icons/io5';
import { FiEyeOff } from 'react-icons/fi';
import { CheckLabel, Label } from './typograph';

// Define types for the props
type Option = {
  value: string | number;
  name: string;
};

type FormInputProps = {
  type: 'text' | 'email' | 'password' | 'select' | 'date';
  name: string;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement> | any) => void; // the event signature might depend on the input type
  placeholder?: string;
  error?: string;
  label: string;
  options?: Option[];
};

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  label,
  options,
}) => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [verify, setVerify] = useState(false);

  const toggleVisibility = () => setShow(!show);

  let inputElement;

  switch (type) {
    case 'select':
      inputElement = (
        <div className="relative">
          <Label text={label} />
          <select
            name={name}
            value={value}
            onChange={onChange}
            // placeholder={placeholder}
            onFocus={() => setShowError(true)}
            className={`py-[16px] px-[12px] border focus:border-[#FE5000] ${
              error && showError ? 'border-[red]' : 'border-[#CBD5E1]'
            } rounded-lg outline-none w-full`}
          >
            {options?.map((i, id) => (
              <option key={id} value={i.value}>
                {i.name}
              </option>
            ))}
          </select>
          {error && showError && (
            <small className="text-[red] absolute bottom-0 left-0 transform translate-y-5 transition-all duration-500 ease-in-out">
              {error}
            </small>
          )}
        </div>
      );
      break;

    case 'email':
      inputElement = (
        <div className="relative">
          <Label text={label} />
          <input
            type="email"
            name={name}
            value={value as string}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setShowError(true)}
            className={`py-[16px] px-[12px] border focus:border-[#FE5000] ${
              error && showError ? 'border-[red]' : 'border-[#CBD5E1]'
            } rounded-lg outline-none w-full`}
          />
          {error && showError && (
            <small className="text-[red] absolute bottom-0 left-0 transform translate-y-5 transition-all duration-500 ease-in-out">
              {error}
            </small>
          )}
        </div>
      );
      break;

    case 'date':
      inputElement = (
        <div className="relative">
          <Label text={label} />
          <DatePicker
            className={`py-[16px] px-[12px] border focus:border-[#FE5000] ${
              error && showError ? 'border-[red]' : 'border-[#CBD5E1]'
            } rounded-lg outline-none w-full`}
            onChange={onChange}
          />
          {error && showError && (
            <small className={`text-[red] absolute bottom-0 left-0 transform translate-y-5 transition-all duration-500 ease-in-out`}>
              {error}
            </small>
          )}
        </div>
      );
      break;

    case 'password':
      inputElement = (
        <div>
          <Label text={label} />
          <div
            className="px-[12px] border border-[#CBD5E1] rounded-lg outline-none w-full relative flex items-center"
            onMouseLeave={() => setVerify(false)}
          >
            <input
              type={show ? 'text' : 'password'}
              name={name}
              value={value as string}
              onChange={onChange}
              placeholder={placeholder}
              className="outline-none w-[95%] py-[16px]"
              onMouseDown={() => setVerify(true)}
            />
            <button
              className="p-3"
              onClick={toggleVisibility}
              type="button"
            >
              {show ? <FiEyeOff /> : <IoEyeOutline />}
            </button>

            {verify && (
              <div className="absolute bg-white shadow-xl top-16 p-3 rounded-sm space-y-2 transition-all duration-500 ease-in-out z-[99]">
                <div className="flex space-x-3 items-center">
                  <input type="checkbox" />
                  <CheckLabel text="Contains at least 8 Characters" />
                </div>
                <div className="flex space-x-3 items-center">
                  <input type="checkbox" />
                  <CheckLabel text="Must have at least 1 symbol (!@#$%^&*()_+)" />
                </div>
                <div className="flex space-x-3 items-center">
                  <input type="checkbox" />
                  <CheckLabel text="Must have at least one capital letter" />
                </div>
                <div className="flex space-x-3 items-center">
                  <input type="checkbox" />
                  <CheckLabel text="Must have at least one number" />
                </div>
              </div>
            )}
          </div>
        </div>
      );
      break;

    default:
      inputElement = (
        <div className="relative">
          <Label text={label} />
          <input
            type="text"
            name={name}
            value={value as string}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setShowError(true)}
            className={`py-[16px] px-[12px] border focus:border-[#FE5000] ${
              error && showError ? 'border-[red]' : 'border-[#CBD5E1]'
            } rounded-lg outline-none w-full`}
          />
          {error && showError && (
            <small className={`text-[red] absolute bottom-0 left-0 transform translate-y-5`}>
              {error}
            </small>
          )}
        </div>
      );
  }

  return <>{inputElement}</>;
};

export default FormInput;
