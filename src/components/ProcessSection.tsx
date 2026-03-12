import { ShoppingCart, QrCode, Gamepad2, Gift, PartyPopper } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: (color : string) => <ShoppingCart size={24} color={color} strokeWidth={2.5} />,
      title: "Achat produit",
      subtitle: "Le client achète votre produit en magasin"
    },
    {
      icon: (color : string) => <QrCode size={24} color={color} strokeWidth={2.5} />,
      title: "Scan QR Code",
      subtitle: "Accès instantané à l'expérience digitale"
    },
    {
      icon: (color : string) => <Gamepad2 size={24} color={color} strokeWidth={2.5} />,
      title: "Jeu & Défi",
      subtitle: "Participation à des jeux ou pronostics"
    },
    {
      icon: (color : string) => <Gift size={24} color={color} strokeWidth={2.5} />,
      title: "Gain",
      subtitle: "Le client découvre sa récompense"
    },
    {
      icon: (color : string) => <PartyPopper size={24} color={color} strokeWidth={2.5} />,
      title: "Récompense",
      subtitle: "Utilisation du coupon ou du cadeau"
    }
  ];

  return (
    <section className="py-24 bg-white px-4 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Title & Subtitle */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold text-black">
            Un parcours client simple et engageant
          </h2>
          <p className="text-[#64748B] text-lg">
            De l'achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        {/* Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-100 -z-0"></div>

          {steps.map((step, index) => {
            // Check if it's one of the last two icons
            const isRed = index >= 3;
            const accentColor = isRed ? "#DC2626" : "#16A34A";
            const borderColor = isRed ? "border-red-200" : "border-[#BBF7D0]";
            const bgHover = isRed ? "group-hover:bg-[#DC2626]" : "group-hover:bg-[#16A34A]";

            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4 relative z-10 group">
                
                {/* Icon Container */}
                <div className="relative">
                  {/* Step Number Circle */}
                  <div className={`absolute -top-3 -right-3 w-7 h-7 bg-white border-2 ${borderColor} rounded-full flex items-center justify-center text-xs font-bold shadow-sm transition-colors duration-300 ${bgHover} group-hover:text-white`}
                       style={{ color: accentColor }}>
                    {index + 1}
                  </div>

                  {/* Main Icon Box */}
                  <div className={`w-20 h-20 bg-white border-2 ${borderColor} rounded-2xl flex items-center justify-center shadow-lg shadow-gray-100 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon(accentColor)}
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h4 className="font-bold text-[#334155] text-lg">
                    {step.title}
                  </h4>
                  <p className="text-[#94A3B8] text-sm leading-relaxed px-2">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;