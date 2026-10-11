import type { Material, ProjectIdea } from "@/types";

export const styleExtraMaterials: Material[] = [
  {id:"smoked-glass",name:"Smoked glass",imageId:"modern-detail",typicalUse:"Partitions and cabinet accents",upkeepNote:"Fingerprints and edge detailing need consideration.",styleIds:["modern"]},
  {id:"brushed-steel",name:"Brushed steel",imageId:"modern-detail",typicalUse:"Hardware and integrated details",upkeepNote:"Specify a consistent grain direction.",styleIds:["modern"]},
  {id:"large-format-stone",name:"Large-format stone",imageId:"modern-kitchen",typicalUse:"Floors, walls and islands",upkeepNote:"Substrate preparation and handling are critical.",styleIds:["modern","luxury"]},
  {id:"microcement",name:"Microcement",imageId:"minimalist-detail",typicalUse:"Continuous walls and floors",upkeepNote:"Installer quality and correct sealing matter.",styleIds:["minimalist"]},
  {id:"pale-ash",name:"Pale ash",imageId:"minimalist-kitchen",typicalUse:"Joinery and furniture",upkeepNote:"Protect high-contact edges.",styleIds:["minimalist"]},
  {id:"wool-felt",name:"Wool felt",imageId:"minimalist-living",typicalUse:"Acoustic panels and upholstery",upkeepNote:"Check wear class for the intended use.",styleIds:["minimalist"]},
  {id:"blackened-steel",name:"Blackened steel",imageId:"industrial-detail",typicalUse:"Frames, stairs and shelving",upkeepNote:"Finish and corrosion protection must be specified.",styleIds:["industrial"]},
  {id:"sealed-concrete",name:"Sealed concrete",imageId:"industrial-kitchen",typicalUse:"Floors and work surfaces",upkeepNote:"Cracking and staining expectations should be discussed.",styleIds:["industrial"]},
  {id:"reclaimed-brick",name:"Reclaimed brick",imageId:"industrial-living",typicalUse:"Feature walls",upkeepNote:"Dust control and condition assessment are needed.",styleIds:["industrial","rustic"]},
  {id:"veined-stone",name:"Veined stone",imageId:"luxury-detail",typicalUse:"Bathrooms, islands and focal surfaces",upkeepNote:"Approve actual slabs and sealing requirements.",styleIds:["luxury"]},
  {id:"dark-veneer",name:"Dark veneer",imageId:"luxury-kitchen",typicalUse:"Bespoke cabinetry",upkeepNote:"Match sheets and protect edges.",styleIds:["luxury"]},
  {id:"aged-bronze",name:"Aged bronze",imageId:"luxury-detail",typicalUse:"Hardware and lighting",upkeepNote:"Patina variation is part of the finish.",styleIds:["luxury"]},
  {id:"reclaimed-oak",name:"Reclaimed oak",imageId:"rustic-detail",typicalUse:"Beams, furniture and flooring",upkeepNote:"Moisture content and structural suitability must be checked.",styleIds:["rustic"]},
  {id:"natural-stone",name:"Natural stone",imageId:"rustic-living",typicalUse:"Floors, walls and fireplaces",upkeepNote:"Porosity and local maintenance should guide selection.",styleIds:["rustic","mediterranean"]},
  {id:"lime-plaster",name:"Lime plaster",imageId:"rustic-detail",typicalUse:"Breathable textured walls",upkeepNote:"Use an experienced applicator and accept variation.",styleIds:["rustic","mediterranean"]},
  {id:"terracotta-tile",name:"Terracotta tile",imageId:"mediterranean-kitchen",typicalUse:"Floors and accent surfaces",upkeepNote:"Sealing and tonal variation need approval.",styleIds:["mediterranean"]},
  {id:"tadelakt",name:"Tadelakt",imageId:"mediterranean-detail",typicalUse:"Bathrooms and curved mineral surfaces",upkeepNote:"Specialist application and ongoing care are required.",styleIds:["mediterranean"]},
  {id:"washed-linen",name:"Washed linen",imageId:"mediterranean-living",typicalUse:"Curtains and upholstery",upkeepNote:"Allow for natural creasing and cleaning limits.",styleIds:["mediterranean"]}
];

export const styleExtraProjectIdeas: ProjectIdea[] = [
  {id:"modern-open-plan",title:"An integrated open-plan living space",summary:"A direction focused on clean circulation, concealed technology and one architectural focal point.",imageId:"modern-living",styleIds:["modern"],materialIds:["smoked-glass","brushed-steel","large-format-stone"]},
  {id:"minimalist-hidden-storage",title:"A calm home with hidden storage",summary:"A warm minimal direction shaped around real possessions and clear daily routines.",imageId:"minimalist-living",styleIds:["minimalist"],materialIds:["microcement","pale-ash","wool-felt"]},
  {id:"industrial-kitchen",title:"A refined industrial kitchen",summary:"Raw character balanced with precise joinery, acoustic control and warmer lighting.",imageId:"industrial-kitchen",styleIds:["industrial"],materialIds:["blackened-steel","sealed-concrete","reclaimed-brick"]},
  {id:"luxury-bedroom-suite",title:"A layered bedroom suite",summary:"Bespoke storage, tactile surfaces and restrained premium detailing.",imageId:"luxury-living",styleIds:["luxury"],materialIds:["veined-stone","dark-veneer","aged-bronze"]},
  {id:"rustic-living-fireplace",title:"A warm living room around natural materials",summary:"Existing character, crafted timber and a comfortable focal point without themed decoration.",imageId:"rustic-living",styleIds:["rustic"],materialIds:["reclaimed-oak","natural-stone","lime-plaster"]},
  {id:"mediterranean-courtyard",title:"A bright indoor-outdoor living connection",summary:"A climate-aware direction using mineral texture, shade and sun-washed colour.",imageId:"mediterranean-living",styleIds:["mediterranean"],materialIds:["terracotta-tile","tadelakt","washed-linen"]}
];
