import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <div
        className={classNames(
          "w-full bg-teal-50 p-5 text-teal-700 text-2xl font-semibold border-b-4 border-teal-700/20"
        )}
      >
        lissa
      </div>
    </Link>
  );
}
