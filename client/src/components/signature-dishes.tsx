export default function SignatureDishes() {
  const dishes = [
    {
      id: 1,
      name: "Classic Drive-Inn Burger",
      description: "Juicy beef patty with crispy bacon, fresh lettuce, and our signature sauce",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Gourmet burger with bacon and fresh vegetables"
    },
    {
      id: 2,
      name: "Grilled Salmon Special",
      description: "Fresh Atlantic salmon grilled to perfection with seasonal vegetables",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Grilled salmon with herbs and lemon"
    },
    {
      id: 3,
      name: "Mushroom Truffle Pasta",
      description: "Homemade pasta with wild mushrooms in creamy truffle sauce",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Pasta with mushrooms and herbs"
    },
    {
      id: 4,
      name: "Chocolate Berry Delight",
      description: "Decadent chocolate cake with fresh berries and whipped cream",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Chocolate dessert with berries"
    }
  ];

  return (
    <section className="py-20" data-testid="signature-dishes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="signature-dishes-title">
            Signature Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="signature-dishes-description">
            Discover our most popular and beloved dishes that keep our customers coming back
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`dish-card-${dish.id}`}
            >
              <img
                src={dish.image}
                alt={dish.alt}
                className="w-full h-48 object-cover"
                data-testid={`dish-image-${dish.id}`}
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2" data-testid={`dish-name-${dish.id}`}>
                  {dish.name}
                </h3>
                <p className="text-gray-600 text-sm" data-testid={`dish-description-${dish.id}`}>
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
