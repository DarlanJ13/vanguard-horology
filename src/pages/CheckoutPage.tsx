import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader, WhatsAppButton } from '../components/Ui';
import { formatCurrency } from '../lib/format';

export function CheckoutPage() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Finalizar Compra | Vanguard Horology Co.';
    if (items.length === 0) {
      setSubmitted(true);
    }
  }, [items.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted && items.length === 0) {
    return (
      <main className="pt-40 pb-24 text-center px-6">
        <p className="text-[#F5F2EA]/60 mb-6">Seu carrinho está vazio.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-[#C8A45A]/60 text-sm text-[#C8A45A] hover:bg-[#C8A45A]/8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Explorar boutique
        </Link>
      </main>
    );
  }

  if (submitted && items.length > 0) {
    return (
      <main className="pt-40 pb-24 text-center px-6 max-w-2xl mx-auto">
        <div className="border border-[rgba(200,164,90,0.18)] p-10">
          <h1 className="text-3xl mb-4">Pedido recebido</h1>
          <p className="text-[#F5F2EA]/70 mb-8">
            Agradecemos seu interesse. Um consultor da Vanguard entrará em contato em breve para
            confirmar a disponibilidade e prosseguir com o atendimento exclusivo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              label="Falar pelo WhatsApp"
              message="Olá, finalizei um pedido na boutique e gostaria de acompanhar."
            />
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-[#C8A45A]/60 text-sm text-[#C8A45A] hover:bg-[#C8A45A]/8 transition-colors"
            >
              Continuar explorando
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="conteudo-principal" className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-[#F5F2EA]/60 hover:text-[#E7D2A3] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <ScrollReveal>
          <SectionHeader label="Checkout" title="Finalizar compra" />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border border-[rgba(200,164,90,0.18)] p-6 lg:p-8">
                  <h3 className="text-lg mb-6">Dados pessoais</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Nome completo</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
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
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="cpf" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">CPF</label>
                      <input
                        id="cpf"
                        name="cpf"
                        type="text"
                        required
                        value={form.cpf}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                        placeholder="000.000.000-00"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Telefone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                        placeholder="(19) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-[rgba(200,164,90,0.18)] p-6 lg:p-8">
                  <h3 className="text-lg mb-6">Endereço de entrega</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="cep" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">CEP</label>
                      <input
                        id="cep"
                        name="cep"
                        type="text"
                        required
                        value={form.cep}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                        placeholder="00000-000"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Endereço</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        value={form.address}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="number" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Número</label>
                      <input
                        id="number"
                        name="number"
                        type="text"
                        required
                        value={form.number}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="complement" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Complemento</label>
                      <input
                        id="complement"
                        name="complement"
                        type="text"
                        value={form.complement}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Cidade</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Estado</label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        required
                        value={form.state}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-[rgba(200,164,90,0.18)] p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-[#C8A45A]" />
                    <h3 className="text-lg">Pagamento</h3>
                  </div>
                  <p className="text-sm text-[#F5F2EA]/60 mb-5">
                    Para sua segurança, os dados de pagamento são processados com criptografia.
                    Você receberá uma confirmação via WhatsApp antes da cobrança final.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="cardNumber" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Número do cartão</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        required
                        value={form.cardNumber}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cardName" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Nome no cartão</label>
                      <input
                        id="cardName"
                        name="cardName"
                        type="text"
                        required
                        value={form.cardName}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="expiry" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">Validade</label>
                      <input
                        id="expiry"
                        name="expiry"
                        type="text"
                        required
                        value={form.expiry}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-xs uppercase tracking-widest text-[#F5F2EA]/60 mb-2">CVV</label>
                      <input
                        id="cvv"
                        name="cvv"
                        type="text"
                        required
                        value={form.cvv}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-[#111111] border border-[#333333] rounded text-[#F5F2EA] focus:border-[#C8A45A] focus:outline-none transition-colors"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-[#C8A45A] text-[#050505] text-sm font-medium tracking-wider uppercase hover:shadow-[0_0_28px_rgba(200,164,90,0.30)] hover:-translate-y-0.5 transition-all duration-350"
                >
                  Confirmar pedido
                </button>
              </form>
            </ScrollReveal>
          </div>

          <aside className="lg:col-span-1">
            <ScrollReveal delay={200}>
              <div className="sticky top-28 border border-[rgba(200,164,90,0.18)] p-6">
                <h3 className="text-lg mb-6">Resumo do pedido</h3>
                <ul className="space-y-5 mb-6">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-4">
                      <img
                        src={product.image}
                        alt={product.model}
                        loading="lazy"
                        className="w-16 h-20 object-cover border border-white/[0.08]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#C8A45A] uppercase tracking-wider">{product.brand}</p>
                        <Link
                          to={`/product/${product.id}`}
                          className="block text-sm truncate hover:text-[#E7D2A3] transition-colors"
                        >
                          {product.model}
                        </Link>
                        <p className="mono text-[10px] text-[#F5F2EA]/50">{product.reference}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-[#2A2A2A] text-[#F5F2EA]/60 hover:text-[#C8A45A]"
                            aria-label="Diminuir"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs w-4 text-center">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border border-[#2A2A2A] text-[#F5F2EA]/60 hover:text-[#C8A45A]"
                            aria-label="Aumentar"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="ml-auto text-[#F5F2EA]/40 hover:text-red-400 transition-colors"
                            aria-label="Remover"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/[0.08] pt-5 space-y-3 text-sm">
                  <div className="flex justify-between text-[#F5F2EA]/70">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#F5F2EA]/70">
                    <span>Envio</span>
                    <span>A calcular</span>
                  </div>
                  <div className="flex justify-between text-lg pt-3 border-t border-white/[0.08]">
                    <span>Total</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </main>
  );
}
