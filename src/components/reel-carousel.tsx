import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Play, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { Button, SectionTitle } from "@/components/ui";
import { reelStories } from "@/lib/reels";

export function ReelCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  return <section className="overflow-hidden py-16 md:py-24">
    <div className="mx-auto max-w-[1440px] px-4 md:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <SectionTitle eyebrow="Watch · Want · Wear" title="Watch & Shop"/>
        <div className="mb-6 flex items-center gap-1 md:mb-9">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Previous fashion stories" onClick={() => move(-1)}><ChevronLeft size={19}/></Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Next fashion stories" onClick={() => move(1)}><ChevronRight size={19}/></Button>
          <Link to="/watch" search={{ story: reelStories[0]?.id ?? "city-colour" }} className="ml-2 shrink-0 border-b border-foreground pb-1 text-[10px] font-semibold uppercase tracking-widest">Watch all</Link>
        </div>
      </div>
      <p className="-mt-3 mb-7 max-w-md text-sm text-muted-foreground md:-mt-5">Four new looks, styled in motion and ready to shop.</p>
    </div>
    <div ref={trackRef} aria-label="Shoppable fashion stories" className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 md:px-[max(2rem,calc((100vw-1440px)/2+2rem))]">
      {reelStories.map((story) => <Link key={story.id} to="/watch" search={{ story: story.id }} className="group relative aspect-[9/16] w-[78%] shrink-0 snap-start overflow-hidden bg-muted sm:w-[44%] lg:w-[23%]" aria-label={`Watch ${story.title}, ${story.taggedProductSlugs.length} products`}>
        <img src={story.poster} alt={`${story.title} fashion story`} loading="lazy" width={768} height={1365} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"/>
        <div className="absolute inset-0 bg-reel-overlay"/>
        <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground"><Play size={16} fill="currentColor"/></span>
        <div className="absolute inset-x-0 bottom-0 p-4 text-reel-foreground md:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-reel-foreground/75">{story.creator}</p>
          <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
            <h3 className="min-w-0 font-display text-2xl md:text-3xl">{story.title}</h3>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest"><ShoppingBag size={14}/>{story.taggedProductSlugs.length}</span>
          </div>
        </div>
      </Link>)}
    </div>
  </section>;
}