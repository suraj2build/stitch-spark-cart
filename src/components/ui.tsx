import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { createContext, useContext, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { formatPrice, type Product } from "@/lib/catalog";

type ShopContextValue = { bag: number; wishes: Set<string>; addToBag: (count?: number) => void; toggleWish: (slug: string) => void };
const ShopContext = createContext<ShopContextValue | null>(null);
export function ShopProvider({ children }: { children: ReactNode }) {
  const [bag, setBag] = useState(0);
  const [wishes, setWishes] = useState(new Set<string>());
  const addToBag = (count = 1) => setBag((value) => value + count);
  const toggleWish = (slug: string) => setWishes((current) => { const next = new Set(current); next.has(slug) ? next.delete(slug) : next.add(slug); return next; });
  return <ShopContext.Provider value={{ bag, wishes, addToBag, toggleWish }}>{children}</ShopContext.Provider>;
}
export function useShop() { const value = useContext(ShopContext); if (!value) throw new Error("ShopProvider missing"); return value; }

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" | "light"; size?: "sm" | "md" | "icon" }) {
  return <button className={cn("inline-flex items-center justify-center font-medium uppercase tracking-widest transition-colors disabled:cursor-not-allowed disabled:opacity-40", variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90", variant === "outline" && "border border-foreground bg-transparent text-foreground hover:bg-muted", variant === "ghost" && "text-foreground hover:bg-muted", variant === "light" && "bg-background text-foreground hover:bg-background/90", size === "sm" && "h-9 px-4 text-[11px]", size === "md" && "h-12 px-6 text-xs", size === "icon" && "h-11 w-11", className)} {...props} />;
}

export function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const { bag, wishes } = useShop();
  return <>
    <div className="bg-primary px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">New season edit · Complimentary shipping over ₹2,999</div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-20 md:px-8">
        <div className="flex items-center md:hidden"><Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMenu(true)}><Menu size={21}/></Button></div>
        <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-widest md:flex">
          <Link to="/shop" search={{ for: "women" }}>Women</Link><Link to="/shop" search={{ for: "men" }}>Men</Link><Link to="/shop" search={{ for: "new" }}>New</Link><Link to="/watch">Watch</Link>
        </nav>
        <Link to="/" className="font-display text-3xl font-semibold tracking-[0.16em]">AARO</Link>
        <div className="flex justify-end gap-0 md:gap-1">
          <Button variant="ghost" size="icon" aria-label="Search" onClick={() => setSearch(!search)}><Search size={19}/></Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" aria-label="Account"><UserRound size={19}/></Button>
          <Button variant="ghost" size="icon" className="relative hidden sm:inline-flex" aria-label={`Wishlist with ${wishes.size} items`}><Heart size={19}/>{wishes.size > 0 && <span className="absolute right-1 top-1 h-4 min-w-4 bg-accent px-1 text-[9px] leading-4 text-accent-foreground">{wishes.size}</span>}</Button>
          <Button variant="ghost" size="icon" className="relative" aria-label={`Bag with ${bag} items`}><ShoppingBag size={19}/>{bag > 0 && <span className="absolute right-1 top-1 h-4 min-w-4 bg-accent px-1 text-[9px] leading-4 text-accent-foreground">{bag}</span>}</Button>
        </div>
      </div>
      {search && <div className="border-t border-border px-4 py-3"><label className="mx-auto flex max-w-2xl items-center gap-3 border-b border-foreground py-2"><Search size={18}/><input autoFocus className="w-full bg-transparent text-sm outline-none" placeholder="Search dresses, shirts, collections…" /></label></div>}
    </header>
    {menu && <div className="fixed inset-0 z-50 bg-background p-5 md:hidden"><div className="flex items-center justify-between"><span className="font-display text-3xl tracking-[0.16em]">AARO</span><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenu(false)}><X/></Button></div><nav className="mt-14 flex flex-col gap-7 font-display text-4xl"><Link to="/shop" search={{ for: "women" }} onClick={() => setMenu(false)}>Women</Link><Link to="/shop" search={{ for: "men" }} onClick={() => setMenu(false)}>Men</Link><Link to="/shop" search={{ for: "new" }} onClick={() => setMenu(false)}>New in</Link><Link to="/watch" onClick={() => setMenu(false)}>Watch & Shop</Link></nav></div>}
  </>;
}

