import classNames from "classnames";
import Tile from "./Tile";
import data from "/works.json";

export default function Gallery() {
  return (
    <div className={classNames("grid grid-cols-1 gap-4", "md:grid-cols-3")}>
      {data.map((work, i) => (
        <Tile key={i} work={work} />
      ))}
    </div>
  );
}
