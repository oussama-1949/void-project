import { Users, BarChart3, Globe2, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <BarChart3 size={32} color="#16A34A" strokeWidth={2} />,
      title: "500K+",
      subtitle: "Interactions mensuelles"
    },
    {
      icon: <Users size={32} color="#16A34A" strokeWidth={2} />,
      title: "15+",
      subtitle: "Marques partenaires"
    },
    {
      icon: <Globe2 size={32} color="#16A34A" strokeWidth={2} />,
      title: "98%",
      subtitle: "Taux de satisfication"
    },
    {
      icon: <Trophy size={32} color="#16A34A" strokeWidth={2} />,
      title: "24/7",
      subtitle: "Support technique"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  {stat.title}
                </h3>
                <p className="text-[#64748B] font-medium text-sm uppercase tracking-wide">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;