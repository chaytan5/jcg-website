import Image from "next/image";
import sphereOld from "@/assets/images/sphere.png";

const InfoSection = () => {
  return (
    <section className="relative">
      <div className="left-0 top-0 hidden h-[400px] w-[400px] md:absolute md:block">
        <Image src={sphereOld} alt="Sphere background" />
      </div>
      <div className="relative z-10 mx-auto hidden w-11/12 max-w-screen-xl flex-col gap-16 md:flex">
        <h2 className="text-center text-5xl font-bold">Key information</h2>
        <div className="grid grid-cols-2 place-items-center gap-4 divide-white/30  py-7 text-center lg:grid-cols-4 lg:gap-0 lg:divide-x-2">
          <div className="pr-6">
            <div className="from-lightYellow to-darkYellow space-y-2 rounded-2xl bg-gradient-to-r p-4">
              <h4 className="text-primary text-3xl font-bold">*10% discount</h4>
              <p className="text-primary/50 text-lg font-semibold">
                Exclusive 10% Discount for the First 50 Enrollees!
              </p>
            </div>
          </div>
          <div className="space-y-2 px-6">
            <h4 className="yellow-gradient-text text-3xl font-bold">
              11 lessons
            </h4>
            <p className=" text-lg font-medium leading-7">
              Instant access to all lessons covering diverse financial topics
            </p>
          </div>
          <div className="space-y-2 px-6">
            <h4 className=" from-lightYellow to-darkYellow bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
              PDF Summaries
            </h4>
            <p className=" text-lg font-medium leading-7">
              Convenient summaries in PDF format provided after each lesson
            </p>
          </div>
          <div className="space-y-2 pl-6">
            <h4 className=" from-lightYellow to-darkYellow bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
              Unlimited Access
            </h4>
            <p className=" text-lg font-medium leading-7">
              Lifetime access to all course materials, including video content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
