import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', false);

  const handleChange = e => {
    // console.log('Handling DarkMode Change!')
    e.preventDefault();
    setDarkMode(!darkMode);
    // console.log(darkMode);
  }

  return([darkMode, setDarkMode, handleChange])
}

export default useDarkMode;