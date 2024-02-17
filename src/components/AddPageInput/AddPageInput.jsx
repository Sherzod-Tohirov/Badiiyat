import { forwardRef } from "react";
import "./addpageinput.css";
export const AddPageInput = forwardRef(({type, placeholder, style, isSelect, isTextArea, options, optionKeys, isAuthor, ...props}, ref) => {
    
    if(isTextArea) {
        return (
            <textarea className={`addpageinput add-textarea-input ${style}`} ref={ref} type={type || "text"} placeholder={placeholder} {...props}></textarea> 
        )
    }


    if(isSelect) {
        return (<select className={`addpageinput add-select-input ${style}`} ref={ref} {...props}>
            <option value="" hidden>{placeholder}</option>
            {
                !isAuthor ? (options?.length ? (
                    options.map((item, index) => {
                    return <option key={item?.id} value={optionKeys?.[index]?.value}>{item?.value}</option>
                    })
                ) : "") : (options?.length ? (
                    options.map((item, index) => {
                    return <option key={item?.id} value={item?.id}>{item?.first_name} {item?.last_name}</option>
                    })
                ) : "") 
            }
        </select>);
    }

    
    return (
      <input className={`addpageinput ${style}`} ref={ref} type={type || "text"} placeholder={placeholder} {...props} /> 
    )
  })


  AddPageInput.displayName = "AddPageInput";