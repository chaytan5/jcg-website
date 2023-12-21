import { topics } from "@/data/lessonTopics";
import advantageIcon from "@/assets/icons/advantage.svg";
import Image from "next/image";

const TopicsSection = () => {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl">
      <div className="space-y-16">
        <div className="space-y-6 text-center">
          <h2 className="text-6xl font-bold ">
            <span className="yellow-gradient-text">Lesson Topics</span> Covered
            by James
          </h2>
          <h4 className="text-2xl">
            Explore the Key Subjects and Insights James Discusses
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <div
              key={topic?.name}
              className="gray-gradient rounded-4xl space-y-5 p-[30px]"
            >
              <div>
                <Image src={advantageIcon} alt="" />
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
      </div>
    </section>
  );
};

export default TopicsSection;
