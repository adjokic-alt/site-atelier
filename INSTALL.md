# Inspiration Hero

Required image:
public/images/inspiration/inspiration-hero.png

1. Copy src/components/inspiration/InspirationHero.tsx into the project.
2. In src/app/inspiration/page.tsx import:

import { InspirationHero } from "@/components/inspiration/InspirationHero";

3. Render <InspirationHero /> before the existing gallery heading/grid.
4. Add id="inspiration-gallery" to the section that wraps the current inspiration cards.
5. Remove the old small page heading block so there is only one H1.

Run:
npm run lint
npx tsc --noEmit
npm run build
