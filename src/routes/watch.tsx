import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Heart, Pause, Play, ShoppingBag, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button, getProduct, useShop } from "@/components/ui";
import { formatPrice, type Product } from "@/lib/catalog";
import { reelStories, type ReelStory } from "@/lib/reels";

export const Route = createFileRoute("/watch")({
  validateSearch: (search: Record<string, unknown>) => ({ story: typeof search["story"] === "string" ? search["story"] : "city-colour" }),
  head: () => ({ meta: [
    { title: "Watch & Shop — AARO" },
    { name: "description", content: "Discover AARO looks through immersive shoppable fashion stories." },
    { property: "og:title", content: "Watch & Shop — AARO" },
    { property: "og:description", content: "See the look in motion, then shop each piece." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WatchPage,
});

function WatchPage() {
  const { story: requestedStory } = Route.useSearch();
  const initialIndex = Math.max(0, reelStories.findIndex((story) => story.id === requestedStory));
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [sheetStory, setSheetStory] = useState<ReelStory | null>(null);
  const navigate = useNavigate({ from: "/watch" });
  const storyRefs = useRef<Array<HTMLElement | null>>([]);
  const firstStory = reelStories[0];
  if (!firstStory) return null;
  const activeStory = reelStories[activeIndex] ?? firstStory;

  useEffect(() => {
    const node = storyRefs.current[initialIndex];
    if (node && initialIndex > 0) node.scrollIntoView({ block: "start" });
  }, [initialIndex]);

  const selectStory = (index: number) => {
    const bounded = Math.max(0, Math.min(reelStories.length - 1, index));
    const story = reelStories[bounded];
    if (!story) return;
    setActiveIndex(bounded);
    navigate({ search: { story: story.id }, replace: true });
  };

  return <main className="bg-reel text-reel-foreground">
    <h1 className="sr-only">Watch & Shop fashion stories</h1>
    <div className="md:hidden">
      <div className="h-[calc(100svh-6.5rem)] snap-y snap-mandatory overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reelStories.map((story, index) => <ReelFrame key={story.id} story={story} active={activeIndex === index} openProducts={() => setSheetStory(story)} storyIndex={index} storyCount={reelStories.length} frameRef={(node) => { storyRefs.current[index] = node; }} onVisible={() => selectStory(index)}/>)}
      </div>
    </div>

    <div className="hidden min-h-[calc(100svh-7rem)] items-center md:flex">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[auto_minmax(330px,420px)_minmax(280px,360px)] items-center gap-6 px-8 py-10 lg:gap-10">
        <div className="flex flex-col gap-2">
          <Button variant="light" size="icon" aria-label="Previous story" disabled={activeIndex === 0} onClick={() => selectStory(activeIndex - 1)}><ChevronLeft size={20}/></Button>
          <p className="py-2 text-center text-[10px] font-semibold tracking-widest text-reel-foreground/55">{activeIndex + 1}/{reelStories.length}</p>
          <Button variant="light" size="icon" aria-label="Next story" disabled={activeIndex === reelStories.length - 1} onClick={() => selectStory(activeIndex + 1)}><ChevronRight size={20}/></Button>
        </div>
        <ReelFrame story={activeStory} active openProducts={() => setSheetStory(activeStory)} storyIndex={activeIndex} storyCount={reelStories.length}/>
        <DesktopProducts story={activeStory}/>
      </div>
    </div>
    {sheetStory && <ProductSheet story={sheetStory} close={() => setSheetStory(null)}/>} 
  </main>;
}

function ReelFrame({ story, active, openProducts, storyIndex, storyCount, frameRef, onVisible }: { story: ReelStory; active: boolean; openProducts: () => void; storyIndex: number; storyCount: number; frameRef?: (node: HTMLElement | null) => void; onVisible?: () => void }) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const { wishes, toggleWish } = useShop();
  useEffect(() => {
    if (!onVisible) return;
    const node = document.querySelector(`[data-reel-id="${story.id}"]`);
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting && entry.intersectionRatio > 0.7) onVisible(); }, { threshold: [0.7] });
    observer.observe(node);
    return () => observer.disconnect();
  }, [onVisible, story.id]);

  const firstSlug = story.taggedProductSlugs[0];
  return <section ref={frameRef} data-reel-id={story.id} aria-label={`${story.title}, story ${storyIndex + 1} of ${storyCount}`} className="relative mx-auto aspect-[9/16] h-auto max-h-[calc(100svh-6.5rem)] w-[min(100%,calc((100svh-6.5rem)*9/16))] snap-start overflow-hidden bg-foreground md:max-h-[76svh] md:w-auto md:max-w-[420px]">
    {story.videoUrl ? <video src={story.videoUrl} poster={story.poster} muted={muted} autoPlay={playing && active} loop playsInline className="h-full w-full object-cover"/> : <img src={story.poster} alt={`${story.title} fashion story`} loading={storyIndex === 0 ? "eager" : "lazy"} width={768} height={1365} className="h-full w-full object-cover"/>}
    <div className="absolute inset-0 bg-reel-overlay"/>
    <div className="absolute left-3 top-3 flex gap-2">
      <span className="bg-reel/65 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-widest backdrop-blur-sm">Story {storyIndex + 1}/{storyCount}</span>
    </div>
    <div className="absolute right-3 top-3 flex gap-2">
      <Button variant="light" size="icon" className="h-10 w-10 bg-background/90" aria-label={playing ? "Pause story" : "Play story"} aria-pressed={!playing} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={17}/> : <Play size={17}/>}</Button>
      <Button variant="light" size="icon" className="h-10 w-10 bg-background/90" aria-label={muted ? "Unmute story" : "Mute story"} aria-pressed={muted} onClick={() => setMuted(!muted)}>{muted ? <VolumeX size={17}/> : <Volume2 size={17}/>}</Button>
    </div>
    <div className="absolute bottom-5 right-3 flex flex-col gap-2">
      {firstSlug && <Button variant="light" size="icon" className="h-11 w-11 bg-background/90" aria-label={`${wishes.has(firstSlug) ? "Remove first product from" : "Add first product to"} wishlist`} aria-pressed={wishes.has(firstSlug)} onClick={() => toggleWish(firstSlug)}><Heart size={18} fill={wishes.has(firstSlug) ? "currentColor" : "none"}/></Button>}
      <Button variant="light" size="icon" className="relative h-11 w-11 bg-background/90" aria-label={`Shop ${story.taggedProductSlugs.length} tagged products`} onClick={openProducts}><ShoppingBag size={18}/><span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center bg-accent px-1 text-[9px] text-accent-foreground">{story.taggedProductSlugs.length}</span></Button>
    </div>
    <div className="absolute bottom-0 left-0 max-w-[calc(100%-4.5rem)] p-5 md:p-6">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-reel-foreground/75">{story.creator}</p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl">{story.title}</h2>
      <p className="mt-2 max-w-xs text-sm leading-5 text-reel-foreground/80">{story.caption}</p>
      <Button variant="light" size="sm" className="mt-4" onClick={openProducts}>Shop this look</Button>
    </div>
  </section>;
}

