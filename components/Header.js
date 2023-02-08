import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <div
        className={classNames(
          "w-full py-4 border-b-4 border-teal-200 text-teal-900 text-xl  font-semibold flex flex-row justify-between",
          "md:text-2xl md:tracking-widest"
        )}
      >
        <h1>lissa</h1>
        <div className="flex flex-row space-x-8 font-normal">
          {/* <Link href="/">contact</Link> */}
          {/* <Link href="/index">about</Link> */}
          <p>contact</p>
          <p>about</p>
        </div>
      </div>
    </Link>
  );
}
