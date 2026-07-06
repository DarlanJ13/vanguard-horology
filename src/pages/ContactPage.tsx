import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { WhatsAppButton, SectionHeader } from '../components/Ui';
import { storeAddress, storeEmail, whatsappNumber, whatsappLink } from '../data';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contato | Vanguard Horology Co.';
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main id="conteudo-principal" className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal centered>
          <SectionHeader
            label="Contato"
            title="Atendimento exclusivo"
            subtitle="Entre em contato para agendar uma visita, tirar dúvidas ou receber uma consultoria personalizada."
            centered
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="border border-[rgba(200,164,90,0.18)] p-8 lg:p-10">
              <h3 className="text-xl mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Nome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] placeholder-[#F5F2EA]/25 focus:border-[#C8A45A] focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] placeholder-[#F5F2EA]/25 focus:border-[#C8A45A] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Telefone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] placeholder-[#F5F2EA]/25 focus:border-[#C8A45A] focus:outline-none transition-colors"
                      placeholder="(19) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Selecione</option>
                      <option value="agendamento">Agendamento</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="disponibilidade">Disponibilidade de peça</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] placeholder-[#F5F2EA]/25 focus:border-[#C8A45A] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#C8A45A] text-[#050505] text-sm font-medium tracking-wider uppercase hover:shadow-[0_0_28px_rgba(200,164,90,0.30)] hover:-translate-y-0.5 transition-all duration-350"
                >
                  {submitted ? 'Mensagem enviada' : 'Enviar mensagem'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={150}>
              <div className="border border-[rgba(200,164,90,0.18)] p-8">
                <h3 className="text-xl mb-6">Informações</h3>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-0.5 text-[#C8A45A]" />
                    <div>
                      <p className="text-[#F5F2EA]/90">{storeAddress}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#C8A45A]" />
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-[#F5F2EA]/90 hover:text-[#E7D2A3] transition-colors">
                      {whatsappNumber}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#C8A45A]" />
                    <a href={`mailto:${storeEmail}`} className="text-[#F5F2EA]/90 hover:text-[#E7D2A3] transition-colors">
                      {storeEmail}
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="border border-[rgba(200,164,90,0.18)] p-8">
                <h3 className="text-xl mb-6">Horário de funcionamento</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-4">
                    <Clock className="w-5 h-5 mt-0.5 text-[#C8A45A]" />
                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="text-[#F5F2EA]/70">Segunda a Sexta</span>
                        <span className="text-[#F5F2EA]">10h às 19h</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-[#F5F2EA]/70">Sábado</span>
                        <span className="text-[#F5F2EA]">11h às 16h</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-[#F5F2EA]/70">Domingo</span>
                        <span className="text-[#F5F2EA]/50">Fechado</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="border border-[rgba(200,164,90,0.18)] p-8">
                <h3 className="text-xl mb-3">Atendimento preferencial</h3>
                <p className="text-sm text-[#F5F2EA]/70 mb-5">
                  Prefere conversar diretamente? Nossos consultores respondem pelo WhatsApp com
                  discrição e rapidez.
                </p>
                <WhatsAppButton
                  label="Falar no WhatsApp"
                  message="Olá, gostaria de falar com um consultor da Vanguard Horology."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
