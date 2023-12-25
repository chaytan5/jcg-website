import { FaqAccordion } from "./FaqAccordion";

const FAQSection = () => {
  return (
    <section id="faq" className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32">
      <div className="space-y-10 md:space-y-28">
        <div className="space-y-6 text-center">
          <h2 className="hidden text-5xl font-bold md:block">
            Your Questions,{" "}
            <span className="yellow-gradient-text">Answered</span>
          </h2>

          {/* Mobile view */}
          <h2 className="block text-[42px] font-bold text-white md:hidden">
            Frequently Asked Questions
          </h2>
          <h4 className="hidden text-2xl md:block">
            Get Insights on Popular Inquiries
          </h4>
        </div>

        <div className="mx-auto max-w-6xl">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
