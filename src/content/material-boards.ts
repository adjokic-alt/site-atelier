import type { StyleId } from "@/types";

export interface MaterialSample {
  name: string;
  use: string;
  image: string;
}

/**
 * Four tactile samples per style. Each image is a close-up cropped from that
 * style's own photography, so the board always matches the rooms shown.
 */
export const materialBoards: Record<StyleId, MaterialSample[]> = {
  scandinavian: [
    { name: "Light oak", use: "Floors, joinery", image: "/images/materials/sca-oak.jpg" },
    { name: "Natural linen", use: "Curtains, upholstery", image: "/images/materials/sca-linen.jpg" },
    { name: "Wool", use: "Rugs, throws", image: "/images/materials/sca-wool.jpg" },
    { name: "Honed stone", use: "Kitchen, bath", image: "/images/materials/sca-stone.jpg" },
  ],
  modern: [
    { name: "Veined limestone", use: "Islands, walls", image: "/images/materials/mod-limestone.jpg" },
    { name: "Microcement", use: "Seamless walls", image: "/images/materials/mod-microcement.jpg" },
    { name: "Dark timber", use: "Tall joinery", image: "/images/materials/mod-darktimber.jpg" },
    { name: "Blackened metal", use: "Appliances, frames", image: "/images/materials/mod-blackmetal.jpg" },
  ],
  minimalist: [
    { name: "Lime plaster", use: "Walls", image: "/images/materials/min-plaster.jpg" },
    { name: "Pale oak", use: "Concealed joinery", image: "/images/materials/min-oak.jpg" },
    { name: "Honed limestone", use: "Worktops", image: "/images/materials/min-limestone.jpg" },
    { name: "Brushed bronze", use: "Taps, details", image: "/images/materials/min-bronze.jpg" },
  ],
  industrial: [
    { name: "Aged brick", use: "Feature walls", image: "/images/materials/ind-brick.jpg" },
    { name: "Blackened steel", use: "Cabinets, frames", image: "/images/materials/ind-steel.jpg" },
    { name: "Concrete", use: "Fronts, floors", image: "/images/materials/ind-concrete.jpg" },
    { name: "Oiled oak", use: "Tables, worktops", image: "/images/materials/ind-oak.jpg" },
  ],
  luxury: [
    { name: "Veined stone", use: "Focal surfaces", image: "/images/materials/lux-stone.jpg" },
    { name: "Dark timber", use: "Panels, columns", image: "/images/materials/lux-timber.jpg" },
    { name: "Brushed brass", use: "Taps, lighting", image: "/images/materials/lux-brass.jpg" },
    { name: "Wool bouclé", use: "Statement chairs", image: "/images/materials/lux-boucle.jpg" },
  ],
  rustic: [
    { name: "Reclaimed oak", use: "Tables, benches", image: "/images/materials/rus-oak.jpg" },
    { name: "Lime plaster", use: "Walls", image: "/images/materials/rus-plaster.jpg" },
    { name: "Heavy linen", use: "Bedding, curtains", image: "/images/materials/rus-linen.jpg" },
    { name: "Jute", use: "Rugs", image: "/images/materials/rus-jute.jpg" },
  ],
  mediterranean: [
    { name: "Travertine", use: "Tables, floors", image: "/images/materials/med-limestone.jpg" },
    { name: "Limewash", use: "Walls", image: "/images/materials/med-limewash.jpg" },
    { name: "Olive timber", use: "Built-in seating", image: "/images/materials/med-olive.jpg" },
    { name: "Handmade clay", use: "Planters, pots", image: "/images/materials/med-ceramic.jpg" },
  ],
};
