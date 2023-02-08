import classNames from "classnames";

export default function Sidebar() {
  return (
    <div
      className={classNames(
        "md:fixed h-full w-[400px] left-0 bg-stone-800 p-6"
      )}
    >
      {/* <img src="images/selfportrait.png" className="bottom-0 absolute px-8" /> */}
      <div className={classNames("flex flex-col text-stone-100")}>
        <h1 className={classNames("text-6xl")}>Lissa</h1>
        <ul className="space-y-5 my-6 text-md">
          <li>arts & crafts & code person</li>
          <li>
            currently studying computer science @ <br /> Dominican University of
            California
          </li>
        </ul>
      </div>
    </div>
  );
}
