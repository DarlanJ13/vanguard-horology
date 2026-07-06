import { Link } from 'react-router-dom';
import { Watch, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { storeAddress, storeEmail, whatsappLink, whatsappNumber } from '../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-5" aria-label="Vanguard Horology Co.">
              <Watch className="w-6 h-6 text-[#C8A45A]" />
              <span className="text-lg tracking-widest uppercase">Vanguard</span>
            </Link>
            <p className="text-sm text-[#F5F2EA]/60 leading-relaxed max-w-xs">
              Quiet luxury em sua forma mais pura. Curadoria, autenticidade e um serviço
              de excelência para quem entende a verdadeira alta relojoaria.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C8A45A] mb-5">Boutique</h4>
            <ul className="space-y-3 text-sm text-[#F5F2EA]/70">
              <li>
                <Link to="/shop" className="hover:text-[#E7D2A3] transition-colors">
                  Coleções
                </Link>
              </li>
              <li>
                <Link to="/shop?brand=rolex" className="hover:text-[#E7D2A3] transition-colors">
                  Rolex
                </Link>
              </li>
              <li>
                <Link to="/shop?brand=patek-philippe" className="hover:text-[#E7D2A3] transition-colors">
                  Patek Philippe
                </Link>
              </li>
              <li>
                <Link to="/shop?brand=richard-mille" className="hover:text-[#E7D2A3] transition-colors">
                  Richard Mille
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C8A45A] mb-5">Atendimento</h4>
            <ul className="space-y-3 text-sm text-[#F5F2EA]/70">
              <li>
                <Link to="/contact" className="hover:text-[#E7D2A3] transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E7D2A3] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-[#E7D2A3] transition-colors">
                  Lista de desejos
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-[#E7D2A3] transition-colors">
                  Finalizar compra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C8A45A] mb-5">Contato</h4>
            <ul className="space-y-4 text-sm text-[#F5F2EA]/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C8A45A]" />
                <span>{storeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A45A]" />
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-[#E7D2A3] transition-colors">
                  {whatsappNumber}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A45A]" />
                <a href={`mailto:${storeEmail}`} className="hover:text-[#E7D2A3] transition-colors">
                  {storeEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#C8A45A]" />
                <span>Seg—Sex: 10h às 19h<br />Sáb: 11h às 16h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F5F2EA]/40">
            © {currentYear} Vanguard Horology Co. Todos os direitos reservados.
          </p>
          <a
            href="https://www.instagram.com/vanguardhorology"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#F5F2EA]/60 hover:text-[#E7D2A3] transition-colors"
            aria-label="Instagram da Vanguard Horology"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @vanguardhorology
          </a>
        </div>
      </div>
    </footer>
  );
}
