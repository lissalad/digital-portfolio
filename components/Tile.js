import classNames from "classnames";
import Image from "next/image";

export default function Tile({ work }) {
  return (
    <div className={classNames("h-fit w-fit ")}>
      <Image
        src={"/images/" + work.filename}
        alt={work.title}
        width="450"
        height="450"
        className="rounded-xl shadow-md transition-all transition-duration-500 hover:brightness-75 hover:shadow-xl"
      />
    </div>
  );
}
