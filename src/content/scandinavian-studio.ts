export const scandinavianStudio = {
  name: "Scandinavian",
  eyebrow: "Style Studio",
  tagline: "Light, calm and intentionally simple.",
  description:
    "A practical interior direction built around daylight, pale timber, soft texture and layouts that make everyday living feel easier.",
  heroImage: "/images/inspiration/daylight-living-room.png",
  heroAlt:
    "Illustrative Scandinavian living room with abundant daylight, pale timber, soft textiles and clear circulation",
  principles: [
    {
      number: "01",
      title: "Natural daylight",
      description:
        "Window treatments, pale surfaces and restrained contrast help daylight travel deeper into the home.",
    },
    {
      number: "02",
      title: "Pale timber",
      description:
        "Light oak and ash introduce warmth without making compact rooms feel visually heavy.",
    },
    {
      number: "03",
      title: "Soft textiles",
      description:
        "Linen, wool and tactile upholstery balance clean architecture with comfort and acoustic softness.",
    },
    {
      number: "04",
      title: "Clear circulation",
      description:
        "Fewer, better-positioned pieces protect movement, storage access and the practical use of each room.",
    },
  ],
  palette: [
    { name: "Warm white", hex: "#F3F0E9" },
    { name: "Soft sand", hex: "#D8D0C4" },
    { name: "Light oak", hex: "#C5A77D" },
    { name: "Stone grey", hex: "#979A91" },
    { name: "Forest grey", hex: "#47504B" },
  ],
  materials: [
    {
      name: "Light oak",
      note: "Flooring, joinery and furniture with a quiet, consistent grain.",
      color: "#C5A77D",
    },
    {
      name: "Natural linen",
      note: "Curtains and upholstery that soften daylight and add relaxed texture.",
      color: "#DDD3C5",
    },
    {
      name: "Wool",
      note: "Rugs and throws that add warmth, comfort and acoustic control.",
      color: "#B5ADA0",
    },
    {
      name: "Honed stone",
      note: "Matte, mineral surfaces for kitchens and bathrooms without visual glare.",
      color: "#999B93",
    },
  ],
  bestFor: [
    "Small and medium European apartments",
    "Open-plan kitchen and living areas",
    "Family homes that need practical storage",
    "Renovations with limited natural light",
  ],
  strengths: [
    "Makes compact rooms feel calmer and more open",
    "Works with durable, widely available materials",
    "Adapts easily as furniture and family needs change",
    "Balances visual restraint with everyday comfort",
  ],
  cautions: [
    "Avoid using only pale beige tones without darker anchors.",
    "Do not remove useful storage in the name of minimalism.",
    "Add texture and warm lighting so the result does not feel clinical.",
  ],
  inspirationIds: [
    "scandi-living-daylight",
    "scandi-kitchen-storage",
    "scandi-bedroom-linen",
  ],
  pairings: [
    {
      name: "Minimalist",
      href: "/styles/minimalist",
      description:
        "Creates a cleaner architectural result with fewer objects, sharper storage and stronger visual order.",
    },
    {
      name: "Modern",
      href: "/styles/modern",
      description:
        "Adds stronger geometry, darker accents and a more structured contemporary character.",
    },
  ],
} as const;
