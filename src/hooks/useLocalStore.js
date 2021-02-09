import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [Value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(Value));
  }, [key, Value]);

  return [Value, setValue];
};

export default useLocalStorage;
