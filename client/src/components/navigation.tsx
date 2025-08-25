import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-xl" : ""
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="font-playfair font-bold text-xl md:text-2xl text-warm-brown" data-testid="logo">
              Denmarrk Drive-Inn
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium"
                data-testid="nav-menu"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-warm-brown focus:outline-none focus:text-warm-brown"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-gray-700 hover:text-warm-brown transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block px-3 py-2 text-gray-700 hover:text-warm-brown transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-menu"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-700 hover:text-warm-brown transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-about"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-700 hover:text-warm-brown transition-colors duration-200 w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
