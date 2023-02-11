import { useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import PortfolioButton from "../components/PortfolioButton";
import Gallery from "../components/Gallery";
import Colors from "../components/Colors/Colors";

const About = () => {
  return (
    <main classnames="">
      <div className={classNames("flex flex-col items-center md:flex-row")}>
        <Image
          src="/images/selfportrait.png"
          alt="self portrait"
          height="200"
          width="400"
          className="md:w-[300px] w-48 -mb-[1px]"
        />
        <div
          className={classNames(
            "md:mx-12 md:mt-16 bg-stone-50/40 rounded-3xl py-4 px-4 pb-6"
          )}
        >
          <h1 className="text-4xl mb-6 text-center">My name is lissa.</h1>
          <p className="text-md indent-5 max-w-[600px] md:text-lg">
            I am an artist currently studying computer science at Dominican
            University of California. From photography to drawing to music to
            web design, I am all about creativity. I am always exploring new
            ways to express myself.
          </p>
          <p></p>
        </div>
      </div>

      {/* <div className={classNames("md:mt-16")}>
        <h1 className="text-4xl mb-8">I like to make stuff.</h1>
        <p>
          While isolating for quarantine, I got into jewelry making. Like,
          really into it. I have a few things for sale in my Etsy shop!
        </p>
        <p></p>
      </div> */}
    </main>
  );
};

export default About;
