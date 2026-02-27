import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-[35vh]">
        <div className="font-bold text-4xl flex gap-2 items-center">Get Me A Chai <span><img className="w-16" src="/tea.gif" alt="" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-4">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 ">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-.2.5 text-center leading-5 ">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 my-5"></div>

      <div className="text-white container mx-auto pb-5">
        <h2 className="text-3xl font-bold text-center my-12">Your Fans can Buy you a Chai</h2>
        <div className="flex gap-5 justify-around ">
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

      <div className="text-white container mx-auto pb-5 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center my-12">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=ciz6hRMpr2OUtWJ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </>
  );
}
