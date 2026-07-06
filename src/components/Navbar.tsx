import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react'; 
import { useCart } from '../contexts/CartContext';
import { whatsappLink } from '../data';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Boutique', to: '/shop' },
  { label: 'Contato', to: '/contact' },
  { label: 'Atendimento', href: whatsappLink, external: true },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => location.pathname === to;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Alterado para preto absoluto para mesclar perfeitamente com o fundo da logo.jpg */}
      <nav
        className="mx-auto h-20 flex items-center justify-between px-6 lg:px-12 transition-all duration-350 bg-[#000000]/90 backdrop-blur-[14px] border-b border-white/[0.04]"
        aria-label="Navegação principal"
      >
        {/* Link com a Nova Logo Oficial em .jpg */}
        <Link
          to="/"
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
          aria-label="Vanguard Horology Co. Página inicial"
        >
          <img 
            src="/logo.jpg" 
            alt="Vanguard Horology Co. Logo" 
            className="h-8 md:h-9 w-auto object-contain transition-all duration-300 group-hover:brightness-110" 
          />
        </Link>

        {/* Links centrais com tipografia ajustada para a nova identidade */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm tracking-wider uppercase text-[#F4F1EA]/80 hover:text-[#D4AF37] transition-colors duration-350 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-350"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.to!}
                  className={`text-sm tracking-wider uppercase transition-colors duration-350 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#D4AF37] after:transition-all after:duration-350 ${
                    isActive(link.to!)
                      ? 'text-[#D4AF37] after:w-full'
                      : 'text-[#F4F1EA]/80 hover:text-[#D4AF37] after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Ícones com as cores atualizadas */}
        <div className="flex items-center gap-4">
          <Link
            to="/wishlist"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] text-[#F4F1EA]/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all duration-350"
            aria-label="Lista de desejos"
          >
            <Heart className="w-[18px] h-[18px]" />
          </Link>
          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] text-[#F4F1EA]/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all duration-350"
            aria-label={`Carrinho de compras com ${totalItems} itens`}
          >
            <ShoppingBag className="w-[18px] h-[18px]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-medium bg-[#D4AF37] text-[#000000] rounded-full">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#F4F1EA]"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full inset-x-0 bg-[#000000]/95 backdrop-blur-[14px] border-b border-white/[0.06] px-6 py-6"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) =>
              link.external ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm tracking-wider uppercase text-[#F4F1EA]/80 hover:text-[#D4AF37]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.to!}
                    className={`block text-sm tracking-wider uppercase ${
                      isActive(link.to!)
                        ? 'text-[#D4AF37]'
                        : 'text-[#F4F1EA]/80 hover:text-[#D4AF37]'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}