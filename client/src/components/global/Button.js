// components/Button.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, to, styleType = "primary" }) {
  const baseStyles =
    "font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300";

  const styles = {
    primary: `${baseStyles} bg-neonMintGreen text-darkNavyBlue hover:bg-green-500`,
    secondary: `${baseStyles} bg-darkNavyBlue text-pureWhite hover:bg-gray-800`,
  };

  return (
    <Link to={to}>
      <button className={styles[styleType]}>{text}</button>
    </Link>
  );
}
