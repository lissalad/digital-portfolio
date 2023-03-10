import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Work from "./Work";
import CloseButton from "./CloseButton";
import { PlayIcon } from "./Icons";

export default function Tile({ work }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ----------------------------------------------------------------------------------- */}

      <div className={classNames("tile")}>
        <Image
          src={"/images/" + work.filename}
          alt={work.title}
          width="450"
          height="450"
          className="tile-image rounded-xl shadow-md transition-all transition-duration-500 hover:brightness-75 hover:shadow-xl"
          onClick={() => setIsOpen(true)}
        />
        {work.type === "video" ? (
          <div className="absolute">
            <PlayIcon />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* ----------------------------------------------------------------------------------- */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={classNames(
          "bg-stone-900/90 backdrop-blur transition-all transition-duration-500 fixed top-0 h-full w-full flex items-center justify-center"
        )}
      >
        <div
          className={classNames(
            "bg-teal-900 text-teal-50 fixed md:m-0 rounded-xl shadow-2xl ",
            " md:m-2 md:max-w-[90vw] md:max-h-[95vh] md:h-fit"
          )}
        >
          <Dialog.Panel
            className={classNames(
              "flex flex-col-reverse items-center md:flex-row "
            )}
          >
            {/* ------------- info ----------------------------- */}
            <div className="py-8 md:py-10 px-5 md:px-10 text-left flex flex-col">
              <Dialog.Title className="text-xl mb-6 md:text-6xl md:text-left">
                {/* <a className="" href={work.link}> */}
                {work.title}
                {/* </a> */}
              </Dialog.Title>
              <Dialog.Description
                className={classNames(
                  "space-y-12 text-sm md:text-md md:w-[400px]"
                )}
              >
                <p>{work.description}</p>
                <p className="text-stone-200 text-center text-xs md:text-left md:text-sm">
                  made in {work.when} with {work.madeWith}
                </p>
              </Dialog.Description>
            </div>

            {/* ------------- image ----------------------------- */}

            <div>
              {work.videoLink ? (
                <iframe
                  src={work.videoLink}
                  frameborder="0"
                  className={classNames(
                    "max-h-[50vh] w-auto",
                    "md:min-w-[30vw] md:max-h-[90vh] md:min-h-[400px] md:w-auto md:rounded-b-xl md:rounded-l-sm"
                  )}
                ></iframe>
              ) : (
                <Image
                  src={"/images/" + work.filename}
                  alt={work.title}
                  width="400"
                  height="400"
                  className={classNames(
                    "rounded-xl rounded-sm shadow-md max-h-[50vh] w-auto",
                    "md:min-w-[30vw] md:max-h-[90vh] md:min-h-[400px] md:w-auto md:rounded-b-xl md:rounded-l-sm"
                  )}
                />
              )}
            </div>
            <button
              className={classNames(
                "absolute top-2 left-2 md:top-5 md:left-5 hover:bg-stone-300/60 rounded-xl p-1 transition-all"
              )}
              onClick={() => setIsOpen(false)}
            >
              <CloseButton />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
