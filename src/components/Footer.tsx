import { Facebook, Twitter, Instagram, Linkedin , ShieldCheck } from 'lucide-react';
import Logo from '../assets/logo.png'


const Footer = () => {
  const socialIcons = [
    { icon: <Facebook size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" }
  ];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Logo & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
          
              <span className="text-2xl font-black text-[#334155] tracking-tight">
                <img src={Logo} />
              </span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. 
              Un service d'Agency.Africa.
            </p>
            {/* Social Icons Row */}
            <div className="flex gap-3">
              {socialIcons.map((item, i) => (
                <a key={i} href={item.link} className="w-10 h-10 bg-[#E2E8F0] text-[#475569] rounded-full flex items-center justify-center hover:bg-[#16A34A] hover:text-white transition-colors">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[#334155] font-bold text-lg">Liens rapides</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Nos offres</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Catalogue de jeux</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Backoffice</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Démo gratuite</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div className="space-y-6">
            <h4 className="text-[#334155] font-bold text-lg">Contact & Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Support client</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Mentions légales</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Confidentialité</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#16A34A] transition-colors text-sm">Contact Agency.Africa</a></li>
            </ul>
          </div>
        </div>

        {/* SEPARATION LINE */}
        <hr className="border-slate-100 mb-8" />

        {/* BOTTOM SECTION: Legal Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <p className="text-[#475569] text-sm">
            © 2025 Youcanwin. Tous droits réservés.
          </p>

       <div className="flex items-center gap-2 bg-[#BBF7D0]  px-6 py-3 rounded-lg ">
  <ShieldCheck size={14} className="text-[#0B6B3A]" strokeWidth={2.5} />
  
  <span className="text-[#0B6B3A] text-xs font-medium uppercase tracking-wider">
    Site conforme CNDP Maroc
  </span>
  
  {/* Status Pulse */}
 
</div>

          {/* Agency Credit */}
          <div className="flex items-center gap-2 text-[#94A3B8] text-sm italic">
            <span>Un service de <a href="https://games.agency.africa" className="font-semibold text-[#16A34A] transition-colors">Agency.Africa <span className='text-[#94A3B8] text-sm italic'>games.agency.africa</span> </a></span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;