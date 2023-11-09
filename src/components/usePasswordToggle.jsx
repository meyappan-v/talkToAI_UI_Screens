import { useState } from "react";

export const usePasswordToggle = (initialState = false) => {
  const [showPassword, setShowPassword] = useState(initialState);
  const [showConfirmPassword, setShowConfirmPassword] = useState(initialState);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return [
    showPassword,
    togglePasswordVisibility,
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  ];
};
