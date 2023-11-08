import React from "react";
import "@/css/index.css";

const createPage = () => {
  return (
    <>
      <div>
        <div className="container relative h-[100vh]">
          <div className="mb-[20px] w-[100%] max-w-[710px] mt-[60px] flex flex-col items-center">
            {/* <div className="relative max-w-[100%] w-[82%]"> */}
            <div>Create a prompt</div>
            <div className="individualPromptElement w-[100%] !mt-2 promptElement flex flex-col">
              <div className="w-[100%]">
                <form className="flex flex-col justify-between text-center h-[66%] max-w-[95%] relative l;eft-[calc(50%-200px)]">
                  <input
                    className="!ml-0 form-input"
                    type="text"
                    placeholder="Title"
                    id="fname"
                    name="fname"
                  />
                  <input
                    className="!ml-0 mt-4 form-input"
                    placeholder="Category Tags"
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <select className="mt-4 text-[grey]">
                    <option value="Bot">Bot</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                  <div className="mt-4">
                    <label for="muhRadio1">
                      <input type="radio" className="!mr-[7px]" />
                      Brand
                    </label>
                    <input
                      className="!ml-[20px] !mt-0 min-w-[82%] form-input"
                      type="text"
                      placeholder="Brand Name"
                      id="fname"
                      name="fname"
                    />
                  </div>
                </form>
              </div>
              <hr className="!text-[black] !bg-[black] mt-5 !w-[100%]"></hr>
              <div
                contentEditable="true"
                className="askAITextBox textBox !p-[10px] mt-[15px] overflow-y-scroll !pr-[30px]"
                data-ph="Write your custom prompt here"
              />
            </div>

            <button data-content="Create!" className="!left-0 display-button">
              Create!
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default createPage;
