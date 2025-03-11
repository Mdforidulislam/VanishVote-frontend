import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-3 text-white text-lg font-medium rounded-lg transition duration-300 
                 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
};

export default Button;
