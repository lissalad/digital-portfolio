import classNames from "classnames";
import Tile from "./Tile";
import data from "/works.json";

export default function Gallery() {
  return (
    <div className={classNames("gallery", "")}>
      {data
        .sort((a, b) => {
          return b.when - a.when;
        })
        .map((work, i) => (
          <Tile key={i} work={work} />
        ))}
    </div>
  );
}
