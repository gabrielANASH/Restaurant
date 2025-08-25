import { Calendar, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Beautiful restaurant interior ambiance background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380"
          alt="Elegant restaurant interior with warm lighting"
          className="w-full h-full object-cover"
          data-testid="hero-background-image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight" data-testid="hero-title">
          Welcome to<br />
          <span className="text-yellow-400">Denmarrk Drive-Inn</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto" data-testid="hero-description">
          Experience exceptional dining with our carefully crafted dishes, warm atmosphere, and unmatched hospitality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-brown hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            data-testid="button-order-now"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Order Now
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-warm-brown font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
            data-testid="button-book-table"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Table
          </a>
        </div>

        <div className="mt-12 bg-white bg-opacity-90 text-gray-800 rounded-lg p-6 max-w-md mx-auto" data-testid="operating-hours">
          <h3 className="font-playfair font-semibold text-lg mb-2">Operating Hours</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Monday - Thursday:</span>
              <span>11:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday - Saturday:</span>
              <span>11:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>12:00 PM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
