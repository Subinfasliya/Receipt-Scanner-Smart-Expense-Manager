const InputField = ({ label,name, type, value, onChange }) => {
  

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
            className="w-full border rounded-lg p-3"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};
export default InputField;
