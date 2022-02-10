import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
  const [ value, setValue ] = useState(() => {
    if (localStorage.getItem(key)) {
      // console.log('Getting key of', key)
      return localStorage.getItem(key);
    } else {
      // console.log('Setting Key! ->', key, 'with the initValue of', initValue)
      localStorage.setItem(key, initValue);
      return initValue;
    }
  })

  const setStoredValue = (newValue) => {
    // console.log('Setting Stored Value of', key, 'with the new value of', newValue)
    localStorage.setItem(key, newValue);
    setValue(newValue);
  }

  return [value, setStoredValue]
}

export default useLocalStorage;