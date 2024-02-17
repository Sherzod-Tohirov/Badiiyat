import { useContext, useEffect } from "react"
import { tokenContext } from "../../context/tokenContext"
import { useNavigate } from "react-router-dom";

export const Logout = () => {
   const {setToken} = useContext(tokenContext);
   const navigate = useNavigate();
   useEffect(() => {
        setToken("");
        navigate("/login");
   }, []);   
   
   return <></>
}
