import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Truck, Undo2 } from "lucide-react";
import campaignHero from "@/assets/campaign-hero.jpg";
import productGrid from "@/assets/products-grid.jpg";
import reelsGrid from "@/assets/reels-grid.jpg";
import redDress from "@/assets/product-red-dress.jpg";
import { products } from "@/lib/catalog";
import { Button, ProductCard, SectionTitle } from "@/components/ui";
import { ReelCarousel } from "@/components/reel-carousel";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AARO — Contemporary Indian Fashion" },
    { name: "description", content: "Discover modern womenswear and menswear through editorial collections, styled looks, and shoppable stories." },
    { property: "og:title", content: "AARO — Contemporary Indian Fashion" },
    { property: "og:description", content: "Modern Indian fashion, styled for now." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const categories: Array<[string, string]> = [
  ["Dresses", "14% 15%"], ["Shirts", "50% 15%"], ["Co-ords", "87% 15%"], ["Tops", "14% 86%"], ["Denim", "50% 86%"], ["Jumpsuits", "87% 86%"],
];

function HomePage() {
  return <main>
    <section className="relative h-[78svh] min-h-[570px] overflow-hidden md:h-[calc(100vh-7rem)] md:min-h-[680px]">
      <img src={campaignHero} alt="AARO summer campaign with two models" width={1536} height={1024} className="h-full w-full object-cover object-[48%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-10 text-hero-foreground md:px-10 md:pb-16">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em]">The September Edit · 2026</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-8xl">In your element.</h1>
        <p className="mt-4 max-w-md text-sm text-hero-foreground/85 md:text-base">Modern silhouettes. Considered colour. Made for a life in motion.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link to="/shop" search={{ for: "women" }}><Button variant="light">Shop women</Button></Link><Link to="/shop" search={{ for: "men" }}><Button className="border border-hero-foreground bg-transparent text-hero-foreground hover:bg-hero-foreground hover:text-foreground">Shop men</Button></Link></div>
      </div>
    </section>

    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24"><SectionTitle eyebrow="Just landed" title="New, right now" link/><div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-5">{products.slice(0,4).map(product=><ProductCard product={product} key={product.slug}/>)}</div></section>

    <section className="border-y border-border bg-muted py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle eyebrow="Find your thing" title="Shop by category"/><div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">{categories.map(([name,position])=><Link to="/shop" search={{ for: name.toLowerCase() }} key={name} className="group"><div className="aspect-[3/4] overflow-hidden bg-secondary"><img src={productGrid} alt={`${name} collection`} loading="lazy" width={1536} height={1024} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" style={{objectPosition:position}}/></div><p className="mt-3 font-display text-xl">{name}</p></Link>)}</div></div></section>

    <section className="grid min-h-[80svh] md:grid-cols-2"><div className="min-h-[55svh] bg-cover bg-center" style={{backgroundImage:`url(${redDress})`}}/><div className="flex items-center bg-secondary px-6 py-14 md:px-16"><div className="max-w-md"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">The occasion issue</p><h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">After dark,<br/>in full colour.</h2><p className="mt-6 text-sm leading-6 text-muted-foreground">Statement shapes meet saturated colour in our edit for every RSVP on your calendar.</p><Link to="/shop" search={{ for: "occasion" }} className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-xs font-semibold uppercase tracking-widest">Explore the edit <ArrowRight size={14}/></Link></div></div></section>

    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24"><SectionTitle eyebrow="Most wanted" title="Best sellers" link/><div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-5">{products.slice(2,6).map(product=><ProductCard product={product} key={product.slug}/>)}</div></section>

    <section className="bg-foreground py-16 text-background md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle eyebrow="Styled together" title="Shop the look"/><div className="grid gap-8 md:grid-cols-[1.35fr_.65fr] md:items-center"><div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]"><img src={campaignHero} alt="Ivory and charcoal styled look" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover"/><span className="absolute left-[34%] top-[36%] h-6 w-6 animate-pulse rounded-full border-4 border-background bg-accent"/><span className="absolute left-[64%] top-[43%] h-6 w-6 animate-pulse rounded-full border-4 border-background bg-accent"/></div><div className="space-y-5">{products.slice(1,3).map(product=><div key={product.slug} className="flex items-center gap-4 border-b border-background/20 pb-5"><img src={product.image} alt="" loading="lazy" width={96} height={128} className="h-24 w-20 object-cover" style={product.position ? {objectPosition:product.position}:undefined}/><div className="min-w-0 flex-1"><p className="text-sm font-medium">{product.name}</p><p className="mt-1 text-xs text-background/60">Select a size on product page</p></div><Link to="/product/$slug" params={{slug:product.slug}} aria-label={`View ${product.name}`}><ArrowRight/></Link></div>)}</div></div></div></section>

    <ReelCarousel/>

    <section className="bg-secondary py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle eyebrow="AARO community" title="Worn your way"/><p className="mb-7 max-w-lg text-sm text-muted-foreground">Sample creator content showing how the community styles this season’s pieces.</p><div className="grid grid-cols-2 gap-2 md:grid-cols-4">{["0%","33%","66%","100%"].map((position,index)=><div key={position} className="aspect-[3/4] overflow-hidden"><img src={reelsGrid} alt={`Community style ${index+1}`} loading="lazy" width={1536} height={1024} className="h-full w-full object-cover" style={{objectPosition:position}}/></div>)}</div></div></section>

    <section className="border-b border-border"><div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">{[{Icon:Sparkles,title:"Thoughtful design",text:"Made for repeat wear"},{Icon:Undo2,title:"Easy returns",text:"Clear, simple process"},{Icon:Truck,title:"Delivery updates",text:"Track every step"},{Icon:ShieldCheck,title:"Secure checkout",text:"Protected payment flow"}].map(({Icon,title,text})=><div className="p-6 md:p-8" key={title}><Icon size={22}/><p className="mt-4 text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-muted-foreground">{text}</p></div>)}</div></section>
  </main>;
}
