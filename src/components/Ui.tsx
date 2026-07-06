import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../data';

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function WhatsAppButton({
  label = 'Agendar via WhatsApp',
  message = 'Olá, gostaria de agendar um atendimento na Vanguard Horology.',
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const href = `${whatsappLink}?text=${encodeURIComponent(message)}`;
  const base =
    'inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-350 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]';
  const styles =
    variant === 'primary'
      ? 'bg-[#C8A45A] text-[#050505] hover:shadow-[0_0_28px_rgba(200,164,90,0.32)] hover:-translate-y-0.5'
      : 'bg-transparent text-[#C8A45A] border border-[#C8A45A] hover:bg-[#C8A45A]/8 hover:text-[#E7D2A3] hover:border-[#E7D2A3]';

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export function ButtonPrimary({
  children,
  to,
  onClick,
  type = 'button',
  className = '',
}: {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}) {
  const classes =
    'inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#C8A45A] text-[#050505] text-sm font-medium tracking-wider uppercase transition-all duration-350 hover:shadow-[0_0_28px_rgba(200,164,90,0.30)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]';

  if (to) {
    return (
      <Link to={to} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${classes} ${className}`}>
      {children}
    </button>
  );
}

export function ButtonSecondary({
  children,
  to,
  onClick,
  type = 'button',
  className = '',
}: {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}) {
  const classes =
    'inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-transparent text-[#F5F2EA] border border-[#C8A45A]/60 transition-all duration-350 hover:border-[#E7D2A3] hover:text-[#E7D2A3] hover:bg-[#C8A45A]/8 hover:shadow-[0_0_24px_rgba(200,164,90,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]';

  if (to) {
    return (
      <Link to={to} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${classes} ${className}`}>
      {children}
    </button>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#C8A45A] mb-3">{label}</p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-4">{title}</h2>
      {subtitle && <p className="text-[#F5F2EA]/70 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
