import { CheckCircle2,  Calendar , Phone ,FolderOpen , Gift  , Signal } from 'lucide-react';
import footballImg from "../assets/foot.webp"; 

const Secondsection = () => {
  const features = [
    {
      icon: <Phone color="#16A34A" size={20} />,
      title: "Activation instantanée",
      subtext: "QR codes uniques sur chaque produit"
    },
    {
      icon: <FolderOpen color="#16A34A"size={20} />,
      title: "Engagement ciblé",
      subtext: "Mécaniques de jeu adaptées à vos fans"
    },
    {
      icon: <Gift color="#16A34A" size={20} />,
      title: "Fidélisation accrue",
      subtext: "Récompenses digitales et physiques"
    },
    {
      icon: <Signal color="#16A34A" size={20} />,
      title: "Tableau de bord",
      subtext: "Suivez vos performances en temps réel"
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Football Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#16A34A]/20 to-transparent rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
          <img 
            src={footballImg} 
            alt="Football Action" 
            className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-8">
          {/* Tag */}
          <div className="flex items-center gap-2 text-[#16A34A] bg-green-100 w-fit px-4 py-1.5 rounded-full">
            <CheckCircle2 size={18} />
            <span className="text-sm font-bold uppercase tracking-wide">Solution complète</span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Le terrain de jeu digital de votre marque
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed max-w-lg">
              YouCanWin transforme vos produits en expériences interactives. 
              Chaque achat devient une opportunité d'engagement avec vos consommateurs.
            </p>
          </div>

          {/* Features Column */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center  shadow-green-900/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#334155] text-lg">{item.title}</h4>
                  <p className="text-[#94A3B8] text-sm font-medium">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>

           <button className="flex items-center gap-2 bg-[#DC2626] text-white px-6 py-2.5 rounded-lg font-normal hover:brightness-110 transition-all active:scale-95 text-sm shadow-md shadow-green-900/20">
  Planifier une démo
  <Calendar size={18} strokeWidth={1.5} />
</button>
        </div>

      </div>
    </section>
  );
};

export default Secondsection;