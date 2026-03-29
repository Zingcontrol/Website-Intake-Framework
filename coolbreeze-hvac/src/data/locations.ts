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
    responseTime: "30-60 minutes",
    description:
      "Plano is home to CoolBreeze HVAC headquarters. As our base of operations, Plano residents enjoy the fastest response times and a team that knows the neighborhood inside and out. From Legacy West condos to established homes in Willow Bend, we keep Plano comfortable year-round.",
    heroImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80",
    faqs: [
      {
        question: "How quickly can CoolBreeze reach my Plano home?",
        answer:
          "Because our headquarters is located in Plano, we can typically arrive within 30 to 60 minutes during normal business hours. Emergency calls are prioritized around the clock.",
      },
      {
        question: "Do you serve all Plano zip codes?",
        answer:
          "Yes. We serve every zip code in Plano including 75023, 75024, 75025, 75074, 75075, 75086, and 75093.",
      },
      {
        question: "Are there any special offers for Plano residents?",
        answer:
          "As our home community, Plano residents are always the first to hear about seasonal promotions and new-member discounts for the CoolBreeze Club. Contact us to learn about current specials.",
      },
    ],
  },

  frisco: {
    slug: "frisco",
    city: "Frisco",
    state: "TX",
    zip: "75034",
    isHQ: false,
    responseTime: "45-90 minutes",
    description:
      "Frisco is one of the fastest-growing cities in North Texas, and CoolBreeze is proud to serve its expanding community. Whether you live in a brand-new build near PGA Parkway or an established neighborhood off Main Street, our technicians deliver the same fast, reliable HVAC service Frisco families count on.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80",
    faqs: [
      {
        question: "Do you service new-construction homes in Frisco?",
        answer:
          "Absolutely. Many of Frisco's newer communities have builder-grade HVAC systems that benefit from professional maintenance early on. We also handle warranty-covered repairs for most major brands.",
      },
      {
        question: "What is the typical response time for Frisco service calls?",
        answer:
          "We typically arrive at Frisco homes within 45 to 90 minutes during regular hours. CoolBreeze Club members receive priority scheduling for even faster service.",
      },
      {
        question: "Can you help with zoning issues in larger Frisco homes?",
        answer:
          "Yes. Many of Frisco's newer homes are two stories or larger, which often leads to uneven temperatures. We install and service zoning systems to keep every floor comfortable.",
      },
    ],
  },

  allen: {
    slug: "allen",
    city: "Allen",
    state: "TX",
    zip: "75013",
    isHQ: false,
    responseTime: "30-75 minutes",
    description:
      "Located just minutes from our Plano headquarters, Allen is one of our closest service areas. CoolBreeze has been keeping Allen families comfortable through scorching summers and unexpected cold snaps for over a decade. From Twin Creeks to Waterford Parks, we know this community well.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    faqs: [
      {
        question: "How quickly can you get to my Allen home?",
        answer:
          "Allen is one of our closest service areas. We typically arrive within 30 to 75 minutes during standard business hours.",
      },
      {
        question: "Do you offer the CoolBreeze Club to Allen residents?",
        answer:
          "Yes. Allen homeowners can enroll in the CoolBreeze Club and enjoy all member benefits including bi-annual tune-ups, priority scheduling, and 15 percent off all repairs.",
      },
      {
        question: "My Allen home has an older system. Can you still service it?",
        answer:
          "We service systems of all ages and brands. If parts are available we will repair it. If replacement makes more sense, we will give you an honest recommendation along with financing options.",
      },
    ],
  },

  mckinney: {
    slug: "mckinney",
    city: "McKinney",
    state: "TX",
    zip: "75070",
    isHQ: false,
    responseTime: "45-90 minutes",
    description:
      "McKinney blends historic charm with rapid new development, and CoolBreeze serves it all. Whether you own a renovated Craftsman near the downtown square or a brand-new home in Prosper-adjacent communities, our HVAC technicians deliver fast, dependable service throughout McKinney.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    faqs: [
      {
        question: "Do you serve all of McKinney including new developments?",
        answer:
          "Yes. We serve every part of McKinney from the historic downtown district to the newest subdivisions near Highway 380. Our service area continues to grow with the city.",
      },
      {
        question: "What HVAC challenges are common in older McKinney homes?",
        answer:
          "Older homes in McKinney often have undersized ductwork, aging R-22 systems, or inadequate insulation. We can evaluate your home and recommend cost-effective upgrades that improve comfort and efficiency.",
      },
      {
        question: "How long does it take to reach McKinney from your headquarters?",
        answer:
          "McKinney is a short drive from our Plano headquarters. Standard response times are 45 to 90 minutes, with CoolBreeze Club members receiving priority service.",
      },
    ],
  },

  richardson: {
    slug: "richardson",
    city: "Richardson",
    state: "TX",
    zip: "75080",
    isHQ: false,
    responseTime: "30-75 minutes",
    description:
      "Richardson's mix of established neighborhoods and the growing Telecom Corridor makes it a vibrant community we are proud to serve. CoolBreeze provides fast, professional HVAC repair, installation, and maintenance to Richardson homeowners and businesses alike.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    faqs: [
      {
        question: "Do you provide commercial HVAC service in Richardson?",
        answer:
          "Our primary focus is residential service, but we do handle light commercial HVAC work for small offices and retail spaces in the Richardson area. Contact us for a consultation.",
      },
      {
        question: "What is your response time for Richardson?",
        answer:
          "Richardson is very close to our headquarters, so typical response times are 30 to 75 minutes during business hours. Emergency service is available around the clock.",
      },
      {
        question: "Can you help with high energy bills in older Richardson homes?",
        answer:
          "Absolutely. Many Richardson homes were built in the 1970s and 1980s with systems that are far less efficient than modern equipment. We can perform an energy assessment and recommend upgrades that lower your monthly bills significantly.",
      },
    ],
  },
};
