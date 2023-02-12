import { useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import PortfolioButton from "../components/PortfolioButton";
import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Colors from "../components/Colors/Colors";
import { GithubIcon, LinkedInIcon } from "../components/Icons";

const Contact = () => {
  const linkStyle = "w-full hover:brightness-150 transition-all";
  return (
    <main classnames="">
      <div
        className={classNames(
          "flex flex-col text-center items-center justify-center p-12 border-8 border-teal-300 rounded-xl bg-teal-200/80 w-fit"
        )}
      >
        <div className="flex flex-col mb-8">
          <h1 className={classNames("text-3xl mb-4")}>Elissa Laymon</h1>
          <p>elissalaymon@gmail.com</p>
        </div>

        <div className={classNames("flex flex-row items-center space-x-6")}>
          <a className={linkStyle} href="https://github.com/lissalad">
            <GithubIcon />
          </a>
          <a
            className={linkStyle}
            href="https://www.linkedin.com/in/elissa-laymon/"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
