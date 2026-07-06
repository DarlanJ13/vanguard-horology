import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Play, ShoppingBag } from 'lucide-react';
import { brands, products, testimonials, instagramPosts } from '../data';
import { ScrollReveal } from '../components/ScrollReveal';
import { WhatsAppButton, ButtonSecondary, SectionHeader } from '../components/Ui';
import { ProductCard } from '../components/ProductCard';

const heroImage =
  'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1600&auto=format&fit=crop';

export function HomePage() {
  const [activeVideo, setActiveVideo] = useState(false);

  useEffect(() => {
    document.title = 'Vanguard Horology Co. | Alta Relojoaria & Boutique de Luxo';
  }, []);

  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <main id="conteudo-principal" className="bg-[#030303] text-white">
      {/* SEO Schemas */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'JewelryStore',
          name: 'Vanguard Horology Co.',
          image: heroImage,
          '@id': 'https://vanguardhorology.com.br',
          url: 'https://vanguardhorology.com.br',
          telephone: '+5519993841163',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Joaquim de Souza Mello, 580 — Cambuí',
            addressLocality: 'Campinas',
            addressRegion: 'SP',
            addressCountry: 'BR',
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '11:00', closes: '16:00' },
          ],
        })}
      </script>

      {/* Hero Banner Otimizado para E-commerce */}
      <section className="relative min-h-[95svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Relógio de luxo em iluminação dramática de estúdio"
            className="w-full h-full object-cover opacity-45 scale-105 animate-[pulse_10s_infinite_ease-in-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/95 via-[#030303]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45A] animate-ping" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#E7D2A3]">
                Ganhe 10% OFF na primeira compra · Cupom: VANGUARD10
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-light leading-[1.05] max-w-4xl mb-6 tracking-wide">
              A alta relojoaria <br />
              <span className="bg-gradient-to-r from-[#F9E7B9] via-[#C8A45A] to-[#AA820A] bg-clip-text text-transparent font-normal">
                ao seu alcance
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-base sm:text-lg text-[#F5F2EA]/80 max-w-xl leading-relaxed mb-10 font-light">
              Curadoria exclusiva de peças icônicas e edições limitadas das marcas mais consagradas do mundo. Adquira sua próxima obra-prima com autenticidade garantida.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={450}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C8A45A] to-[#AA820A] text-[#030303] text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-xl hover:brightness-110 transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" /> Ver Acervo Disponível
              </Link>
              <WhatsAppButton message="Olá, gostaria de agendar uma consultoria personalizada para escolher um relógio." />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Marcas Remotas */}
      <section className="py-12 border-b border-white/[0.04] bg-[#070707]" aria-labelledby="marcas-titulo">
        <h2 id="marcas-titulo" className="sr-only">Marcas em destaque</h2>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:gap-x-16">
            {brands.slice(0, 6).map((brand) => (
              <Link
                key={brand.id}
                to={`/shop?brand=${brand.slug}`}
                className="group text-xs sm:text-sm tracking-[0.3em] uppercase text-[#F5F2EA]/30 hover:text-[#E7D2A3] transition-colors duration-300 relative"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VITRINE PRINCIPAL DE PRODUTOS (Movida para cima para conversão rápida) */}
      <section className="py-24 border-b border-white/[0.04]" aria-labelledby="destaques-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between mb-12">
            <ScrollReveal>
              <SectionHeader label="Boutique" title="Destaques do Acervo" subtitle="Modelos exclusivos disponíveis à pronta entrega com envio seguro." />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ButtonSecondary to="/shop">Explorar toda a loja</ButtonSecondary>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coleções com Imagens de Luxo Contextualizadas */}
      <section className="py-24 bg-[#070707] border-b border-white/[0.04]" aria-labelledby="colecoes-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Categorias"
              title="Segmentos de Prestígio"
              subtitle="Encontre a peça ideal para o seu estilo de vida."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              { id: 'diver', name: 'Mergulho Profissional', slug: 'mergulho-profissional', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600' },
              { id: 'dress', name: 'Relógios de Gala', slug: 'relogios-de-gala', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600' },
              { id: 'sports', name: 'Cronógrafos Esportivos', slug: 'esportivos', img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=600' },
              { id: 'complications', name: 'Alta Engenharia', slug: 'complicacoes', img: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=600' },
            ].map((collection, index) => (
              <ScrollReveal key={collection.id} delay={index * 100}>
                <Link
                  to={`/shop?collection=${collection.slug}`}
                  className="group block relative h-[400px] overflow-hidden border border-white/10 hover:border-[#C8A45A]/50 transition-all duration-500"
                >
                  {/* Imagem de Fundo Dinâmica */}
                  <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500" />
                  <img 
                    src={collection.img} 
                    alt={collection.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                  />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#C8A45A] mb-1 font-semibold">Coleção</p>
                    <h3 className="text-lg font-serif font-light tracking-wide text-white group-hover:text-[#E7D2A3] transition-colors duration-300">
                      {collection.name}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F5F2EA]/60 group-hover:text-[#C8A45A] transition-colors duration-300">
                      Shop Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Marca */}
      <section className="py-24 lg:py-32" aria-labelledby="sobre-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1200"
                  alt="Ambiente sofisticado da boutique Vanguard Horology"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <SectionHeader
                  label="Sobre a Vanguard"
                  title="Autoridade e discrição no universo do tempo"
                  subtitle="A Vanguard Horology nasceu para unir paixão, conhecimento técnico e a experiência de compra que um relógio de alto luxo exige."
                />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="mt-6 text-[#F5F2EA]/70 leading-relaxed font-light text-sm sm:text-base">
                  Selecionamos manualmente cada peça, garantindo autenticidade, procedência e estado de conservação exemplar. Nosso time acompanha o cliente da escolha ao pós-venda, oferecendo consultoria especializada sobre movimentos, materiais e valorização de acervos.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <ul className="mt-8 space-y-4">
                  {['Autenticidade 100% comprovada com certificação', 'Acesso a leilões internacionais e edições raras', 'Atendimento privativo ou envio blindado nacional'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-[#F5F2EA]/80 font-light">
                      <ChevronRight className="w-4 h-4 text-[#C8A45A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Artesanato e Mecanismo */}
      <section className="py-24 bg-[#070707] border-y border-white/[0.04]" aria-labelledby="artesanato-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Know-How"
              title="A maestria dos calibres"
              subtitle="Cada engrenagem reflete séculos de tradição e dedicação da engenharia mecânica suíça."
              centered
            />
          </ScrollReveal>

          <ScrollReveal delay={200} centered>
            <div className="mt-14 relative aspect-video max-w-5xl mx-auto overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600"
                alt="Macro da engrenagem de um movimento mecânico suíço"
                loading="lazy"
                className="w-full h-full object-cover opacity-50 group-hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
              {!activeVideo ? (
                <button
                  type="button"
                  onClick={() => setActiveVideo(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-[#C8A45A] bg-[#030303]/80 text-[#C8A45A] flex items-center justify-center hover:bg-[#C8A45A] hover:text-[#030303] transition-all duration-300"
                  aria-label="Assistir ao vídeo institucional"
                >
                  <Play className="w-5 h-5 ml-1" fill="currentColor" />
                </button>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Vídeo sobre artesanato em relojoaria de luxo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Depoimentos de Clientes */}
      <section className="py-24" aria-labelledby="depoimentos-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Experiência"
              title="A Opinião de Colecionadores"
              centered
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.id} delay={index * 120}>
                <blockquote className="border border-white/5 bg-[#070707] p-8 h-full flex flex-col hover:border-[#C8A45A]/30 transition-all duration-300">
                  <p className="text-sm leading-relaxed text-[#F5F2EA]/80 mb-6 flex-1 font-light italic">
                    “{t.quote}”
                  </p>
                  <footer>
                    <p className="text-sm font-serif font-medium text-[#E7D2A3]">{t.name}</p>
                    <p className="text-[11px] uppercase tracking-wider text-[#F5F2EA]/40 mt-0.5">{t.role} · {t.since}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 bg-[#070707] border-t border-white/[0.04]" aria-labelledby="instagram-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader label="Social" title="Lifestyle Vanguard" subtitle="Acompanhe o dia a dia e os novos recebidos do acervo em @vanguardhorology" centered />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14">
            {instagramPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 80}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block relative aspect-square overflow-hidden border border-white/10 hover:border-[#C8A45A]/50 transition-all duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-titulo">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1600"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-[#030303]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal centered>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C8A45A] mb-4">Consultoria Especializada</p>
          </ScrollReveal>
          <ScrollReveal delay={150} centered>
            <h2 id="cta-titulo" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-[1.2] mb-6">
              Deseja negociar ou encontrar uma peça específica?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300} centered>
            <p className="text-[#F5F2EA]/70 max-w-xl mx-auto mb-10 text-sm sm:text-base font-light">
              Nossa equipe de concierge está de prontidão para intermediar aquisições sob encomenda e consultorias privadas de investimento.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450} centered>
            <WhatsAppButton
              label="Falar com o Concierge"
              message="Olá! Tenho interesse no cupom VANGUARD10 e gostaria de saber mais sobre os relógios disponíveis."
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}