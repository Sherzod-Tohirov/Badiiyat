import "./separatorline.css";

export const SeparatorLine = ({style}) => {
  return (
    <span className={`separator-line ${style || ''}`}></span>
  )
}
