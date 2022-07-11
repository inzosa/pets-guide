export const Label = ({ className, htmlFor, children }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
