import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { brands, products } from '../data';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader } from '../components/Ui';
import { ProductCard } from '../components/ProductCard';

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'Boutique | Vanguard Horology Co.';
  }, []);

  const selectedBrand = searchParams.get('brand') || '';
  const selectedCollection = searchParams.get('collection') || '';

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const brandMatch = !selectedBrand || product.brandSlug === selectedBrand;
      const collectionMatch = !selectedCollection || product.collection === selectedCollection;
      return brandMatch && collectionMatch;
    });
  }, [selectedBrand, selectedCollection]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const activeFiltersCount = [selectedBrand, selectedCollection].filter(Boolean).length;

  return (
    <main id="conteudo-principal" className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="Boutique"
            title="Acervo exclusivo"
            subtitle="Filtre por marca ou coleção e descubra peças autênticas das mais prestigiadas casas relojoeiras."
          />
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-10">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#C8A45A]">Filtros</h3>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-[#F5F2EA]/50 hover:text-[#E7D2A3] transition-colors"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <div className="mb-8">
                <h4 className="text-sm mb-3">Marca</h4>
                <ul className="space-y-2">
                  {brands.map((brand) => {
                    const active = selectedBrand === brand.slug;
                    return (
                      <li key={brand.id}>
                        <button
                          type="button"
                          onClick={() => {
                            const params = new URLSearchParams(searchParams);
                            if (active) {
                              params.delete('brand');
                            } else {
                              params.set('brand', brand.slug);
                            }
                            setSearchParams(params);
                          }}
                          className={`w-full text-left text-sm transition-colors duration-350 ${
                            active ? 'text-[#C8A45A]' : 'text-[#F5F2EA]/60 hover:text-[#E7D2A3]'
                          }`}
                          aria-pressed={active}
                        >
                          {brand.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-sm mb-3">Coleção</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Mergulho Profissional', slug: 'mergulho-profissional' },
                    { label: 'Relógios de Gala', slug: 'relogios-de-gala' },
                    { label: 'Esportivos', slug: 'esportivos' },
                    { label: 'Complicações', slug: 'complicacoes' },
                    { label: 'Edições Limitadas', slug: 'edicoes-limitadas' },
                  ].map((col) => {
                    const active = selectedCollection === col.slug;
                    return (
                      <li key={col.slug}>
                        <button
                          type="button"
                          onClick={() => {
                            const params = new URLSearchParams(searchParams);
                            if (active) {
                              params.delete('collection');
                            } else {
                              params.set('collection', col.slug);
                            }
                            setSearchParams(params);
                          }}
                          className={`w-full text-left text-sm transition-colors duration-350 ${
                            active ? 'text-[#C8A45A]' : 'text-[#F5F2EA]/60 hover:text-[#E7D2A3]'
                          }`}
                          aria-pressed={active}
                        >
                          {col.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filters */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-[#2A2A2A] text-sm text-[#F5F2EA]/80 hover:border-[#C8A45A]/40 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 flex items-center justify-center text-[10px] bg-[#C8A45A] text-[#050505] rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-[#F5F2EA]/50 hover:text-[#E7D2A3] transition-colors"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              <div
                className="absolute inset-0 bg-black/70"
                onClick={() => setMobileFiltersOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute top-0 left-0 bottom-0 w-4/5 max-w-sm bg-[#0E0E0E] border-r border-white/[0.08] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#C8A45A]">Filtros</h3>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2A2A2A] text-[#F5F2EA]/80"
                    aria-label="Fechar filtros"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm mb-3">Marca</h4>
                  <ul className="space-y-3">
                    {brands.map((brand) => {
                      const active = selectedBrand === brand.slug;
                      return (
                        <li key={brand.id}>
                          <button
                            type="button"
                            onClick={() => {
                              const params = new URLSearchParams(searchParams);
                              if (active) {
                                params.delete('brand');
                              } else {
                                params.set('brand', brand.slug);
                              }
                              setSearchParams(params);
                            }}
                            className={`w-full text-left text-sm transition-colors ${
                              active ? 'text-[#C8A45A]' : 'text-[#F5F2EA]/60'
                            }`}
                          >
                            {brand.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm mb-3">Coleção</h4>
                  <ul className="space-y-3">
                    {[
                      { label: 'Mergulho Profissional', slug: 'mergulho-profissional' },
                      { label: 'Relógios de Gala', slug: 'relogios-de-gala' },
                      { label: 'Esportivos', slug: 'esportivos' },
                      { label: 'Complicações', slug: 'complicacoes' },
                      { label: 'Edições Limitadas', slug: 'edicoes-limitadas' },
                    ].map((col) => {
                      const active = selectedCollection === col.slug;
                      return (
                        <li key={col.slug}>
                          <button
                            type="button"
                            onClick={() => {
                              const params = new URLSearchParams(searchParams);
                              if (active) {
                                params.delete('collection');
                              } else {
                                params.set('collection', col.slug);
                              }
                              setSearchParams(params);
                            }}
                            className={`w-full text-left text-sm transition-colors ${
                              active ? 'text-[#C8A45A]' : 'text-[#F5F2EA]/60'
                            }`}
                          >
                            {col.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-sm text-[#F5F2EA]/50 mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'peça encontrada' : 'peças encontradas'}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={(index % 3) * 80}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-[rgba(200,164,90,0.18)]">
                <p className="text-[#F5F2EA]/60 mb-4">Nenhuma peça encontrada para os filtros selecionados.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-[#C8A45A]/60 text-sm text-[#C8A45A] hover:bg-[#C8A45A]/8 transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
