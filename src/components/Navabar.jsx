import { useState, useEffect } from "react";
import { cn } from "../libs/utils";
import { Menu, X } from "lucide-react";

// nav items
const items = [
  { name: "Home", href: "#Hero" },
  { name: "About", href: "#Aboutme" },
  { name: "Skills", href: "#Skills" },
  { name: "Experience", href: "#Experience" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
  { name: "Resume", href: "resume" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-bold text-xl items-center flex font-bold"
          href="#Hero"
        >
          <span className="relative z-10">
            Varun Parekh's
            <span className="text-primary text-glow"> Portfolio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {items.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Menu icon (only shown when menu is closed) */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground z-50 absolute right-4 top-4"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>


      

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* X button to close (only shown when menu is open) */}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-foreground z-[60]"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        )}

        {/* Menu items */}
        <div className="flex flex-col space-y-8 text-xl mt-12">
          {items.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
