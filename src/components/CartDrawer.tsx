import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../lib/format';

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/70 transition-opacity duration-350 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[#0E0E0E] border-l border-white/[0.08] shadow-2xl transform transition-transform duration-350 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
            <h2 id="cart-title" className="text-xl tracking-wide">
              Sua seleção
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2A2A2A] text-[#F5F2EA]/80 hover:text-[#C8A45A] hover:border-[#C8A45A]/40 transition-all duration-350"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[#C8A45A]/40 mb-4" />
              <p className="text-[#F5F2EA]/70 mb-6">
                Seu carrinho está vazio.<br />Descubra peças exclusivas na boutique.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#C8A45A] text-[#050505] text-sm font-medium tracking-wider uppercase hover:shadow-[0_0_24px_rgba(200,164,90,0.28)] hover:-translate-y-0.5 transition-all duration-350"
              >
                Explorar boutique
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-4">
                    <Link to={`/product/${product.id}`} onClick={onClose} className="shrink-0">
                      <img
                        src={product.image}
                        alt={product.model}
                        loading="lazy"
                        className="w-20 h-24 object-cover rounded border border-white/[0.08]"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-[#C8A45A]">
                        {product.brand}
                      </p>
                      <Link
                        to={`/product/${product.id}`}
                        onClick={onClose}
                        className="block text-[#F5F2EA] text-sm truncate hover:text-[#E7D2A3] transition-colors"
                      >
                        {product.model}
                      </Link>
                      <p className="mono text-xs text-[#F5F2EA]/50 mt-0.5">{product.reference}</p>
                      <p className="text-sm mt-2">{formatCurrency(product.price)}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="text-[#F5F2EA]/40 hover:text-red-400 transition-colors"
                        aria-label={`Remover ${product.model}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-2 border border-[#2A2A2A] rounded-full px-1.5 py-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#F5F2EA]/70 hover:text-[#C8A45A]"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#F5F2EA]/70 hover:text-[#C8A45A]"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="px-6 py-5 border-t border-white/[0.08] bg-[#050505]/60">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#F5F2EA]/60">
                    {totalItems} {totalItems === 1 ? 'item' : 'itens'}
                  </span>
                  <span className="text-lg">{formatCurrency(subtotal)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full text-center h-12 rounded-full bg-[#C8A45A] text-[#050505] text-sm font-medium tracking-wider uppercase hover:shadow-[0_0_28px_rgba(200,164,90,0.30)] hover:-translate-y-0.5 transition-all duration-350"
                >
                  Finalizar pedido
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );

  return mounted ? createPortal(drawer, document.body) : null;
}
