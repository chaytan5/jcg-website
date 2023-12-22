const CourseInfoSection = () => {
  return (
    <section className="relative mx-auto w-11/12 max-w-screen-xl">
      <div className="yellow-gradient-bg absolute inset-0 m-auto grid h-[350px] w-full place-items-center opacity-15 blur-[120px] md:hidden"></div>
      <div className="space-y-10 text-center">
        <h2 className="text-[42px] font-bold md:text-5xl">
          Who{" "}
          <span className="md:yellow-gradient-text text-balance text-white">
            This Course Is For
          </span>
        </h2>

        <div className="grid grid-cols-1 place-content-center place-items-center gap-[30px] divide-white/30 md:grid-cols-2 md:divide-x">
          <div className="space-y-4 md:pr-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
              Aspiring Entrepreneurs
            </h4>
            <p className="text-balance text-center  text-base md:text-lg">
              Individuals looking to start and grow their own businesses and
              want to get access to the main secret of success.
            </p>
          </div>
          <div className="space-y-4 md:pl-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
              Cryptocurrency & Stock Enthusiasts
            </h4>
            <p className="text-balance text-center text-base md:text-lg">
              Those interested in investing and trading in cryptocurrencies, but
              want to start it right.
            </p>
          </div>
        </div>

        <div className="h-[2px] w-full bg-white/30" />

        <div className="grid grid-cols-1 place-items-center gap-[30px] divide-white/30 md:grid-cols-2 md:divide-x">
          <div className="space-y-4 md:pr-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
              Personal Development Seekers
            </h4>
            <p className="text-balance text-center text-base md:text-lg">
              People aiming to improve their financial mindset and personal
              growth.
            </p>
          </div>
          <div className="space-y-4 md:pl-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
              Wealth Management Professionals
            </h4>
            <p className="text-balance text-center text-base md:text-lg">
              Those in finance seeking advanced wealth management and investment
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfoSection;
