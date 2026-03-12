import {  ChevronRight,  Lightbulb } from 'lucide-react';
import Phone from "../assets/phone.png"
import qrcode from "../assets/qrcoded.png"
import recompense from "../assets/recompense.png"
import bottomline from "../assets/bottomline.png"
const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 bg-gradient-to-r from-[#E2E8F04D] to-[#E2E8F04D]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
      <div className="space-y-10">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
        Transformer chaque <br />
        
        {/* Wrap the word in relative to anchor the underline */}
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-[#0B6B3A]">
            produit
          </span>
          
          {/* Absolutely Positioned Underline */}
          <img 
            src={bottomline} 
            alt="" 
            className="absolute left-0 bottom-[-15px] w-full h-auto object-contain pointer-events-none"
            // Tip: Use bottom-[-20px] or bottom-[-10px] to adjust spacing based on Figma
          />
        </span>{" "}
        
        en expérience de jeu
      </h1>

      <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
        <span className="">YouCanWin connecte vos marques aux fans de 
        football à travers des mécaniques de gamification innovantes. </span><span className='font-bold text-slate-800'>
                    Codes QR, cartes digitales, défis et récompenses.

        </span>
      </p>

      <div className="flex flex-wrap gap-8 py-4 ">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#0B6B3A]">500k+</span>
          <span className="text-xs text-slate-500 uppercase tracking-wider">Interactions/mois</span>
        </div>
        <div className="h-12 w-[1px] bg-gray-200 hidden sm:block"></div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#B01219]">50+</span>
          <span className="text-xs text-slate-500 uppercase tracking-wider">Engagement</span>
        </div>
        <div className="h-12 w-[1px] bg-gray-200 hidden sm:block"></div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#0B6B3A]">x3.5</span>
          <span className="text-xs text-slate-500 uppercase tracking-wider">ROI moyen</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 ">
         <button className="flex items-center gap-2 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] text-white px-6 py-2.5 rounded-lg font-normal hover:brightness-110 transition-all active:scale-95 text-sm shadow-md shadow-green-900/20">
   Voir la démo
  <ChevronRight size={18} strokeWidth={2.5} />
</button>
        
        <button className="flex items-center justify-center gap-2 bg-white text-[#334155] border-2 border-slate-200 px-8 py-4 rounded-lg font-normal hover:bg-slate-50 transition-all">
          <Lightbulb size={18} className="text-[#16A34A]" />
          Comment ça marche
        </button>
      </div>
      <div className='border-y border-gray-100'>

      </div>
      <div className="pt-8 space-y-4">
        <p className="text-[#64748B] text-sm font-medium uppercase tracking-widest">
          Ils nous font confiance
        </p>
        
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="text-[#94A3B8] font-light text-sm tracking-tight opacity-80 hover:opacity-100 transition-opacity cursor-default">
            Maroc Telecom
          </span>
          <span className="text-[#94A3B8] font-light text-sm tracking-tight opacity-80 hover:opacity-100 transition-opacity cursor-default">
            Inwi
          </span>
          <span className="text-[#94A3B8] font-light text-sm tracking-tight opacity-80 hover:opacity-100 transition-opacity cursor-default">
            Orange
          </span>
          <span className="text-[#94A3B8] font-light text-sm tracking-tight opacity-80 hover:opacity-100 transition-opacity cursor-default">
            Carrefour
          </span>
        </div>
    </div>

    </div>

        {/* Right Side: Photo */}
       <div className="relative">
  {/* 1. Background Glow */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl -z-10 "></div>

  {/* 2. Main Phone Container */}
  <div className="relative z-10 mx-auto w-full max-w-[400px]">
    <img 
      src={Phone}
      alt="Mobile App" 
      className="w-full h-auto hidden md:block "
    />

    {/* 3. QR Code (Top Right - popping out 100px) */}
    <div className="absolute -top-10 -right-[100px] hidden lg:block animate-bounce-slow">
     <img 
        src={qrcode} 
        alt="Recompense badge" 
        className="w-40 h-auto object-contain "
      />
    </div>

    {/* 4. Recompense (Bottom Left) */}
    <div className="absolute -bottom-10 -left-12 hidden lg:block animate-float">
      <img 
        src={recompense} 
        alt="Recompense badge" 
        className="w-40 h-auto object-contain "
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;