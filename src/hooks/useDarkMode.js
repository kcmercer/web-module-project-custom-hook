import { useState } from 'react';

const useDarkMode = () => {
  const [ darkMode, setDarkMode ] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return([darkMode, setDarkMode, handleChange])
}

export default useDarkMode;