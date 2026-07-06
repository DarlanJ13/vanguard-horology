import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import type { Product } from '../types';
import { formatCurrency } from '../lib/format';

export function RelatedProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  return (
    <article className="group shrink-0 w-[260px] sm:w-[300px] bg-[#0E0E0E] border border-[rgba(200,164,90,0.18)] hover:border-[#C8A45A]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] hover:-translate-y-1 transition-all duration-350">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-[#050505]">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#C8A45A] mb-0.5">{product.brand}</p>
            <h3 className="text-sm leading-tight group-hover:text-[#E7D2A3] transition-colors">
              <Link to={`/product/${product.id}`}>{product.model}</Link>
            </h3>
            <p className="mono text-[10px] text-[#F5F2EA]/50">{product.reference}</p>
          </div>
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-350 ${
              liked
                ? 'border-[#C8A45A] bg-[#C8A45A]/10 text-[#C8A45A]'
                : 'border-[#2A2A2A] text-[#F5F2EA]/70 hover:border-[#C8A45A]/40 hover:text-[#C8A45A]'
            }`}
            aria-label={liked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
          </button>
        </div>
        <p className="text-sm mt-3">{formatCurrency(product.price)}</p>
      </div>
    </article>
  );
}
