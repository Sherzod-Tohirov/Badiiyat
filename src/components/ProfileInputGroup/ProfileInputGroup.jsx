import "./profileinputgroup.css";
import { forwardRef } from "react";
import PropTypes from 'prop-types';

export const ProfileInputGroup = forwardRef(({label, type, value, info, style, inputStyle, isSelect, options, ...props }, ref) => {
  if(isSelect) {
     return (
      <div className={`profileinputgroup ${style}`}>
        <label className="profileinputgroup__label" htmlFor={label}>
            {label}
        </label>
        <select id={label} ref={ref} defaultValue={value} className={`profileinputgroup__input select-input ${inputStyle || ""}`} {...props}>
             {
              options?.length ? (
                  options.map(item => {
                     return <option value={item?.code} key={item.id}>{item.value}</option>
                  })
              ) : ""
             }
        </select>
        <span className="profileinputgroup__info">{info}</span>
  </div>
     )
  }
  return (
    <div className={`profileinputgroup ${style}`}>
        <label className="profileinputgroup__label" htmlFor={label}>
            {label}
        </label>
        <input id={label} ref={ref} defaultValue={value || ""} className={`profileinputgroup__input ${inputStyle || ""}`} type={type || "text"} {...props} />
        <span className="profileinputgroup__info">{info}</span>
    </div>
  )
});

ProfileInputGroup.displayName = "ProfileInputGroup";

ProfileInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.string,
  style: PropTypes.string,
  inputStyle: PropTypes.string,
  isSelect: PropTypes.bool,
  options: PropTypes.array || PropTypes.any,
  props: PropTypes.array
}