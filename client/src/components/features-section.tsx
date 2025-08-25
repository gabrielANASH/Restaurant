import { Utensils, Heart, Home } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-cream" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="features-title">
            Why Choose Denmarrk Drive-Inn?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="features-description">
            We're committed to serving exceptional food with outstanding service in a welcoming environment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="feature-quality">
            <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">Fresh Quality Food</h3>
            <p className="text-gray-600 leading-relaxed">
              Made with the freshest ingredients and prepared with love, our dishes deliver exceptional taste in every bite.
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="feature-service">
            <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">Exceptional Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Our friendly staff is dedicated to making your dining experience memorable with attentive and personalized service.
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="feature-atmosphere">
            <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">Welcoming Atmosphere</h3>
            <p className="text-gray-600 leading-relaxed">
              Enjoy a cozy, comfortable environment perfect for family dinners, date nights, or casual meals with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
