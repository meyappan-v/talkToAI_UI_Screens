import React from "react";
import "@/css/index.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CachedIcon from "@mui/icons-material/Cached";
import SendIcon from "@mui/icons-material/Send";

const promptResponse = () => {
  return (
    <>
      <div className="container max-w-[100%]">
        <div className="promptsBox mt-[80px]">
          <div className="prompts-container">
            <div>
              <div>Question</div>
              <div className="promptElement !p-0 !mt-1">
                <div className="overflow-auto h-[157px] p-[10px]">
                  <div className="text-[14px] mt-[10px]">
                    You can plan your trips easily. You can plan your trips
                    easily. You can plan your trips easily. easily. You can plan
                    your trips easily.You can plan your trips easily. You can
                    plan your trips easily. You can plan your trips easily.
                    easily. You can plan your trips easily.You can plan your
                    trips easily. You can plan your trips easily. You can plan
                    your trips easily. easily. You can plan your trips
                    easily.You can plan your trips easily. You can plan your
                    trips easily. You can plan your trips easily. easily. You
                    can plan your trips easily.You can plan your trips easily.
                    You can plan your trips easily. You can plan your trips
                    easily. easily. You can plan your trips easily.You can plan
                    your trips easily. You can plan your trips easily. You can
                    plan your trips easily. easily. You can plan your trips
                    easily.You can plan your trips easily. You can plan your
                    trips easily. You can plan your trips easily. easily. You
                    can plan your trips easily.You can plan your trips easily.
                    You can plan your trips easily. You can plan your trips
                    easily. easily. You can plan your trips easily.can plan your
                    trips easily. You can plan your trips easily. You can plan
                    your trips easily. easily. You can plan your trips easily.
                  </div>
                </div>
                <div
                  className="flex justify-between p-1 px-[10px] text-[14px]"
                  style={{ "border-top": "solid black" }}
                >
                  <div className=""> 11:08AM, Tuesday, November 7 2023</div>
                  <div className="">Prompt 234</div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div>AI Response</div>
              <div className="promptElement !p-0 !mt-1">
                <div className="overflow-auto h-[157px] p-[10px]">
                  <div className="text-[14px] mt-[10px]">
                    You can plan your trips easily. You can plan your trips
                    easily. You can plan your trips easily. easily. You can plan
                    your trips easily.You can plan your trips easily. You can
                    plan your trips easily. You can plan your trips easily.
                    easily. You can plan your trips easily.You can plan your
                    trips easily. You can plan your trips easily. You can plan
                    your trips easily. easily. You can plan your trips
                    easily.You can plan your trips easily. You can plan your
                    trips easily. You can plan your trips easily. easily. You
                    can plan your trips easily.You can plan your trips easily.
                    You can plan your trips easily. You can plan your trips
                    easily. easily. You can plan your trips easily.You can plan
                    your trips easily. You can plan your trips easily. You can
                    plan your trips easily. easily. You can plan your trips
                    easily.You can plan your trips easily. You can plan your
                    trips easily. You can plan your trips easily. easily. You
                    can plan your trips easily.You can plan your trips easily.
                    You can plan your trips easily. You can plan your trips
                    easily. easily. You can plan your trips easily.can plan your
                    trips easily. You can plan your trips easily. You can plan
                    your trips easily. easily. You can plan your trips easily.
                  </div>
                </div>
                <div
                  className="flex justify-between px-[10px] text-[14px]"
                  style={{ "border-top": "solid black" }}
                >
                  <div className="pt-[6px]">OpenAI-Chat-GPT 3.5</div>
                  <div className="pt-[4px]">
                    <ContentCopyIcon className="ml-3 text-[19px]" />
                    <ThumbUpIcon className="ml-3 text-[19px]" />
                    <ThumbDownIcon className="ml-3 text-[19px]" />
                  </div>
                </div>
              </div>
            </div>
            <button
              data-content="Alternate Response"
              className="display-button tracking-[1px] w-[180px] left-[calc(50%-90px)]"
            >
              <CachedIcon className="absolute left-[10px]" />
              <div className="ml-8">Alternate Response </div>
            </button>
          </div>
          <div className="width-[100%] relative flex items-center">
            <div
              contentEditable="true"
              className="askAITextBox textBox !h-[80px] !p-[10px] mt-[35px] overflow-y-scroll !pr-[30px]"
              data-ph="Ask more"
            />
            <SendIcon className="absolute right-2" />
          </div>
        </div>
        <div>Disclaimer</div>
      </div>
    </>
  );
};

export default promptResponse;
