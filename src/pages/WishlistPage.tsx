import { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeader } from '../components/Ui';
import { ProductCard } from '../components/ProductCard';

export function WishlistPage() {
  const { items } = useWishlist();

  useEffect(() => {
    document.title = 'Lista de Desejos | Vanguard Horology Co.';
  }, []);

  return (
    <main id="conteudo-principal" className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal centered>
          <SectionHeader
            label="Favoritos"
            title="Lista de desejos"
            subtitle={
              items.length > 0
                ? 'Peças selecionadas para você avaliar com calma.'
                : 'Você ainda não adicionou nenhuma peça aos favoritos.'
            }
            centered
          />
        </ScrollReveal>

        {items.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 80}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 text-center">
            <Heart className="w-12 h-12 text-[#C8A45A]/30 mx-auto mb-4" />
            <Link
              to="/shop"
              className="inline-flex items-center justify-center h-11 px-8 rounded-full border border-[#C8A45A]/60 text-sm text-[#C8A45A] hover:bg-[#C8A45A]/8 transition-colors"
            >
              Explorar boutique
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
