import { useContext } from "react";
import "./savechangesbutton.css";
import {ClipLoader} from 'react-spinners';
import { themeContext } from "../../context/themeContext";
export const SaveChangesButton = ({children, style, loading, ...props}) => {
  const {theme} = useContext(themeContext);
  return (
    <button className={`save__btn ${style}`} type="submit" {...props}>{children}
      {
        loading ? <ClipLoader color={theme === 'light' ? '#e7e7e7' : '#0d0d0d'} size={18} /> : ""
      }
    </button>
  )
}
