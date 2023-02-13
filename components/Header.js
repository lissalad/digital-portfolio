import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  const navItem =
    "hover:text-teal-200 transition-all focus:text-teal-50 md:text-md";

  return (
    <div
      className={classNames(
        "w-full py-4 border-b-4 border-teal-200 text-teal-900 text-xl font-semibold flex flex-row justify-between",
        "md:text-2xl md:tracking-widest"
      )}
    >
      <Link href="/" className={navItem}>
        lissa
      </Link>
      <div className="flex flex-row space-x-8 font-normal">
        <Link href="/contact" className={navItem}>
          contact
        </Link>
        <Link href="/about" className={navItem}>
          about
        </Link>
      </div>
    </div>
  );
}
