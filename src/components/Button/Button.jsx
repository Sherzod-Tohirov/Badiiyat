import { useContext } from "react";
import { PulseLoader } from "react-spinners";
import {themeContext} from '../../context/themeContext';

export const Button = ({children, isValid, loading, ...props}) => {
  const {theme} = useContext(themeContext);
  return (
    <button 
    className={`auth__btn flex items-center justify-center gap-2 relative ${!isValid && "opacity-80"}`} {...props}
    >
     {children} {loading ? <PulseLoader color={theme === 'light' ? '#fff' : '#000'} size={5} /> : ""}
    </button>
  )
}
