import { FaqAccordion } from "./FaqAccordion";

const FAQSection = () => {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl">
      <div className="space-y-28">
        <div className="space-y-6 text-center">
          <h2 className="text-5xl font-bold">
            Your Questions,{" "}
            <span className="yellow-gradient-text">Answered</span>
          </h2>
          <h4 className="text-2xl">Get Insights on Popular Inquiries</h4>
        </div>

        <div className="mx-auto max-w-6xl">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
