import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, Check } from 'lucide-react';
import { products, brands } from '../data';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { WhatsAppButton } from '../components/Ui';
import { RelatedProductCard } from '../components/RelatedProductCard';
import { formatCurrency } from '../lib/format';

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.brand} ${product.model} | Vanguard Horology Co.`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  if (!product) {
    return (
      <main className="pt-40 pb-24 text-center">
        <p className="text-[#F5F2EA]/60 mb-6">Peça não encontrada.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-[#C8A45A]/60 text-sm text-[#C8A45A] hover:bg-[#C8A45A]/8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para a boutique
        </Link>
      </main>
    );
  }

  const liked = isInWishlist(product.id);
  const related = products.filter((p) => product.related?.includes(p.id));
  const brandName = brands.find((b) => b.slug === product.brandSlug)?.name || product.brand;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="relative aspect-square overflow-hidden border border-[rgba(200,164,90,0.18)] bg-[#0a0a0a]">
              <img
                src={product.image}
                alt={`${product.brand} ${product.model}`}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            <ScrollReveal delay={100}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C8A45A] mb-2">{brandName}</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-2">
                    {product.model}
                  </h1>
                  <p className="mono text-sm text-[#F5F2EA]/50">Ref. {product.reference}</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`shrink-0 w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-350 ${
                    liked
                      ? 'border-[#C8A45A] bg-[#C8A45A]/10 text-[#C8A45A]'
                      : 'border-[#2A2A2A] text-[#F5F2EA]/70 hover:border-[#C8A45A]/40 hover:text-[#C8A45A]'
                  }`}
                  aria-label={liked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-2xl sm:text-3xl mt-6 mb-6">{formatCurrency(product.price)}</p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="text-[#F5F2EA]/70 leading-relaxed mb-8">{product.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="border border-[rgba(200,164,90,0.18)] p-4">
                  <p className="text-[10px] uppercase tracking-widest text-[#C8A45A] mb-1">Caixa</p>
                  <p className="text-sm text-[#F5F2EA]/90">{product.specs.case}</p>
                </div>
                <div className="border border-[rgba(200,164,90,0.18)] p-4">
                  <p className="text-[10px] uppercase tracking-widest text-[#C8A45A] mb-1">Movimento</p>
                  <p className="text-sm text-[#F5F2EA]/90">{product.specs.movement}</p>
                </div>
                {product.specs.waterResistance && (
                  <div className="border border-[rgba(200,164,90,0.18)] p-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#C8A45A] mb-1">Resistência à água</p>
                    <p className="text-sm text-[#F5F2EA]/90">{product.specs.waterResistance}</p>
                  </div>
                )}
                {product.specs.functions && (
                  <div className="border border-[rgba(200,164,90,0.18)] p-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#C8A45A] mb-1">Funções</p>
                    <p className="text-sm text-[#F5F2EA]/90">{product.specs.functions}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="flex flex-wrap gap-4 mt-auto">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-350 ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-[#C8A45A] text-[#050505] hover:shadow-[0_0_28px_rgba(200,164,90,0.30)] hover:-translate-y-0.5'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  {added ? 'Adicionado' : 'Adicionar ao carrinho'}
                </button>
                <WhatsAppButton
                  label="Consultar peça"
                  message={`Olá, tenho interesse na peça ${product.brand} ${product.model} (${product.reference}). Gostaria de mais informações e disponibilidade.`}
                  variant="secondary"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl mb-10">Você também pode gostar</h2>
            </ScrollReveal>
            <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-thin">
              {related.map((product) => (
                <RelatedProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
