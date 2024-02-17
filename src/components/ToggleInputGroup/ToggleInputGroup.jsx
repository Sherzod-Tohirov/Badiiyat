import { forwardRef } from "react";
import "./toggleinputgroup.css";

export const ToggleInputGroup = forwardRef(({style, label, checked, ...props}, ref) => {
  return (
    <div className={`toggleinputgroup ${style}`}>
        <label className="toggleinputgroup__info-label" htmlFor={label}>
            {label}
        </label>
        <input id={label} ref={ref} defaultChecked={checked} className={`toggleinputgroup__input hidden`} type="checkbox" {...props} />
        <label className="toggleinputgroup__label" htmlFor={label}></label>
    </div>
  )
})



ToggleInputGroup.displayName = "ToggleInputGroup";