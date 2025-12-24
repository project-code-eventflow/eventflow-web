import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("nav.stakeholders"), href: "#stakeholders" },
    { name: t("nav.mobile"), href: "#mobile" },
    { name: t("nav.global"), href: "#global" },
    { name: t("nav.roadmap"), href: "#roadmap" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <img
                src="/favicon/android-chrome-192x192.png"
                alt="The Uniflow Logo"
                className="h-8 w-8 md:h-10 md:w-10 transition-transform group-hover:scale-110"
              />
              <span
                className={`font-extrabold text-xl md:text-2xl tracking-tighter ${
                  scrolled ? "text-primary-800" : "text-primary-800"
                }`}
              >
                The Uniflow<span className="text-primary-500"></span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  scrolled ? "text-slate-600" : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold transition-colors border ${
                scrolled
                  ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                  : "border-primary-200 text-slate-600 bg-white/50 hover:bg-white"
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>{language.toUpperCase()}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-all"
            >
              {t("nav.demo")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 bg-white text-slate-700"
            >
              <Globe className="w-3 h-3" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 px-3 py-2 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="block w-full text-center px-5 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700"
          >
            {t("nav.demo")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
