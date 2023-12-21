import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuFileText } from "react-icons/lu";
import advantageIcon from "@/assets/icons/advantage.svg";

const AdvantagesSection = () => {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl space-y-16">
      <h2 className="yellow-gradient-text py-2 text-center text-5xl font-bold ">
        Advantages
      </h2>

      <div className="grid grid-cols-1 place-items-start gap-8 lg:grid-cols-2">
        <div className="rounded-[30px] bg-gradient-to-b from-[#0028fa0f] to-[#0c03750d]">
          <div className="flex flex-col gap-[30px] p-8">
            <div className="flex items-center gap-5">
              <Image src={advantageIcon} alt="" />
              <h2 className="text-5xl font-bold">
                Before <span className="yellow-gradient-text">the course</span>
              </h2>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Limited Mindset</h5>
              <p className="text-lg">
                Struggling with a habit of saving every dollar, leading to a
                scarcity mindset.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Unrealized Dreams</h5>
              <p className="text-lg">
                Constantly dreaming and wishing, yet trapped in a cycle of
                financial stagnation.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Risk Aversion</h5>
              <p className="text-lg">
                Hesitation to take financial risks, missing out on significant
                opportunities.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Limited Belief</h5>
              <p className="text-lg">
                Doubting the existence of amazing opportunities, leading to a
                lack of exploration and growth.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Isolation</h5>
              <p className="text-lg">
                Hesitating to engage with successful individuals, limiting
                personal and financial grow
              </p>
            </div>

            <button className="from-lightYellow to-darkYellow text-primary grid w-full place-items-center whitespace-nowrap rounded-full bg-gradient-to-r text-sm font-medium ">
              <Link
                href={"/"}
                className="flex items-center gap-[10px] px-6 py-3"
              >
                <p>Make a First Step to Change</p>
                <LuArrowUpRight size={18} className="text-primary" />
              </Link>
            </button>
          </div>
        </div>
        <div className="rounded-[30px] bg-gradient-to-b from-[#45ffa61f] to-[#1e806514]">
          <div className="flex flex-col gap-[30px] p-8">
            <div className="flex items-center gap-5">
              <Image src={advantageIcon} alt="" />
              <h2 className="text-5xl font-bold">
                After <span className="yellow-gradient-text">the course</span>
              </h2>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Abundance Mindset</h5>
              <p className="text-lg">
                Transition from saving out of fear to spending and investing
                with confidence and purpose. Emphasis on shifting from a
                scarcity mindset to one of abundance, enabling more significant
                financial decisions.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Realizing Dreams</h5>
              <p className="text-lg">
                Turning dreams into actionable goals, leading to tangible
                achievements and success.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Risk Aversion</h5>
              <p className="text-lg">
                Hesitation to take financial risks, missing out on significant
                opportunities.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Networking with Success</h5>
              <p className="text-lg">
                Engaging with successful individuals, gaining insights, and
                expanding your financial horizons.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">
                Strategic Wealth Management
              </h5>
              <p className="text-lg">
                Participants will learn to transition from saving out of fear to
                confidently making investments and spending wisely. You&apos;ll
                learn effective strategies for managing and increasing wealth.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Entrepreneurial Leadership</h5>
              <p className="text-lg">
                The course offers insights into leading and growing successful
                companies.
              </p>
            </div>
            <div className="space-y-[10px]">
              <h5 className="text-2xl font-bold">Networking and Influence</h5>
              <p className="text-lg">
                The course highlights the importance of engaging with successful
                individuals and expanding financial and personal growth
                networks.
              </p>
            </div>

            <button className="yellow-gradient-bg text-primary grid w-full place-items-center whitespace-nowrap  rounded-full text-sm font-medium ">
              <Link
                href={"/"}
                className="flex items-center gap-[10px] px-6 py-3"
              >
                <p className="text-base">Sign Up & Save 10%*</p>
                <LuArrowUpRight size={18} className="text-primary" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
