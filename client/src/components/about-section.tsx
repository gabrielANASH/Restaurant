import { Leaf, Users, Star } from "lucide-react";

export default function AboutSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Chef Marcus Johnson",
      position: "Head Chef & Co-Owner",
      description: "With over 15 years of culinary experience, Chef Marcus brings creativity and passion to every dish, ensuring each meal is a memorable experience.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      alt: "Professional chef in kitchen uniform"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      position: "Restaurant Manager & Co-Owner",
      description: "Sarah ensures every guest feels welcomed and valued, overseeing operations to maintain our high standards of service and hospitality.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      alt: "Friendly restaurant manager smiling"
    },
    {
      id: 3,
      name: "David Chen",
      position: "Senior Server",
      description: "David's friendly demeanor and attention to detail ensure that every dining experience is smooth and enjoyable from start to finish.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
      alt: "Professional waiter serving customers"
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Fresh Quality",
      description: "We source the finest ingredients from local suppliers and prepare everything fresh daily to ensure the best possible taste and quality."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We're proud to be part of this community and strive to create a gathering place where neighbors become friends and memories are made."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We never settle for anything less than exceptional. From our food to our service, we constantly strive to exceed your expectations."
    }
  ];

  return (
    <section id="about" className="py-20" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="about-title">
            About Denmarrk Drive-Inn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Our story of passion, community, and exceptional dining experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750"
              alt="Cozy restaurant interior with warm lighting and customers dining"
              className="rounded-xl shadow-lg w-full"
              data-testid="about-restaurant-image"
            />
          </div>
          <div>
            <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-6" data-testid="our-story-title">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6" data-testid="story-paragraph-1">
              Founded in 2010, Denmarrk Drive-Inn Restaurant began as a dream to create a place where families and friends could gather to enjoy exceptional food in a warm, welcoming environment. What started as a small family-owned establishment has grown into a beloved community cornerstone, known for our commitment to quality and service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" data-testid="story-paragraph-2">
              Our journey has been guided by simple but powerful values: using the freshest ingredients, preparing food with love and care, and treating every guest like family. We believe that great food brings people together and creates lasting memories.
            </p>
            <p className="text-gray-600 leading-relaxed" data-testid="story-paragraph-3">
              Today, we continue to uphold these traditions while evolving to meet the changing tastes and needs of our community. Every dish we serve reflects our passion for culinary excellence and our dedication to creating extraordinary dining experiences.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-cream rounded-xl p-12 mb-16" data-testid="values-section">
          <h3 className="font-playfair text-3xl font-bold text-center text-gray-800 mb-10" data-testid="values-title">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center" data-testid={`value-${index}`}>
                  <div className="w-20 h-20 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-playfair text-xl font-semibold mb-4" data-testid={`value-title-${index}`}>{value.title}</h4>
                  <p className="text-gray-600" data-testid={`value-description-${index}`}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-6" data-testid="team-title">Meet Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10" data-testid="team-description">
            Behind every great meal is a dedicated team of passionate professionals who care about your dining experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-testid="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center bg-white rounded-xl p-8 shadow-lg" data-testid={`team-member-${member.id}`}>
              <img
                src={member.image}
                alt={member.alt}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                data-testid={`team-member-image-${member.id}`}
              />
              <h4 className="font-playfair text-xl font-semibold mb-2" data-testid={`team-member-name-${member.id}`}>
                {member.name}
              </h4>
              <p className="text-warm-brown mb-4" data-testid={`team-member-position-${member.id}`}>
                {member.position}
              </p>
              <p className="text-gray-600 text-sm" data-testid={`team-member-description-${member.id}`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
