import {useState} from 'react';

export const useForm = <T extends object>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const onChange = (
    value: string | boolean | Date | undefined,
    field: keyof T,
  ) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return {
    ...state,
    form: state,
    onChange,
  };
};
