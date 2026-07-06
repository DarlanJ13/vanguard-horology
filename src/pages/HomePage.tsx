import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { brands, products, testimonials, instagramPosts } from '../data';
import { ScrollReveal } from '../components/ScrollReveal';
import { WhatsAppButton, ButtonSecondary, SectionHeader } from '../components/Ui';
import { ProductCard } from '../components/ProductCard';

const heroImage =
  'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1600&auto=format&fit=crop';

export function HomePage() {
  const [activeVideo, setActiveVideo] = useState(false);

  useEffect(() => {
    document.title = 'Vanguard Horology Co. | Alta Relojoaria em Campinas';
  }, []);

  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <main id="conteudo-principal">
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

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Relógio de luxo em iluminação dramática de estúdio"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-20">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45A] mb-5">
              Alta Relojoaria · Campinas
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-4xl mb-6">
              A precisão da<br />
              <span className="text-[#E7D2A3]">quiet luxury</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-base sm:text-lg text-[#F5F2EA]/80 max-w-xl leading-relaxed mb-10">
              Curadoria exclusiva das mais prestigiadas casas relojoeiras do mundo, com
              atendimento personalizado em ambiente discreto e refinado.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="flex flex-wrap items-center gap-4">
              <WhatsAppButton message="Olá, tenho interesse em conhecer a coleção Vanguard Horology. Gostaria de agendar um atendimento." />
              <ButtonSecondary to="/shop">Explorar coleções</ButtonSecondary>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 border-b border-white/[0.06]" aria-labelledby="marcas-titulo">
        <h2 id="marcas-titulo" className="sr-only">
          Marcas em destaque
        </h2>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
            {brands.slice(0, 6).map((brand) => (
              <Link
                key={brand.id}
                to={`/shop?brand=${brand.slug}`}
                className="group text-sm sm:text-base tracking-widest uppercase text-[#F5F2EA]/40 hover:text-[#E7D2A3] transition-colors duration-350 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A45A] group-hover:after:w-full after:transition-all after:duration-350"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 lg:py-32" aria-labelledby="colecoes-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Coleções"
              title="Cada peça, uma história de precisão"
              subtitle="Navegue entre as categorias que definem o universo da alta relojoaria suíça."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              { id: 'diver', name: 'Mergulho Profissional', slug: 'mergulho-profissional' },
              { id: 'dress', name: 'Relógios de Gala', slug: 'relogios-de-gala' },
              { id: 'sports', name: 'Esportivos de Altíssimo Nível', slug: 'esportivos' },
              { id: 'complications', name: 'Complicações', slug: 'complicacoes' },
            ].map((collection, index) => (
              <ScrollReveal key={collection.id} delay={index * 100}>
                <Link
                  to={`/shop?collection=${collection.slug}`}
                  className="group block relative h-[360px] lg:h-[420px] overflow-hidden border border-[rgba(200,164,90,0.18)] hover:border-[#C8A45A]/60 transition-all duration-350"
                >
                  <div className="absolute inset-0 bg-[#0E0E0E] group-hover:bg-[#111111] transition-colors duration-350" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45A] mb-2">Coleção</p>
                    <h3 className="text-xl lg:text-2xl leading-tight group-hover:text-[#E7D2A3] transition-colors duration-350">
                      {collection.name}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F5F2EA]/50 group-hover:text-[#C8A45A] transition-colors duration-350">
                      Ver peças <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]" aria-labelledby="sobre-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(200,164,90,0.18)]">
                <img
                  src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1200&auto=format&fit=crop"
                  alt="Ambiente sofisticado da boutique Vanguard Horology"
                  loading="lazy"
                  className="w-full h-full object-cover"
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
                <p className="mt-6 text-[#F5F2EA]/70 leading-relaxed">
                  Selecionamos manualmente cada peça, garantindo autenticidade, procedência e estado
                  de conservação exemplar. Nosso time acompanha o cliente da escolha ao pós-venda,
                  oferecendo consultoria sobre movimentos, materiais e valorização de coleções.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <ul className="mt-8 space-y-4">
                  {['Autenticidade comprovada', 'Coleções raras e edições limitadas', 'Atendimento exclusivo por agendamento'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#F5F2EA]/80">
                      <ChevronRight className="w-4 h-4 text-[#C8A45A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship / Video Placeholder */}
      <section className="py-24 lg:py-32" aria-labelledby="artesanato-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Artesanato"
              title="Onde a engenharia encontra a arte"
              subtitle="Cada detalhe de um relógio de luxo é uma homenagem à tradição, à paciência e à excelência suíça."
              centered
            />
          </ScrollReveal>

          <ScrollReveal delay={200} centered>
            <div className="mt-14 relative aspect-video max-w-5xl mx-auto overflow-hidden border border-[rgba(200,164,90,0.18)] group">
              <img
                src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop"
                alt="Macro da engrenagem de um movimento mecânico suíço"
                loading="lazy"
                className="w-full h-full object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              {!activeVideo ? (
                <button
                  type="button"
                  onClick={() => setActiveVideo(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-[#C8A45A] bg-[#050505]/60 text-[#C8A45A] flex items-center justify-center hover:bg-[#C8A45A]/10 hover:scale-105 transition-all duration-350"
                  aria-label="Assistir ao vídeo sobre artesanato"
                >
                  <Play className="w-7 h-7 ml-1" fill="currentColor" />
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

      {/* Experience */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]" aria-labelledby="experiencia-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Experiência"
              title="Luxo é, acima de tudo, uma experiência"
              centered
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: 'Atendimento privativo',
                text: 'Agende seu horário e receba consultoria individualizada em ambiente reservado.',
              },
              {
                title: 'Procedência documentada',
                text: 'Todas as peças passam por rigorosa autenticação antes de integrarem nosso acervo.',
              },
              {
                title: 'Pós-venda especializado',
                text: 'Manutenção, ajustes de pulseira e orientações para preservar o valor da sua coleção.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 120}>
                <div className="border border-[rgba(200,164,90,0.18)] p-8 h-full hover:border-[#C8A45A]/50 hover:bg-[#0E0E0E] transition-all duration-350">
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-[#F5F2EA]/60 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-32" aria-labelledby="destaques-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between mb-12">
            <ScrollReveal>
              <SectionHeader label="Acervo" title="Peças em destaque" />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ButtonSecondary to="/shop">Ver toda a boutique</ButtonSecondary>
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

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]" aria-labelledby="depoimentos-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Depoimentos"
              title="A confiança de quem coleciona com a Vanguard"
              centered
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.id} delay={index * 120}>
                <blockquote className="border border-[rgba(200,164,90,0.18)] p-8 h-full flex flex-col hover:border-[#C8A45A]/40 transition-colors duration-350">
                  <p className="text-base leading-relaxed text-[#F5F2EA]/90 mb-6 flex-1">
                    “{t.quote}”
                  </p>
                  <footer>
                    <p className="text-sm font-medium text-[#E7D2A3]">{t.name}</p>
                    <p className="text-xs text-[#F5F2EA]/50 mt-0.5">{t.role} · {t.since}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 lg:py-32" aria-labelledby="instagram-titulo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal centered>
            <SectionHeader
              label="Galeria"
              title="Momentos Vanguard"
              subtitle="Siga @vanguardhorology e acompanhe os bastidores do mundo da alta relojoaria."
              centered
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14">
            {instagramPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 80}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block relative aspect-square overflow-hidden border border-[rgba(200,164,90,0.18)] hover:border-[#C8A45A]/60 transition-all duration-350"
                  aria-label="Ver publicação no Instagram"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/40 transition-colors duration-350" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cta-titulo">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal centered>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A45A] mb-4">
              Agende seu atendimento
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} centered>
            <h2 id="cta-titulo" className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6">
              Pronto para encontrar a próxima peça da sua coleção?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={300} centered>
            <p className="text-[#F5F2EA]/70 max-w-2xl mx-auto mb-10">
              Nossos consultores estão disponíveis para um atendimento exclusivo, com segurança,
              discrição e acesso a peças raras selecionadas.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450} centered>
            <WhatsAppButton
              label="Conversar no WhatsApp"
              message="Olá, gostaria de agendar um atendimento exclusivo na Vanguard Horology."
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
