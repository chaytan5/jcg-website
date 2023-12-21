const CourseInfoSection = () => {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl">
      <div className="space-y-10 text-center">
        <h2 className="text-5xl font-bold">
          Who <span className="yellow-gradient-text">This Course Is For</span>
        </h2>

        <div className="grid grid-cols-1 divide-white/30 md:grid-cols-2 md:divide-x">
          <div className="space-y-4 pr-8">
            <h4 className="yellow-gradient-text text-3xl font-bold">
              Aspiring Entrepreneurs
            </h4>
            <p className="text-balance text-lg">
              Individuals looking to start and grow their own businesses and
              want to get access to the main secret of success.
            </p>
          </div>
          <div className="space-y-4 pl-8">
            <h4 className="yellow-gradient-text text-3xl font-bold">
              Cryptocurrency & Stock Enthusiasts
            </h4>
            <p className="text-balance text-lg">
              Those interested in investing and trading in cryptocurrencies, but
              want to start it right.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-white/30 md:grid-cols-2 md:divide-x">
          <div className="space-y-4 pr-8">
            <h4 className="yellow-gradient-text text-3xl font-bold">
              Personal Development Seekers
            </h4>
            <p className="text-balance text-lg">
              People aiming to improve their financial mindset and personal
              growth.
            </p>
          </div>
          <div className="space-y-4 pl-8">
            <h4 className="yellow-gradient-text text-3xl font-bold">
              Wealth Management Professionals
            </h4>
            <p className="text-balance text-lg">
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
