import classNames from "classnames";
import Tile from "./Tile";

export default function Gallery() {
  return (
    <div className={classNames("grid grid-cols-1 gap-4", "md:grid-cols-3")}>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}