function DesktopProducts({ story }: { story: ReelStory }) {
  return <aside className="bg-background p-6 text-foreground lg:p-8" aria-label={`Products in ${story.title}`}>
    <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Shop this story</p>
    <h2 className="mt-3 font-display text-3xl">{story.title}</h2>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">Choose a piece without leaving the story.</p>
    <div className="mt-6 divide-y divide-border border-y border-border">{story.taggedProductSlugs.map((slug) => { const product = getProduct(slug); return product ? <TaggedProduct key={slug} product={product} compact/> : null; })}</div>
  </aside>;
}

function ProductSheet({ story, close }: { story: ReelStory; close: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-end bg-overlay md:items-center md:justify-center" role="dialog" aria-modal="true" aria-labelledby="reel-sheet-title" onClick={close}>
    <div className="max-h-[82svh] w-full overflow-y-auto bg-background p-5 text-foreground md:max-w-xl md:p-7" onClick={(event) => event.stopPropagation()}>
      <div className="sticky top-0 z-10 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 bg-background pb-4">
        <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-widest text-accent">Tagged products</p><h2 id="reel-sheet-title" className="mt-1 truncate font-display text-3xl">{story.title}</h2></div>
        <Button variant="ghost" size="icon" aria-label="Close products" onClick={close}><X size={20}/></Button>
      </div>
      <div className="divide-y divide-border border-t border-border">{story.taggedProductSlugs.map((slug) => { const product = getProduct(slug); return product ? <TaggedProduct key={slug} product={product}/> : null; })}</div>
    </div>
  </div>;
}

function TaggedProduct({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addToBag, wishes, toggleWish } = useShop();
  const [colour, setColour] = useState(product.colors[0] ?? "default");
  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);
  const add = () => { if (!size) return; addToBag(product.slug, size, colour); setAdded(true); };
  return <article className="py-5">
    <div className="grid grid-cols-[72px_minmax(0,1fr)_auto] gap-3">
      <img src={product.image} alt="" loading="lazy" width={96} height={128} className="h-24 w-[72px] object-cover" style={product.position ? { objectPosition: product.position } : undefined}/>
      <div className="min-w-0"><p className="truncate text-sm font-medium">{product.name}</p><p className="mt-1 text-sm font-semibold">{formatPrice(product.price)} {product.mrp && <span className="ml-1 text-xs font-normal text-muted-foreground line-through">{formatPrice(product.mrp)}</span>}</p><Link to="/product/$slug" params={{ slug: product.slug }} className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-widest underline">View product</Link></div>
      <Button variant="ghost" size="icon" className="shrink-0" aria-label={`${wishes.has(product.slug) ? "Remove" : "Add"} ${product.name} ${wishes.has(product.slug) ? "from" : "to"} wishlist`} aria-pressed={wishes.has(product.slug)} onClick={() => toggleWish(product.slug)}><Heart size={17} fill={wishes.has(product.slug) ? "currentColor" : "none"}/></Button>
    </div>
    {!compact && <div className="mt-4 flex gap-2 overflow-x-auto pb-1">{product.colors.map((item, index) => <Button key={item} variant={colour === item ? "primary" : "outline"} size="sm" onClick={() => setColour(item)}><span className={`mr-2 h-3 w-3 rounded-full border border-border swatch-${index % 5}`}/>{item}</Button>)}</div>}
    <div className="mt-4 grid grid-cols-5 gap-2">{product.sizes.map(({ label, available }) => <Button key={label} variant={size === label ? "primary" : "outline"} size="sm" disabled={!available} aria-pressed={size === label} onClick={() => setSize(label)}>{label}</Button>)}</div>
    <Button className="mt-3 w-full" size="sm" disabled={!size} onClick={add}>{added ? "Added to bag" : size ? `Add size ${size}` : "Select a size"}</Button>
  </article>;
}