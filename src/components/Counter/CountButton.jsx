export default function Countbutton({ children, ...restProps }) {
  return <button type="button" {...restProps}>
    {children}
  </button>
}