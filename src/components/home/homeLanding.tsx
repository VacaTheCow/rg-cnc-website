"use client";
import React, { useState } from "react";

const videoSources = ["/home/homeVidOne.mp4", "/home/homeVidTwo.mp4", "/home/homeVidThree.mp4"];

const BackgroundVideos: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      {/* Single Video Element */}
      <video
        key={currentVideoIndex} // Force re-render to reset video
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Left-aligned large text box */}
      <div
        className="
          relative z-10 flex flex-col justify-center
          backdrop-blur-none text-white bg-black/50
          border-blue-400 border-8 rounded-md
          p-4 md:h-3/6 h-1/2
          w-full md:w-[40%] max-w-[90%]
          mt-36 md:mt-52
          ml-6 md:ml-12 mb-7
        "
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Engineering Brilliance, <br /> Forging Success
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-bold">
          Precision engineering, expert craftsmanship, and a relentless commitment to quality.
        </p>
        <p className="text-xs sm:text-sm md:text-base font-bold">
          At RG Precision Machining, we combine cutting-edge technology with decades of
          craftsmanship. From prototyping to production, we turn your ideas into precision-engineered
          reality — delivering unmatched quality and reliability, every time.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideos;
