import afterHoursPoster from "@/assets/reel-after-hours.jpg";
import blueNotePoster from "@/assets/reel-blue-note.jpg";
import cityColourPoster from "@/assets/reel-city-colour.jpg";
import linenHoursPoster from "@/assets/reel-linen-hours.jpg";

export type ReelStory = {
  id: string;
  poster: string;
  videoUrl?: string;
  title: string;
  caption: string;
  creator: string;
  taggedProductSlugs: string[];
};

export const reelStories: ReelStory[] = [
  {
    id: "city-colour",
    poster: cityColourPoster,
    title: "City colour",
    caption: "A saturated statement for every invitation after five.",
    creator: "The September Edit",
    taggedProductSlugs: ["sienna-structured-midi", "noir-tailored-set"],
  },
  {
    id: "linen-hours",
    poster: linenHoursPoster,
    title: "Linen hours",
    caption: "Light layers, considered proportions, all day ease.",
    creator: "AARO Studio",
    taggedProductSlugs: ["air-linen-shirt", "noir-tailored-set"],
  },
  {
    id: "blue-note",
    poster: blueNotePoster,
    title: "Blue note",
    caption: "Cobalt knit meets a precise, modern trouser.",
    creator: "City Colour",
    taggedProductSlugs: ["cobalt-knit-polo", "noir-tailored-set"],
  },
  {
    id: "after-hours",
    poster: afterHoursPoster,
    title: "After hours",
    caption: "Deep colour and clean tailoring, styled together.",
    creator: "Occasion Issue",
    taggedProductSlugs: ["emerald-wrap-jumpsuit", "everyday-denim-set"],
  },
];