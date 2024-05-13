import { useEffect, useState } from 'react';
import { validator } from '../utils/method';
// import { RadioChangeEvent } from 'antd/lib/radio';

type InitialStateType = { [key: string]: any };
type ErrorsType = { [key: string]: string };

const useForm = <T extends InitialStateType>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<ErrorsType>({});

  const handleChange = (event: any) => {
    if ('name' in event.target && 'value' in event.target) {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
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
