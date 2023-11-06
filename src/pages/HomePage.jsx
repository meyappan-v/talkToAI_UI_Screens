"use client";
import React from "react";
import "@/css/index.css";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomDropdown from "@/components/CustomDropdown";

const HomePage = () => {
  const router = useRouter();
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    switch (selectedCategory) {
      case "itinerary":
        router.push("/categoriesPage");
        break;
      case "category2":
        router.push("/category2-url");
        break;
      case "category3":
        router.push("/category3-url");
        break;
      default:
        break;
    }
  };
  return (
    <div className="container w-[100%]">
      <div className="search-box max-w-[710px]">
        <div className="search-text">
          <p className="search-prompt text-black">What's on your mind?</p>
          <div
            contentEditable="true"
            type="text"
            className="textBox"
            data-ph="You can ask the Supersede AI to help you find the right prompts for you. It will suggest ranked and sponsored prompts to make your AI search easier."
          />
        </div>

        <button data-content="Display Prompts" className="display-button">
          Display Prompts
        </button>
        <hr className="w-[100%]"></hr>
        {/* <div className="select-category mt-[20px]"> */}
        {/* <SearchIcon className="searchIcon" /> */}

        {/* <select
            id="category"
            className="category-select"
            onChange={handleCategoryChange}
          >
            <option value="" disabled selected>
              Search category
            </option>
            <option value="itinerary">Itinerary</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select> */}

        <CustomDropdown />
        {/* <ArrowDropDownIcon className="absolute dropdownIcon" /> */}
        {/* </div> */}
        <div className="no-category-text text-[16px] tracking-[1px] mt-[20px]">
          Can't find your category?
        </div>
        <Link
          href="/"
          className="view-category-link underline text-[16px] tracking-[1px]"
        >
          View all categories
        </Link>
        <Link
          href="/"
          className=" create-category-link underline text-[16px] tracking-[1px]"
        >
          Create a new category and prompt
        </Link>
      </div>

      <div className="promptsBox mt-[100px]">
        <div className=" underline tracking-[1px]">Popular prompts:</div>
        <div className="prompts-container">
          <div className="promptElement ">
            <div className="Rank pl-1">Rank #1</div>
            <div className="flex justify-between">
              <div className="starIcon">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className="no-of-downloads tracking-[1px]">92313 times</div>
            </div>
            <Link
              href="/individualPrompt"
              className="prompt-heading no-underline text-inherit tracking-[1px]"
            >
              PLAN TRIPS LIKE A PRO!
            </Link>
            <div className="text-[14px] mt-[10px]">
              You can plan your trips easily. You can plan your trips easily.
              You can plan your trips easily. easily. You can plan your trips
              easily.
            </div>
            <div className="prompt-details tracking-[1px]">
              <div className="no-of-search-parameters">
                Search Parameters: 7
              </div>
              <div className="text-right relative bottom-[19px]">
                <div className="artist">By </div>
                <Link className=" text-[blue]" href="/">
                  travelholic_23
                </Link>
              </div>
            </div>
          </div>
          <div className="promptElement ">
            <div className="Rank pl-1">Rank #1</div>

            <div className="flex justify-between">
              <div className="starIcon">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className="no-of-downloads">92313 times</div>
            </div>
            <div className="prompt-heading">PLAN TRIPS LIKE A PRO!</div>

            <div className="text-[14px] mt-[10px]">
              You can plan your trips easily. You can plan your trips easily.
              You can plan your trips easily. easily. You can plan your trips
              easily.
            </div>
            <div className="prompt-details">
              <div className="no-of-search-parameters">
                Search Parameters: 7
              </div>
              <div className="text-right relative bottom-[19px]">
                <div className="artist">By </div>
                <Link className=" text-[blue]" href="/">
                  travelholic_23
                </Link>
              </div>
            </div>
          </div>
          <div className="promptElement ">
            <div className="Rank pl-1">Rank #1</div>

            <div className="flex justify-between">
              <div className="starIcon">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className="no-of-downloads">92313 times</div>
            </div>
            <div className="prompt-heading">PLAN TRIPS LIKE A PRO!</div>

            <div className="text-[14px] mt-[10px]">
              You can plan your trips easily. You can plan your trips easily.
              You can plan your trips easily. easily. You can plan your trips
              easily.
            </div>
            <div className="prompt-details">
              <div className="no-of-search-parameters">
                Search Parameters: 7
              </div>
              <div className="text-right relative bottom-[19px]">
                <div className="artist">By </div>
                <Link className=" text-[blue]" href="/">
                  travelholic_23
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link className="   no-underline text-[blue]" href="/">
            Load full list
          </Link>
          <KeyboardArrowDownIcon className="relative text-[blue] top-[6px] text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
