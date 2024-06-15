export const Tag = ({ text }) => {
  return (
    <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
      #{text}
    </span>
  );
};
