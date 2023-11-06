import React from "react";
import "@/css/index.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";

const individualPrompt = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <div className="container">
          <div className="mb-[20px] max-w-[100%] mt-[60px]">
            <div className="relative">
              <div className="individualPromptElement promptElement flex flex-col">
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
                <hr className="!text-[black] !bg-[black] mt-2 !w-[100%]"></hr>
                <div className="max-w-[100%]">
                  <form className="flex flex-col justify-between text-center h-[66%] max-w-[100%] relative l;eft-[calc(50%-200px)]">
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        Going to
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="lname" className="form-label">
                        Going from
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="lname"
                        name="lname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        How many days?
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        Date Range
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        With whom
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        In the mood for
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        Must have
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        Good to have
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <label for="fname" className="form-label">
                        Get creative
                      </label>
                      <input
                        className="ml-10 form-input"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <button data-content="Ask my AI!" className="display-button">
                Ask my AI!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default individualPrompt;
