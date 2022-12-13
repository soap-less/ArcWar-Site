import React from "react";
import TeamCarousel from "./TeamCarousel";

export default function Banner() {
  return (
    <div className="mx-auto max-w-screen-xl sm:px-2 sm:py-6">
      <div className="mx-auto max-w-3xl text-center ">
        <div className="">
          <img
            src="/FinalWordmark.svg"
            alt="logo"
            className="mx-auto w-[500px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-10 grid grid-cols-10">
            <div className="col-span-10">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
