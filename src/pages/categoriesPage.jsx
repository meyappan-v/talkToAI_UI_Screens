import React from "react";
import "@/css/index.css";
import NavBar from "@/Components/NavBar";
import Link from "next/link";
import Footer from "@/components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StarIcon from "@mui/icons-material/Star";

const categoriesPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <div className="container max-w-[100%]">
          <div className="categoryNavigationParent max-w-[100%]">
            <div className=" mt-5 tracking-[1px]">
              Category Selected : ITINERARY
            </div>
            <div className="select-category mt-4">
              <SearchIcon className="absolute left-[2px] text-25px top-1" />
              <div
                contentEditable={true}
                type="text"
                className="tracking-[1px] h-[30px] border-solid max-w-[100%] rounded-md border-black border-2 bg-white w-[710px] px-7 pt-1 pb-1.5 box-border"
                data-ph="Search prompts"
              ></div>
              <MicIcon className="absolute right-0 text-25px top-1" />
            </div>
          </div>
          <div className="promptsBox mt-[80px]">
            <div className="flex justify-between">
              <div className=" mt-[20px] underline text-left tracking-[1px]">
                Top results for 'ITINERARY' category:
              </div>
              <FilterAltIcon className="relative text-right text-[30px] top-[15px]" />
            </div>
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
                  <div className="no-of-downloads tracking-[1px]">
                    92313 times
                  </div>
                </div>
                <Link
                  href="/individualPrompt"
                  className="prompt-heading no-underline text-inherit tracking-[1px]"
                >
                  PLAN TRIPS LIKE A PRO!
                </Link>
                <div className="text-[14px] mt-[10px]">
                  You can plan your trips easily. You can plan your trips
                  easily. You can plan your trips easily. easily. You can plan
                  your trips easily.
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
                  You can plan your trips easily. You can plan your trips
                  easily. You can plan your trips easily. easily. You can plan
                  your trips easily.
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
                  You can plan your trips easily. You can plan your trips
                  easily. You can plan your trips easily. easily. You can plan
                  your trips easily.
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
            <div className="customSearch flex flex-col justify-evenly text-center relative mt-5">
              <div>
                <Link
                  className=" text-center  no-underline text-[blue]"
                  href="/"
                >
                  Load full list
                </Link>
                <KeyboardArrowDownIcon className="relative text-[blue] top-[6px] text-[24px]" />
              </div>
              <div className="relative mt-5 left-4 text-left">
                Can't find a prompt for your needs?
              </div>
              <div className=" relative left-4 text-left flex flex-col justify-evenly h-[60px]">
                <Link className=" underline text-[blue]" href="/">
                  Custom Search
                </Link>
                <Link className=" underline text-[blue]" href="/">
                  Create new prompt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default categoriesPage;
