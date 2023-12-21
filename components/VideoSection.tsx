import React from "react";

const VideoSection = () => {
  return (
    <section className="relative z-10 mx-auto w-11/12 max-w-screen-xl space-y-16">
      <div className="space-y-6 text-center">
        <h2 className="text-balance text-[42px] font-bold md:text-6xl">
          Welcome to my world of{" "}
          <span className="yellow-gradient-text">entrepreneurship</span> and{" "}
          <span className="yellow-gradient-text">abundance</span>!
        </h2>

        <h5 className="mx-auto max-w-4xl text-balance text-2xl">
          Get a preview of what to expect by watching our dynamic course
          trailer. Feel the energy and passion James Crypto Guru brings to each
          lesson.
        </h5>
      </div>
      <div className="mx-auto h-[300px] max-w-[940px] overflow-hidden rounded-[30px] border border-white/50 md:h-[350px] lg:h-[530px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/75HZw-bk0M4?si=TerRT-lvDmRQVBZu"
          title="Laws of Money | James Crypto Guru"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
