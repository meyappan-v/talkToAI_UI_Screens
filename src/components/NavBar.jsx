import React from "react";
import "@/css/style.scss";
import "@/css/index.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <div className="w-[100%]">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=optional"
        rel="stylesheet"
      ></link>
      {/* <div className="content"> */}
      <div className="logo" data-text="SUPERSEDE">
        <Link style={{ textDecoration: "none", color: "inherit" }} href="/">
          <span style={{ cursor: "pointer" }}>SUPERSEDE</span>
        </Link>
      </div>
      {/* </div> */}
      <MenuIcon className=" absolute right-[0.5%] top-[0.5%] text-[34px]"></MenuIcon>
    </div>
  );
}
