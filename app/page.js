import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-full px-5 md:px-0 text-xs md:text-base lg:w-full lg:h-64">
        <div className="font-bold text-2xl flex md:gap-20 gap-2 md:text-2xl lg:text-5xl justify-center items-center lg:gap-8">
          Get Me A Chai
          <span>
            <img className="w-16 invertImg" src="/tea.gif" alt="" />
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <p className="text-center xl:w-[50%] lg:w-[60%] sm:text-center md:w-[80%]">
          Get Me A Chai is a crowdfunding platform for creators. We help you get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-4">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 ">Start Here</button>
          </Link>
          <Link href={"/creators"}>
            <button type="button" className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 ">Find Creators</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 ">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 my-5"></div>

      <div className="text-white container mx-auto pb-5">
        <h2 className="text-3xl font-semibold text-center my-12 mx-2 md:font-bold ">Your Fans can Buy you a Chai</h2>
        <div className="flex gap-5 justify-around md:flex-row flex-col">
          <div className="item space-y-3 flex flex-col items-center">
            <img className="w-16 bg-slate-400 rounded-full p-1 text-black" src="/man.gif" alt="" />
            <p className="">Your Fans want to help </p>
            <p className="text-center">Your Fans are available for you to help you. </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="w-16 bg-slate-400 rounded-full p-1 text-black" src="/coin.gif" alt="" />
            <p className="">Your Fans want to help </p>
            <p className="text-center">Your Fans are available for you to help you. </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="w-16 bg-slate-400 rounded-full p-1 text-black" src="/group.gif" alt="" />
            <p className="">Your Fans want to help </p>
            <p className="text-center">Your Fans are available for you to help you. </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 my-5"></div>

      <div className="text-white container mx-auto pb-7 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center my-12">Learn more about us</h2>
        <iframe width="90%" height="auto" className="md:w-[550] md:h-[315] rounded-lg" src="https://www.youtube.com/embed/QtaorVNAwbI?si=ciz6hRMpr2OUtWJ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </>
  );
}
