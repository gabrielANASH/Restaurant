import { MessageCircle } from "lucide-react";

export default function MenuSection() {
  const menuData = {
    starters: [
      { name: "Crispy Chicken Wings", price: "$12.99", description: "Buffalo or BBQ style with celery and blue cheese dip" },
      { name: "Loaded Nachos", price: "$10.99", description: "Tortilla chips with cheese, jalapeños, sour cream, and guacamole" },
      { name: "Mozzarella Sticks", price: "$8.99", description: "Golden fried mozzarella served with marinara sauce" },
      { name: "Spinach & Artichoke Dip", price: "$9.99", description: "Creamy dip served hot with tortilla chips and pita bread" }
    ],
    mains: [
      { name: "Denmarrk Special Burger", price: "$16.99", description: "Double beef patty, bacon, cheese, lettuce, tomato, and our secret sauce" },
      { name: "Grilled Salmon Fillet", price: "$22.99", description: "Atlantic salmon with roasted vegetables and lemon herb butter" },
      { name: "BBQ Ribs Platter", price: "$19.99", description: "Tender baby back ribs with coleslaw and fries" },
      { name: "Chicken Parmesan", price: "$18.99", description: "Breaded chicken breast with marinara sauce and pasta" },
      { name: "Vegetarian Garden Bowl", price: "$14.99", description: "Quinoa, roasted vegetables, avocado, and tahini dressing" },
      { name: "Fish & Chips", price: "$15.99", description: "Beer-battered cod with crispy fries and tartar sauce" }
    ],
    desserts: [
      { name: "Chocolate Lava Cake", price: "$7.99", description: "Warm chocolate cake with molten center and vanilla ice cream" },
      { name: "New York Cheesecake", price: "$6.99", description: "Creamy cheesecake with graham cracker crust and berry compote" },
      { name: "Apple Pie à la Mode", price: "$6.99", description: "Classic apple pie served warm with vanilla ice cream" }
    ],
    beverages: {
      hot: [
        { name: "Fresh Ground Coffee", price: "$3.99" },
        { name: "Specialty Teas", price: "$3.49" },
        { name: "Hot Chocolate", price: "$4.49" }
      ],
      cold: [
        { name: "Soft Drinks", price: "$2.99" },
        { name: "Fresh Juices", price: "$4.99" },
        { name: "Iced Coffee", price: "$4.49" }
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-cream" data-testid="menu-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="menu-title">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="menu-description">
            Explore our carefully crafted selection of delicious dishes made with the finest ingredients
          </p>
        </div>

        <div className="space-y-16">
          {/* Starters */}
          <div data-testid="menu-starters">
            <h3 className="font-playfair text-3xl font-bold text-center text-warm-brown mb-8">Starters</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.starters.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`starter-item-${index}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg" data-testid={`starter-name-${index}`}>{item.name}</h4>
                    <span className="text-warm-brown font-bold" data-testid={`starter-price-${index}`}>{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm" data-testid={`starter-description-${index}`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div data-testid="menu-mains">
            <h3 className="font-playfair text-3xl font-bold text-center text-warm-brown mb-8">Main Courses</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.mains.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`main-item-${index}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg" data-testid={`main-name-${index}`}>{item.name}</h4>
                    <span className="text-warm-brown font-bold" data-testid={`main-price-${index}`}>{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm" data-testid={`main-description-${index}`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div data-testid="menu-desserts">
            <h3 className="font-playfair text-3xl font-bold text-center text-warm-brown mb-8">Desserts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {menuData.desserts.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`dessert-item-${index}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg" data-testid={`dessert-name-${index}`}>{item.name}</h4>
                    <span className="text-warm-brown font-bold" data-testid={`dessert-price-${index}`}>{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm" data-testid={`dessert-description-${index}`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beverages */}
          <div data-testid="menu-beverages">
            <h3 className="font-playfair text-3xl font-bold text-center text-warm-brown mb-8">Beverages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="hot-beverages">
                <h4 className="font-semibold text-lg mb-4">Hot Beverages</h4>
                <div className="space-y-2">
                  {menuData.beverages.hot.map((item, index) => (
                    <div key={index} className="flex justify-between" data-testid={`hot-beverage-${index}`}>
                      <span data-testid={`hot-beverage-name-${index}`}>{item.name}</span>
                      <span className="text-warm-brown font-bold" data-testid={`hot-beverage-price-${index}`}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="cold-beverages">
                <h4 className="font-semibold text-lg mb-4">Cold Beverages</h4>
                <div className="space-y-2">
                  {menuData.beverages.cold.map((item, index) => (
                    <div key={index} className="flex justify-between" data-testid={`cold-beverage-${index}`}>
                      <span data-testid={`cold-beverage-name-${index}`}>{item.name}</span>
                      <span className="text-warm-brown font-bold" data-testid={`cold-beverage-price-${index}`}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-brown hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            data-testid="menu-order-whatsapp"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Order Now via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
