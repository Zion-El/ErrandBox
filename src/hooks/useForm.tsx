import { useEffect, useState, ChangeEvent } from 'react';
import { validator } from '../utils/method';
;

type InitialStateType = { [key: string]: any };

type ErrorsType = { [key: string]: string };

const useForm = <T extends InitialStateType>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<ErrorsType>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    const validationErrors = validator(values);
    setErrors(validationErrors);
  }, [values]);

  const resetForm = () => {
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    resetForm,
    errors,
  };
};

export default useForm;
