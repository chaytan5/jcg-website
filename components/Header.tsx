"use client";
import Image from "next/image";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import jcgLogo from "@/assets/icons/jcg-logo.svg";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { SignUpDialog } from "./SignUpDialog";

const navLinks = [
  {
    title: "About James",
    link: "#about-james",
  },
  {
    title: "Trailer",
    link: "#trailer",
  },
  {
    title: "Pricing",
    link: "#pricing",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "Who is it for",
    link: "#who-is-it-for",
  },
  {
    title: "Topics",
    link: "#topics",
  },
  {
    title: "10% Discount Deal",
    link: "#discount-deal",
  },
  {
    title: "Who is it for",
    link: "#who-is-it-for",
  },

  {
    title: "FAQ",
    link: "#faq",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClose() {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  }

  function handleMenuOpen() {
    setMenuOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex w-11/12  items-center justify-between gap-2 py-6">
        <div className="flex items-center gap-2 sm:gap-14 md:gap-5">
          <div
            className="h-10 w-10 cursor-pointer rounded-full bg-black p-[10px]"
            onClick={handleMenuOpen}
          >
            <Image src={burgerIcon} alt="Open menu" />
          </div>
          <Link href={"/"}>
            <Image src={jcgLogo} alt="James Crypto Guru" />
          </Link>
        </div>
        <div className="flex items-center md:gap-4">
          <SignUpDialog>
            <button className="yellow-gradient-bg grid  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
              <div className="flex items-center gap-[10px] px-6 py-3">
                <p>Sign up for the course</p>
                <LuArrowUpRight size={18} className="text-primary" />
              </div>
            </button>
          </SignUpDialog>
          <button className="hidden place-items-center whitespace-nowrap  rounded-full bg-gunmetal text-sm  font-medium text-white md:grid">
            <Link
              href="https://www.youtube.com/@JamesCryptoGuru"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-[10px] px-6 py-3"
            >
              <p>James&apos;s Youtube</p>
              <LuArrowUpRight size={18} className="text-white" />
            </Link>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 h-full w-full bg-primary/90 backdrop-blur-sm ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={handleMenuClose}
      />
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 z-40 h-dvh w-full overflow-y-auto bg-[#0B0C0D] text-white transition-all duration-500  ease-out md:max-w-lg ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex h-full flex-col gap-14 whitespace-nowrap px-16 py-6 pb-10 text-white ">
          <div className="flex items-center gap-14">
            <div
              className="cursor-pointer rounded-full bg-black p-3"
              onClick={handleMenuClose}
            >
              <ImCross size={18} />
            </div>
            <Link href={"/"} onClick={handleMenuClose}>
              <Image src={jcgLogo} alt="JCG logo" />
            </Link>
          </div>

          <div>
            <ul className="text-sm font-medium">
              {navLinks.map((item, i) => (
                <Link key={i} href={item.link}>
                  <li onClick={handleMenuClose} className="py-3">
                    {item.title}
                  </li>
                </Link>
              ))}
              {/* <li>About James</li>
              <li>Trailer</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>Who is it for</li>
              <li>Topics</li>
              <li>10% Discount Deal</li>
              <li>FAQ</li>
              <li>Contact</li> */}
            </ul>
          </div>

          <div>
            <div className="mb-5 mt-10">
              <SignUpDialog>
                <button className="yellow-gradient-bg grid  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
                  <div className="flex items-center gap-[10px] px-6 py-3">
                    <p>Sign up for the course</p>
                    <LuArrowUpRight size={18} className="text-primary" />
                  </div>
                </button>
              </SignUpDialog>
            </div>

            <div className="pb-10">
              <Link
                className="text-sm font-semibold"
                href="mailto:contact@jamescryptoguru.com"
              >
                contact@jamescryptoguru.com
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
