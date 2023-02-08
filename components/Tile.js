import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Work from "./Work";
import CloseButton from "./CloseButton";

export default function Tile({ work }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ----------------------------------------------------------------------------------- */}

      <div className={classNames("h-fit w-fit")}>
        <Image
          src={"/images/" + work.filename}
          alt={work.title}
          width="450"
          height="450"
          className="rounded-xl shadow-md transition-all transition-duration-500 hover:brightness-75 hover:shadow-xl"
          onClick={() => setIsOpen(true)}
        />
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
            "bg-teal-900 text-teal-50 fixed m-2 md:m-0 rounded-xl shadow-2xl md:max-w-[90vw]"
          )}
        >
          <Dialog.Panel
            className={classNames(
              "flex flex-col-reverse items-center md:flex-row "
            )}
          >
            {/* ------------- info ----------------------------- */}
            <div className="py-10 px-5 md:px-10 text-left flex flex-col">
              <Dialog.Title className="text-4xl mb-6 md:text-6xl md:text-left hover:text-teal-200 transition-all">
                <a className="" href={work.link}>
                  {work.title}
                </a>
              </Dialog.Title>
              <Dialog.Description
                className={classNames("space-y-12 text-md md:w-[400px]")}
              >
                <p>{work.description}</p>
                <p className="text-stone-200 text-center md:text-left text-sm mb-12">
                  made in {work.when} with {work.madeWith}
                </p>
              </Dialog.Description>
            </div>

            {/* ------------- image ----------------------------- */}

            <div>
              <Image
                src={"/images/" + work.filename}
                alt={work.title}
                width="400"
                height="400"
                className={classNames(
                  "rounded-xl rounded-b-sm shadow-md max-h-[50vh] w-auto",
                  " md:max-w-[60vw] md:rounded-b-xl md:rounded-l-sm md:max-h-[90vh] md:min-w-[40vw]"
                )}
              />
            </div>

            <button
              className={classNames(
                "absolute top-5 left-5 hover:bg-stone-300/60 rounded-xl p-1 transition-all"
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
