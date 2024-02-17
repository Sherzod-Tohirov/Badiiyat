import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeContext } from "./themeContext";


export const notificationContext = createContext();


function notify(msg, setMsg, theme) {
    if(typeof msg === 'string') {
        toast.success(msg, {
            position: 'top-center',
            draggable: true,
            autoClose: 2000,
            theme,
        });
    }else {
        toast[msg.type](msg.msg, {
            position: 'top-center',
            draggable: true,
            autoClose: 2000,
            theme,
        });
    }

    setMsg("");

}


export const NotificationProvider = ({children}) => {
  const {theme} = useContext(themeContext);
  const [msg, setMsg] = useState("");
   if(msg) {
    notify(msg, setMsg, theme);
   }
   return (
    <notificationContext.Provider value={{msg, setMsg}}>
        {children}
    </notificationContext.Provider>
  )
}
