export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  zip: string;
  isHQ: boolean;
  responseTime: string;
  description: string;
  heroImage: string;
  faqs: LocationFAQ[];
}

export const locations: Record<string, Location> = {
  plano: {
    slug: "plano",
    city: "Plano",
    state: "TX",
    zip: "75093",
    isHQ: true,
    responseTime: "Same Day",
    description:
      "Plano is home to Apex Auto Service headquarters. As our base of operations, Plano drivers enjoy the fastest turnarounds and a team that knows local roads and driving conditions inside and out. From Legacy West commuters to families in Willow Bend, we keep Plano vehicles road-ready year-round.",
    heroImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80",
    faqs: [
      {
        question: "How quickly can you service my vehicle in Plano?",
        answer:
          "Because our main shop is located in Plano, we can often get you in the same day — even without an appointment for most services. Drop off in the morning and pick up by end of day in most cases.",
      },
      {
        question: "Do you offer shuttle service or loaner vehicles in Plano?",
        answer:
          "We offer a complimentary local shuttle for Plano customers who need a ride home or to the office while their vehicle is being serviced. Ask about availability when you drop off.",
      },
      {
        question: "Are there any specials for Plano residents?",
        answer:
          "As our home community, Plano customers are first to hear about seasonal promotions and loyalty discounts. Ask our service advisor about current specials when you visit.",
      },
    ],
  },

  frisco: {
    slug: "frisco",
    city: "Frisco",
    state: "TX",
    zip: "75034",
    isHQ: false,
    responseTime: "Same Day",
    description:
      "Frisco's explosive growth means more vehicles and more service needs. Apex Auto proudly serves the entire Frisco community — from new builds near PGA Parkway to established neighborhoods off Main Street. Whether it is a routine oil change or a complex repair, Frisco drivers count on us.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80",
    faqs: [
      {
        question: "Do you service all makes and models in Frisco?",
        answer:
          "Absolutely. We service domestic and foreign vehicles — cars, trucks, SUVs, and minivans — of any make and model year. Our technicians are ASE-certified with training across the full spectrum of manufacturers.",
      },
      {
        question: "Can I drop my car off before you open?",
        answer:
          "Yes. We have a convenient after-hours drop box at our Plano shop that Frisco customers can use. Leave your key and a note with your phone number and we will call you with a status update first thing in the morning.",
      },
      {
        question: "How far is Apex Auto from Frisco?",
        answer:
          "Our Plano shop is approximately 15 to 20 minutes from most Frisco neighborhoods — a short drive that many Frisco customers make regularly given our reputation for honest, fast service.",
      },
    ],
  },

  allen: {
    slug: "allen",
    city: "Allen",
    state: "TX",
    zip: "75013",
    isHQ: false,
    responseTime: "Same Day",
    description:
      "Just minutes from our Plano headquarters, Allen is one of our closest and most loyal service communities. From Twin Creeks to Waterford Parks, Allen families trust Apex Auto for everything from oil changes to major repairs. We know these neighborhoods — and we know cars.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    faqs: [
      {
        question: "Is Apex Auto close to Allen?",
        answer:
          "Our Plano shop is just 10 to 15 minutes from most Allen neighborhoods via US-75. Many Allen customers drop off on their way to work and pick up on the way home.",
      },
      {
        question: "Do you work on electric and hybrid vehicles in Allen?",
        answer:
          "Yes. We service hybrid and electric vehicles including oil changes on hybrids, brake service, tire rotation, battery health checks, and general diagnostics. Let us know your vehicle type when you schedule.",
      },
      {
        question: "Can you inspect a used car I am thinking of buying in Allen?",
        answer:
          "Absolutely. A pre-purchase inspection is one of the smartest investments you can make. We give you a full written report covering mechanical condition, safety items, and potential upcoming repairs before you commit to a purchase.",
      },
    ],
  },

  mckinney: {
    slug: "mckinney",
    city: "McKinney",
    state: "TX",
    zip: "75070",
    isHQ: false,
    responseTime: "Same Day",
    description:
      "McKinney blends historic charm with rapid new development, and Apex Auto serves all of it. Whether you drive a daily commuter or a weekend truck, our team delivers honest, fast auto service for every McKinney driver. Same-day appointments available most days.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    faqs: [
      {
        question: "How long is the drive from McKinney to Apex Auto?",
        answer:
          "Most McKinney neighborhoods are 20 to 30 minutes from our Plano shop. Many McKinney customers drop off early in the morning and arrange to work remotely for a few hours — we will call when your vehicle is ready.",
      },
      {
        question: "Do you service trucks and larger SUVs in McKinney?",
        answer:
          "Yes. We service all vehicle types including half-ton and three-quarter-ton trucks, full-size SUVs, and commercial vans. Our lifts and equipment accommodate vehicles of any size.",
      },
      {
        question: "What if my check engine light comes on driving to your shop?",
        answer:
          "Drive straight to us if it is a steady light — that is what we are here for. If the check engine light is flashing, pull over safely and call us. A flashing light indicates an active misfire that can damage your catalytic converter.",
      },
    ],
  },

  richardson: {
    slug: "richardson",
    city: "Richardson",
    state: "TX",
    zip: "75080",
    isHQ: false,
    responseTime: "Same Day",
    description:
      "Richardson's established neighborhoods and growing Telecom Corridor keep our bays busy. We serve Richardson drivers with the same honest, transparent service we have built our reputation on — clear pricing, accurate diagnostics, and fast turnarounds. No appointment needed for oil changes and tire rotations.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    faqs: [
      {
        question: "Is Apex Auto close to Richardson?",
        answer:
          "Richardson is just 10 to 15 minutes from our Plano shop. Many Richardson customers combine a service visit with errands in the area.",
      },
      {
        question: "Do you service foreign cars like Toyota, Honda, and BMW in Richardson?",
        answer:
          "Absolutely. Foreign and domestic vehicles are equally welcome. We stock parts for all popular makes and can typically source parts for less common vehicles the same or next business day.",
      },
      {
        question: "Can you help me with my vehicle inspection sticker?",
        answer:
          "Yes. We are a state-certified Texas vehicle inspection station. If your vehicle needs repairs to pass inspection, we will diagnose and fix the issue and re-inspect on the same visit.",
      },
    ],
  },
};
