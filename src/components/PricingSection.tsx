import { Check, Rocket, Zap, Globe, ChevronRight,  Users , QrCode , Folder , Cloud } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Campagne locale",
      description: "Idéal pour tester sur un marché",
      icon: <Rocket size={24} color="#16A34A" strokeWidth={2.5} />,
      btnText: "Demander un devis",
      btnBg: "bg-white text-[#334155] border-1 border-[#CBD5E1] hover:bg-gray-50",
      borderColor: "border-[#E2E8F0]",
      features: [
        "Jusqu'à 1 000 utilisateurs",
        "1 Campagne active",
        "QR Codes standards",
        "Tableau de bord basique",
        "Support par email",
        "Mécaniques de jeu simples",
        "Export de données (CSV)",
        "Hébergement partagé"
      ]
    },
    {
      name: "Scale",
      tagline: "Expansion nationale",
      description: "Pour les marques en pleine croissance",
      icon: <Zap size={24} color="#DC2626" strokeWidth={2.5} />,
      popular: true,
      btnText: "Planifier une démo",
      btnBg: "bg-[#DC2626] text-white hover:bg-[#B91C1C]",
      borderColor: "border-red-200 shadow-xl shadow-red-900/5",
      features: [
        "Jusqu'à 10 000 utilisateurs",
        "Campagnes illimitées",
        "QR Codes personnalisés",
        "Analytics avancés",
        "Support prioritaire",
        "Jeux premium (Roue, Scratch)",
        "Intégration CRM",
        "Domaine personnalisé"
      ]
    },
    {
      name: "Entreprise",
      tagline: "Solution sur mesure",
      description: "Puissance et sécurité maximale",
      icon: <Globe size={24} color="#16A34A" strokeWidth={2.5} />,
      btnText: "Contacter nous",
      btnBg: "bg-white text-[#334155] border-1 border-[#CBD5E1] hover:bg-gray-50",
      borderColor: "border-[#E2E8F0]",
      features: [
        "Utilisateurs illimités",
        "Multi-marques / Multi-pays",
        "QR Codes haute sécurité",
        "Reporting BI sur mesure",
        "Account Manager dédié",
        "Développement spécifique",
        "SLA & Sécurité renforcée",
        "Accès API complet"
      ]
    }
  ];

  const metrics = [
    { icon: Users, title: "Utilisateurs", subtitle: "De 1K à illimité" },
    { icon: QrCode, title: "QR Codes", subtitle: "Volume adapté" },
    { icon: Globe, title: "Couverture", subtitle: "Local à mondial" },
    { icon: Folder, title: "Albums", subtitle: "Standard ou custom" },
    { icon: Cloud, title: "Infrastructure", subtitle: "Cloud ou On-Premise" },
  ];


  return (
    <section className="py-24 bg-[#F8FAFC] px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Five Icons Row */}
   <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
      {metrics.map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center space-y-3">
          {/* Icon Box */}
          <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center ">
            <item.icon size={26} color="#16A34A" strokeWidth={2.5} />
          </div>
          
          {/* Text Labels */}
          <div className="flex flex-col">
            <span className="text-[#334155] font-bold text-sm">
              {item.title}
            </span>
            <span className="text-[#64748B] text-xs font-medium">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>

        {/* 2. Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#0F172A]">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-[#64748B] text-lg">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        {/* 3. Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white p-8 rounded-[32px] border-2 transition-all duration-300 flex flex-col ${plan.borderColor}`}
            >
              {/* Popular Tag for middle card */}
              {plan.popular && (
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#DC2626] to-[#B01219] text-white px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-red-900/20 whitespace-nowrap">
  Populaire
</div>
              )}

              {/* Icon & Title */}
              <div className="space-y-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${index === 1 ? 'bg-red-50' : 'bg-[#F0FDF4]'}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#334155]">{plan.name}</h3>
                  <p className={`font-normal text-sm uppercase ${index === 1 ? 'text-[#DC2626]' : 'text-[#16A34A]'}`}>
                    {plan.tagline}
                  </p>
                </div>
                <p className="text-slate-500 text-[#475569] text-light font-light">{plan.description}</p>
              </div>

              <hr className="border-slate-100" />
              <div className="py-6">
                <p className="text-[#64748B] font-normal text-sm">Tarification sur mesure selon vos volumes</p>
              </div>
              <hr className="border-slate-100" />

              {/* Features List */}
              <ul className="flex-grow space-y-4 py-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-[#475569] font-medium">
                    <Check size={18} className={index === 1 ? 'text-[#DC2626]' : 'text-[#16A34A]'} strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all active:scale-95 ${plan.btnBg}`}>
                {plan.btnText}
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;