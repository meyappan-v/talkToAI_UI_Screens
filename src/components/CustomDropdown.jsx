import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Itinerary", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleMouseOver = (event) => {
    let iteration = 0;
    const originalText = event.target.innerText;

    const interval = setInterval(() => {
      const newText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random letter a-z
        })
        .join("");

      event.target.innerText = newText;

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration++;
    }, 90);

    event.target.onmouseout = () => {
      clearInterval(interval);
      event.target.innerText = originalText;
    };
  };

  return (
    <div className="select-category mt-[20px]">
      <SearchIcon className="searchIcon" />

      <div className="custom-dropdown">
        <div className="dropdown-header my-1" onClick={toggleDropdown}>
          {selectedOption || "Select an option"}
        </div>
      </div>
      <ArrowDropDownIcon
        className="absolute dropdownIcon"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <Link className="no-underline" href={`/categoriesPage`} key={index}>
              <div
                key={index}
                className="dropdown-option "
                onClick={() => selectOption(option)}
                onMouseOver={handleMouseOver}
              >
                {option}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
