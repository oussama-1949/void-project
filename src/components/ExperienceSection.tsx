import { Rocket, Heart, Share2 } from 'lucide-react';

const ExperienceSection = () => {
  const highlights = [
    {
      icon: <Rocket size={24} color="#FFFFFF" strokeWidth={2.5} />,
      title: "Engagement immédiat",
      subtitle: "Chaque produit devient une opportunité de jeu"
    },
    {
      icon: <Heart size={24} color="#FFFFFF" strokeWidth={2.5} />,
      title: "Fidélisation naturelle",
      subtitle: "Les clients reviennent pour compléter leur collection"
    },
    {
      icon: <Share2 size={24} color="#FFFFFF" strokeWidth={2.5} />,
      title: "Viralité organique",
      subtitle: "Les fans partagent et échangent entre eux"
    }
  ];

  return (
    /* 1. Moved Gradient, Padding, and Overflow to the Section for Full Width */
    <section className="py-24 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] relative overflow-hidden">
      
      {/* Decorative Light Effect (still absolute relative to section) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      {/* 2. Inner container keeps the content centered and aligned with the rest of the site */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football.
          </p>
        </div>

        {/* Feature Groups (The Centered Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-[8px] border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default ExperienceSection;