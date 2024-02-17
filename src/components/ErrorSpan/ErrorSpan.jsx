export const ErrorSpan = ({children, style}) => {
  return (
    <span className={`text-red-500 text-sm pl-2 leading-none whitespace-nowrap relative ${style}`}>{children}</span>
  )
}
