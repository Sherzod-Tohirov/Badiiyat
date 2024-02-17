import { GridLoader } from "react-spinners"
import {themeContext} from '../../context/themeContext';
import "./pageloader.css";
import { useContext } from "react";
export const PageLoader = () => {
  const {theme} = useContext(themeContext);
  return (
    <div className="pageload-overlay">
        <div className="z-10">
          <GridLoader color={theme === 'light' ? `#efdac3` : '#000000bd'} size={25} margin={8} />
        </div>
    </div>
  )
}
