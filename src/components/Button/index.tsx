import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const handleClick = () => {
    alert("clicked!");
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
