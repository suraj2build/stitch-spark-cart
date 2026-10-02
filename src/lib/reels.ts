import afterHoursPoster from "@/assets/reel-after-hours.jpg";
import blueNotePoster from "@/assets/reel-blue-note.jpg";
import cityColourPoster from "@/assets/reel-city-colour.jpg";
import linenHoursPoster from "@/assets/reel-linen-hours.jpg";

export type ReelStory = {
  id: string;
  poster: string;
  videoUrl?: string;
  captionsUrl?: string;
  mediaDescription: string;
  title: string;
  caption: string;
  creator: string;
  taggedProductSlugs: string[];
};

export const reelStories: ReelStory[] = [
  {
    id: "city-colour",
    poster: cityColourPoster,
    mediaDescription: "A model in a vivid red dress styled for an evening in the city.",
    title: "City colour",
    caption: "A saturated statement for every invitation after five.",
    creator: "The September Edit",
    taggedProductSlugs: ["sienna-structured-midi", "noir-tailored-set"],
  },
  {
    id: "linen-hours",
    poster: linenHoursPoster,
    mediaDescription: "A relaxed light linen look styled for daytime.",
    title: "Linen hours",
    caption: "Light layers, considered proportions, all day ease.",
    creator: "AARO Studio",
    taggedProductSlugs: ["air-linen-shirt", "noir-tailored-set"],
  },
  {
    id: "blue-note",
    poster: blueNotePoster,
    mediaDescription: "A cobalt knit and tailored trousers styled together.",
    title: "Blue note",
    caption: "Cobalt knit meets a precise, modern trouser.",
    creator: "City Colour",
    taggedProductSlugs: ["cobalt-knit-polo", "noir-tailored-set"],
  },
  {
    id: "after-hours",
    poster: afterHoursPoster,
    mediaDescription: "Rich evening colour and sharp tailoring in one look.",
    title: "After hours",
    caption: "Deep colour and clean tailoring, styled together.",
    creator: "Occasion Issue",
    taggedProductSlugs: ["emerald-wrap-jumpsuit", "everyday-denim-set"],
  },
];