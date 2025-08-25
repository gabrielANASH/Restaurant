import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaYelp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2" data-testid="footer-about">
            <h3 className="font-playfair text-2xl font-bold mb-4" data-testid="footer-title">
              Denmarrk Drive-Inn Restaurant
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed" data-testid="footer-description">
              Experience exceptional dining with our carefully crafted dishes, warm atmosphere, and unmatched hospitality. 
              We're more than just a restaurant - we're your neighborhood gathering place.
            </p>
            <div className="flex space-x-4" data-testid="social-media-links">
              <a
                href="#"
                className="w-10 h-10 bg-warm-brown rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                data-testid="social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-warm-brown rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                data-testid="social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-warm-brown rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                data-testid="social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-warm-brown rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                data-testid="social-yelp"
                aria-label="Yelp"
              >
                <FaYelp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div data-testid="footer-quick-links">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  data-testid="footer-link-menu"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div data-testid="footer-contact-info">
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p data-testid="footer-address">
                <span className="inline-block mr-2">📍</span>123 Main Street, Downtown
              </p>
              <p data-testid="footer-phone">
                <span className="inline-block mr-2">📞</span>(555) 123-4567
              </p>
              <p data-testid="footer-email">
                <span className="inline-block mr-2">✉️</span>info@denmarrkdriveinn.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-gray-400">&copy; 2024 Denmarrk Drive-Inn Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
