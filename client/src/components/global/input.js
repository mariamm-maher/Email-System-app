import React from "react";

export default function InputField({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <input
        id={id}
        name={name.toLowerCase()}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="py-3 px-4 rounded-lg bg-darkNavyBlue text-pureWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
      />
    </div>
  );
}
