import classNames from "classnames";
import Image from "next/image";

export default function Tile() {
  return (
    <div className={classNames("h-fit w-fit")}>
      <Image
        src="/images/instagram-logo.png"
        alt="lemon slice art"
        width="450"
        height="450"
        className="rounded-xl shadow-md hover:brightness-75 hover:shadow-xl transition-all transition-duration-500"
      />
    </div>
  );
}
