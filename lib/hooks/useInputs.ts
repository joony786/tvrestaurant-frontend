import { useState, useCallback } from 'react';

export default function useInputs<T>(defaultValue: T | {}) {
  const [inputs, setInputs] = useState(defaultValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );
  const onReset = useCallback(() => setInputs({}), []);
  return [inputs, onChange, onReset] as [T, typeof onChange, typeof onReset];
}
