import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import logo from "../assets/logo.png";
import resumePdf from "../assets/Resume.pdf";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
  ];
  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "border-b border-white/10 bg-[#18181B]/95 shadow-lg shadow-black/5 backdrop-blur-xl"
        : "bg-[#18181B]"
        }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="/"
          className="group flex items-center gap-2.5 no-underline"
        >
         <img
            src={logo}
            alt="Hemant Kumawat Logo"
            className="h-11 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 sm:h-12"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none text-white">
              Hemant Kumawat
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
              Developer
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 no-underline transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-3 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-sm font-semibold text-gray-200 no-underline transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <FileText size={15} className="text-gray-300 group-hover:text-white transition-colors" />
            <span>Resume</span>
          </a>

          <a
            href="/contact"
            className="group ml-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white no-underline transition-all duration-200 hover:bg-blue-500"
          >
            <span>Contact</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white md:hidden"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#18181B] transition-all duration-300 md:hidden ${isMenuOpen
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-5 py-3 sm:px-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-white/5 px-2 py-4 text-sm font-medium text-gray-300 no-underline transition-colors duration-200 last:border-none hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="group mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-200 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>

          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="group mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-blue-500"
          >
            <span>Contact</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;