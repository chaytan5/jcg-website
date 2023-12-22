"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Do you guarantee my results?",
    answer:
      "While I cannot guarantee specific results, as they greatly depend on individual effort and application, I do guarantee that I will provide you with all the necessary tools and knowledge to build confidence in your trading actions. If you apply the strategies and tools taught in the course diligently, you can expect to see results within the first week of participation.",
  },
  {
    question: "How long is each lesson?",
    answer:
      "Each lesson in the course is designed to be concise yet comprehensive, lasting between 12 to 20 minutes. The total duration of the course is approximately 3.2 hours, allowing for an in-depth exploration of the topics without overwhelming time commitment.",
  },
  {
    question: "Do I need prior investing experience?",
    answer:
      "No prior investing experience is required to benefit from this course. It is structured to cater to both beginners who are just starting out and experienced investors looking to enhance their skills and knowledge.",
  },
  ,
  {
    question: "Can I access the course material at any time?",
    answer:
      "Yes, once enrolled, students have full 24/7 access to all course materials. This allows you to learn at your own pace and revisit any section as often as needed for deeper understanding or reinforcement.",
  },
  ,
  {
    question: "Is there a community or forum for discussion?",
    answer:
      "Absolutely, students of this course gain access to an exclusive community. This platform is ideal for discussions, networking, sharing experiences, and seeking advice, making your learning journey collaborative and supported.",
  },
  ,
  {
    question: "What is this 10% discount about?",
    answer:
      "The first 50 people who sign up for early access to the course will receive a special 10% discount. This offer is a way of rewarding early birds for their eagerness and commitment to improve their financial literacy and trading skills. This discount makes the course more accessible while giving early enrollees the advantage of starting their learning journey ahead.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem
          className="gray-gradient rounded-4xl mb-[10px] gap-[30px] data-[state=open]:mb-[30px]"
          key={item?.question}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="yellow-gradient-text p-[30px] text-left text-2xl font-bold">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent className="px-[30px] pb-[30px] text-lg">
            {item?.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
