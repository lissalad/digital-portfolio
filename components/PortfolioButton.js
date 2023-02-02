import classNames from "classnames";
import Link from "next/link";

export default function PortfolioButton() {
  return (
    <Link href="/">
      <button
        className={classNames(
          "bg-yellow-300/80 text-yellow-800 border-4 border-yellow-200 text-xl px-12 py-2 rounded-lg hover:bg-yellow-400/80 hover:shadow-xl"
        )}
      >
        see some stuff I made
      </button>
    </Link>
  );
}
