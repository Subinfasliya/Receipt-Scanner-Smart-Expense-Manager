const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <>
      <div className="mb-4 ">
        <label htmlFor={name} className="text-sm font-medium block mb-2">
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            id={name}
            name={name}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 p-3 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};
export default InputField;
