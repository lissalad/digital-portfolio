import { useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import PortfolioButton from "../components/PortfolioButton";

const Home = () => {
  return (
    <div classnames="h-full flex justify-center items-center">
      <div
        className={classNames(
          "flex flex-row w-full border-b-[22px] border-teal-700 items-center justify-center space-x-12"
        )}
      >
        <img
          src="images/selfportrait.png"
          className="w-44 md:w-[500px] -my-0.5"
        />
        {/* <h1 className={classNames("text-5xl w-48 text-teal-900")}>
          arts & <br />
          crafts &<br /> code
        </h1> */}
        <div
          className={classNames("flex flex-col items-center text-stone-600")}
        >
          <h1 className={classNames("text-3xl text-center mb-3")}>hi there!</h1>
          <h2 className={classNames("text-6xl")}>I'm Lissa.</h2>
          <ul className="space-y-5 my-12 text-xl text-center">
            <li>arts & crafts & code person</li>
            <li>
              currently studying computer science @ <br /> Dominican University
              of California
            </li>
          </ul>
          <PortfolioButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
