import classNames from "classnames";
import Tile from "./Tile";
import data from "/works.json";

export default function Gallery() {
  return (
    <div className={classNames("gallery", "")}>
      {data.map((work, i) => (
        <Tile key={i} work={work} />
      ))}
    </div>
  );
}
