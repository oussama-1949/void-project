import { ChevronRight } from 'lucide-react';
import cameron from '../assets/cameron.png';
import  quiz from "../assets/quiz.png"
import pronostics from "../assets/Pronostics.png"
import app from '../assets/app.png'

const GameCatalog = () => {
  const games = [
    {
      title: "Album Digital 2025",
      subtitle: "Collection de cartes avec échanges et défis.",
      image: cameron,
      hasTag: true
    },
    {
      title: "Roue de la Fortune",
      subtitle: "Mécanique instant-win pour booster les ventes.",
      image: quiz,
      hasTag: false
    },
    {
      title: "Pronostics Pro",
      subtitle: "Engagez les fans sur les scores des matchs réels.",
      image: pronostics,
      hasTag: false
    },
    {
      title: "Quiz Expert",
      subtitle: "Testez les connaissances historiques des supporters.",
      image: app,
      hasTag: false
    }
  ];

  return (
    /* Added max-w-7xl and mx-auto to constrain the width */
    <div className="mt-32 bg-[#F8FAFC] max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-bold text-[#334155]">
          Catalogue de jeux
        </h2>
        <p className="text-[#64748B] text-lg">
          Des mécaniques éprouvées pour engager vos audiences
        </p>
      </div>

      {/* 4 Cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-[400px]"
          >
            {/* Top Half: Image */}
            <div className="h-1/2 overflow-hidden relative">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Half: Content */}
            <div className="h-1/2 p-6 flex flex-col justify-between bg-white">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#334155]">
                  {game.title}
                </h4>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {game.subtitle}
                </p>
              </div>

              {/* Tag for the first card only */}
              {game.hasTag && (
                <div className="flex items-center gap-1 text-[#16A34A] font-bold text-sm cursor-pointer group/link mt-auto">
                  Découvrir
                  <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCatalog;