import { QrCode, LayoutDashboard, Settings, BarChart3, Users, Zap, Database, ShieldCheck  , ChevronRight } from 'lucide-react';

const BackofficeSection = () => {
  const features = [
    {
      icon: <QrCode size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Générateur QR Codes",
      subtitle: "Créez et téléchargez vos QR codes uniques en masse"
    },
    {
      icon: <LayoutDashboard size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "CRM Participants",
      subtitle: "Collectez et gérez vos participants avec segmentation avancée"
    },
    {
      icon: <Settings size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Configuration jeux",
      subtitle: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels"
    },
    {
      icon: <BarChart3 size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Analytics temps réel",
      subtitle: "Suivez vos KPIs : scans, conversions, engagement, ROI"
    },
    {
      icon: <Users size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Gestion des lots",
      subtitle: "ADéfinissez vos récompenses et gérez les tirages au sort"
    },
    {
      icon: <Zap size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Notifications",
      subtitle: "Envoyez des push, emails et SMS à vos participants"
    },
    {
      icon: <Database size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Export données",
      subtitle: "Téléchargez vos données en CSV,Excel ou via API"
    },
    {
      icon: <ShieldCheck size={24} color="#16A34A" strokeWidth={2.5} />,
      title: "Multi-campagnes",
      subtitle: "Gérez plusieurs campagnes simultanément"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5] px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Content */}
  <div className="flex flex-col items-center text-center space-y-4 mb-16">
  {/* Tag with Settings Icon */}
  <span className="inline-flex items-center gap-2 bg-[#F0FDF4] text-[#16A34A] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
    <Settings size={16} strokeWidth={2.5} className="animate-spin-slow" />
    Backoffice tout-en-un
  </span>

  <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight max-w-2xl">
    Gérez tout depuis une interface unique
  </h2>
  
  <p className="text-[#64748B] text-lg max-w-2xl leading-relaxed">
    Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie.
  </p>
</div>

        {/* 4 in a row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#E2E8F0] p-8 rounded-3xl hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-[#334155]">
                  {feature.title}
                </h4>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
  <button className="flex items-center gap-2 bg-[#16A34A] hover:bg-[#0B6B3A] text-white px-8 py-4 rounded-lg font-normal transition-all active:scale-95 shadow-lg shadow-green-900/20 group">
    Demander un accès au backoffice 
    <ChevronRight 
      size={20} 
      strokeWidth={2.5} 
      className="group-hover:translate-x-1 transition-transform" 
    />
  </button>
</div>

      </div>
    </section>
  );
};

export default BackofficeSection;