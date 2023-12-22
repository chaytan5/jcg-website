"use client";
import { topics } from "@/data/lessonTopics";
import advantageIcon from "@/assets/icons/advantage.svg";
import Image from "next/image";
import useMatchMedia from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { LuArrowDown } from "react-icons/lu";

const TopicsSection = () => {
  const isMobile = useMatchMedia(640);
  const [currentTopics, setCurrentTopics] = useState(
    isMobile ? topics.slice(0, 4) : topics,
  );

  useEffect(() => {
    setCurrentTopics(isMobile ? topics.slice(0, 3) : topics);
  }, [isMobile]);

  function loadMoreTopics() {
    setCurrentTopics(topics);
  }

  return (
    <section className="mx-auto w-11/12 max-w-screen-xl">
      <div className="space-y-16">
        <div className="space-y-6 text-center">
          <h2 className="text-[42px] font-bold leading-[46px] md:text-6xl ">
            <span className="yellow-gradient-text">Lesson Topics</span> Covered
            by James
          </h2>
          <h4 className="text-xl md:text-2xl">
            Explore the Key Subjects and Insights James Discusses
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentTopics.map((topic) => (
            <div
              key={topic?.name}
              className="gray-gradient rounded-4xl flex flex-row gap-5 p-[30px]  md:flex-col"
            >
              <div className="h-8 w-8 flex-shrink-0 md:h-12 md:w-12">
                <Image src={advantageIcon} alt="Star icon" />
              </div>
              <div className="space-y-4">
                <h4 className="yellow-gradient-text text-2xl font-bold">
                  {topic?.name}
                </h4>
                <p className="text-balance text-lg">{topic?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {isMobile && currentTopics.length !== 14 ? (
          <div className="mx-auto flex w-fit gap-2" onClick={loadMoreTopics}>
            <p className="yellow-gradient-text text-sm">Load More</p>
            <LuArrowDown className="text-secondary" size={18} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default TopicsSection;
