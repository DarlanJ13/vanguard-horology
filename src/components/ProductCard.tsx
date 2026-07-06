import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import type { Product } from '../types';
import { formatCurrency } from '../lib/format';

export function ProductCard({ product, showWishlist = true }: { product: Product; showWishlist?: boolean }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  return (
    <article className="group relative bg-[#0E0E0E] border border-[rgba(200,164,90,0.18)] hover:border-[#C8A45A]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(200,164,90,0.14)] hover:-translate-y-1 transition-all duration-350 overflow-hidden">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-[#050505]">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-350" />
        {product.new && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-widest bg-[#C8A45A] text-[#050505] font-medium">
            Novidade
          </span>
        )}
        {product.featured && !product.new && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-widest border border-[#C8A45A] text-[#C8A45A]">
            Destaque
          </span>
        )}
      </Link>

      <div className="p-5">
        <p className="text-[11px] uppercase tracking-widest text-[#C8A45A] mb-1">{product.brand}</p>
        <h3 className="text-base leading-tight mb-1 group-hover:text-[#E7D2A3] transition-colors duration-350">
          <Link to={`/product/${product.id}`}>{product.model}</Link>
        </h3>
        <p className="mono text-xs text-[#F5F2EA]/50 mb-3">{product.reference}</p>
        <p className="text-sm mb-4">{formatCurrency(product.price)}</p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex-1 h-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A45A] text-[#050505] text-xs font-medium tracking-wider uppercase hover:shadow-[0_0_20px_rgba(200,164,90,0.28)] hover:-translate-y-0.5 transition-all duration-350"
            aria-label={`Adicionar ${product.model} ao carrinho`}
          >
            <ShoppingBag className="w-4 h-4" />
            Adicionar
          </button>
          {showWishlist && (
            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-350 ${
                liked
                  ? 'border-[#C8A45A] bg-[#C8A45A]/10 text-[#C8A45A]'
                  : 'border-[#2A2A2A] text-[#F5F2EA]/70 hover:border-[#C8A45A]/40 hover:text-[#C8A45A]'
              }`}
              aria-label={liked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
