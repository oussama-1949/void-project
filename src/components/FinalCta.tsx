import { Calendar, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    /* Moved gradient and overflow to the section for full-screen width */
    <section className="py-24 bg-gradient-to-r from-[#DC2626] to-[#B01219] relative overflow-hidden text-center">
      
      {/* Decorative background circles - relative to the full section now */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Inner container keeps the content centered and aligned */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
        
        {/* Header Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Prêt à transformer votre marketing ?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
            Rejoignez les marques qui engagent leurs fans avec YouCanWin.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* First Button: White with Red Text */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#B01219] px-8 py-4 rounded-lg font-normal hover:bg-gray-50 transition-all active:scale-95 ">
            <Calendar size={20} strokeWidth={2.5} />
            Planifier une démo gratuite
          </button>

          {/* Second Button: Glass Effect (30% opacity) */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-normal hover:bg-white/40 border border-white/20 transition-all active:scale-95">
            <MessageCircle size={20} strokeWidth={2.5} />
            Nous contacter
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;