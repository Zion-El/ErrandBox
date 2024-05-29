// Define the type for form values. This can vary based on your form structure.
type FormValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    c_password?: string;
    [key: string]: any; // This allows for additional keys not explicitly defined
  };
  
  // Define the type for the error object
  type ValidationErrors = {
    [key: string]: string; // Maps field names to error messages
  };
  
  // Validator function with TypeScript annotations
  export const validator = (values: FormValues): ValidationErrors => {
    const errors: ValidationErrors = {};
  
    if (values) {
      // Check first name
      if ('firstName' in values) {
        if (!values.firstName) {
          errors.firstName = 'First name is required';
        }
      }
  
      // Check last name
      if ('lastName' in values) {
        if (!values.lastName) {
          errors.lastName = 'Last name is required';
        }
      }
      if ('address' in values) {
        if (!values.address) {
          errors.address = 'Address is required';
        }
      }
      if ('phone' in values) {
        if (!values.phone) {
          errors.phone = 'Phone is required';
        }
      }
      if ('errandName' in values) {
        if (!values.errandName) {
          errors.errandName = 'Errand name is required';
        }
      }
      if ('errandType' in values) {
        if (!values.errandType) {
          errors.errandType = 'Errand type is required';
        }
      }
      if ('errandName' in values) {
        if (!values.errandName) {
          errors.errandName = 'Errand name is required';
        }
      }
  
      // Check email
      if ('email' in values) {
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
      }
  
      // Check password
      if ('password' in values) {
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
        }
      }
  
      // Check confirm password
      if ('c_password' in values) {
        if (!values.c_password) {
          errors.c_password = 'Confirm password is required';
        } else if (values.c_password !== values.password) {
          errors.c_password = 'Passwords do not match';
        }
      }
    }
  
    return errors;
  };
  