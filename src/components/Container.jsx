export const Container = ({ className = "", children }) => {
  return (
    <div className={`w-[95%] md:w-[85%] max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
