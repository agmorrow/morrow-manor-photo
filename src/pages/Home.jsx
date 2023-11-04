import React from "react";
import MMImg from "../assets/images/mm.png";
import IMG_0275 from "../assets/images/IMG_0275.jpg";
import IMG_0373 from "../assets/images/IMG_0373.jpg";
import IMG_0548 from "../assets/images/IMG_0548.jpg";
import IMG_0615 from "../assets/images/IMG_0615.jpg";
import IMG_0736 from "../assets/images/IMG_0736.jpg";
// import IMG_9987 from "../assets/images/IMG_9987.jpg";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Home = () => {
  return (
    <div>
      <div className="w-full flex-auto">
        <div className="lg:px-8 justify-start">
          <div className="max-w-2xl py-24">
            <img src={MMImg} className="max-w-4xl" />
          </div>
          <div>
            <div className="-my-4 flex align-center justify-center gap-5 overflow-hidden py-4 sm:gap-8">
              <div className="relative w-72 h-64 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-96 sm:rounded-2xl rotate-2">
                <img
                  alt=""
                  loading="lazy"
                  width="10000"
                  height="8000"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  sizes="(min-width: 640px) 24rem, 18rem"
                  src={IMG_0548}
                />
              </div>
              <div className="relative aspect-[10/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img
                  alt=""
                  loading="lazy"
                  width="3744"
                  height="4680"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  src={IMG_0736}
                />
              </div>

              <div className="relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                  alt=""
                  loading="lazy"
                  width="5760"
                  height="4320"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  src={IMG_0373}
                />
              </div>

              <div className="relative w-72 h-64 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-96 sm:rounded-2xl -rotate-2">
                <img
                  alt=""
                  loading="lazy"
                  width="10000"
                  height="8000"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  sizes="(min-width: 640px) 24rem, 18rem"
                  src={IMG_0615}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Works */}

      {/* Review */}

      {/* Services */}
    </div>
  );
};

export default Home;
