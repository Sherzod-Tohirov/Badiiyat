import { forwardRef } from "react";
import "./authinput.css";
export const AuthInput = forwardRef(({type, placeholder, style, ...props}, ref) => {
    return (
      <input className={`auth-input ${style}`} ref={ref} type={type || "text"} placeholder={placeholder} {...props} /> 
    )
  })


  AuthInput.displayName = "AuthInput";