export function ProductCard({ product }: { product: Product }) {
  const { wishes, toggleWish, addToBag } = useShop();
  const [quick, setQuick] = useState(false);
  return <article className="group min-w-0">
    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
      <Link to="/product/$slug" params={{ slug: product.slug }}><img src={product.image} alt={product.name} loading="lazy" width={1024} height={1365} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" style={product.position ? { objectPosition: product.position } : undefined}/></Link>
      {product.badge && <span className="absolute left-2 top-2 bg-background px-2 py-1 text-[9px] font-bold tracking-widest">{product.badge}</span>}
      <Button variant="light" size="icon" className="absolute right-2 top-2 h-9 w-9" aria-label="Toggle wishlist" onClick={() => toggleWish(product.slug)}><Heart size={17} fill={wishes.has(product.slug) ? "currentColor" : "none"}/></Button>
      <Button variant="light" size="sm" className="absolute bottom-2 left-2 right-2 hidden w-[calc(100%-1rem)] group-hover:inline-flex" onClick={() => setQuick(true)}>Quick add</Button>
    </div>
    <div className="pt-3"><div className="flex items-start justify-between gap-2"><div className="min-w-0"><Link to="/product/$slug" params={{ slug: product.slug }} className="block truncate text-sm font-medium">{product.name}</Link><p className="mt-1 text-xs text-muted-foreground">{product.category} · {product.colors.length} colours</p></div></div><p className="mt-2 text-sm font-semibold">{formatPrice(product.price)} {product.mrp && <><span className="ml-1 font-normal text-muted-foreground line-through">{formatPrice(product.mrp)}</span><span className="ml-1 text-offer">{Math.round((1-product.price/product.mrp)*100)}% off</span></>}</p><Button variant="outline" size="sm" className="mt-3 w-full md:hidden" onClick={() => setQuick(true)}>Quick add</Button></div>
    {quick && <div className="fixed inset-0 z-50 flex items-end bg-overlay md:items-center md:justify-center" onClick={() => setQuick(false)}><div className="w-full bg-background p-5 md:max-w-md" onClick={(event) => event.stopPropagation()}><div className="flex justify-between"><div><p className="font-medium">Choose your size</p><p className="mt-1 text-xs text-muted-foreground">{product.name}</p></div><Button variant="ghost" size="icon" onClick={() => setQuick(false)}><X size={18}/></Button></div><div className="my-6 grid grid-cols-5 gap-2">{["XS","S","M","L","XL"].map((size) => <Button key={size} variant="outline" size="sm" onClick={() => { addToBag(); setQuick(false); }}>{size}</Button>)}</div><p className="text-xs text-muted-foreground">Selecting a size adds one item to your bag.</p></div></div>}
  </article>;
}

export function SectionTitle({ eyebrow, title, link }: { eyebrow?: string; title: string; link?: boolean }) {
  return <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 md:mb-9"><div className="min-w-0">{eyebrow && <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}<h2 className="font-display text-3xl md:text-5xl">{title}</h2></div>{link && <Link to="/shop" search={{ for: "all" }} className="shrink-0 border-b border-foreground pb-1 text-[10px] font-semibold uppercase tracking-widest">View all</Link>}</div>;
}

export function Footer() { return <footer className="mt-20 bg-foreground px-5 py-12 text-background md:px-10 md:py-16"><div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]"><div><p className="font-display text-4xl tracking-[0.15em]">AARO</p><p className="mt-4 max-w-sm text-sm text-background/70">Clothes for where you are, and wherever you’re going next.</p></div>{[["Explore","New in","Women","Men","Watch & Shop"],["Help","Delivery","Returns","Size guide","Contact"],["Follow","Instagram","Pinterest","YouTube"]].map(([heading,...items]) => <div key={heading}><p className="text-xs font-semibold uppercase tracking-widest">{heading}</p><div className="mt-4 space-y-3 text-sm text-background/70">{items.map(item=><p key={item}>{item}</p>)}</div></div>)}</div><div className="mx-auto mt-12 max-w-[1440px] border-t border-background/20 pt-5 text-[10px] uppercase tracking-widest text-background/50">Prototype experience · Sample product data</div></footer>; }
