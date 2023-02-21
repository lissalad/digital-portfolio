import { useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import PortfolioButton from "../components/PortfolioButton";
import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Colors from "../components/Colors/Colors";

const Home = () => {
  return (
    <main classnames="">
      <Gallery />
    </main>
  );
};

export default Home;
