export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  // Oil change / routine service
  {
    name: "James W.",
    location: "Plano, TX",
    rating: 5,
    text: "Dropped in for an oil change with no appointment. They had me in and out in 25 minutes and found a nail in my tire during the courtesy inspection — saved me from a blowout on the highway. This is my go-to shop.",
    service: "Oil Change",
  },
  {
    name: "Maria S.",
    location: "Frisco, TX",
    rating: 5,
    text: "I have been burned by shops that recommend services I do not need. Apex Auto is completely the opposite — they tell you what you actually need and leave the rest alone. Finally an honest mechanic.",
    service: "Oil Change",
  },
  {
    name: "David L.",
    location: "Allen, TX",
    rating: 5,
    text: "Best shop I have found in DFW in 10 years of living here. Fair prices, no nonsense, and they actually explain what they are doing. My whole family brings their cars here now.",
    service: "Multi-Point Inspection",
  },

  // Brakes
  {
    name: "Karen T.",
    location: "McKinney, TX",
    rating: 5,
    text: "My brakes were grinding and I was nervous to drive. Apex Auto got me in the same day, replaced the pads and rotors, and had me back on the road by 3 PM. Incredibly fast and very fairly priced.",
    service: "Brake Repair",
  },
  {
    name: "Robert M.",
    location: "Richardson, TX",
    rating: 5,
    text: "Another shop quoted me $1,200 to replace all four brakes. Apex Auto looked at it, told me only the fronts actually needed replacing, and charged me $340. This place has my loyalty for life.",
    service: "Brake Repair",
  },

  // Diagnostics / check engine
  {
    name: "Sarah P.",
    location: "Plano, TX",
    rating: 5,
    text: "Check engine light had been on for weeks. Two other shops could not figure it out. Apex Auto diagnosed it in under an hour — a faulty purge valve — fixed it that afternoon. Light has been off ever since.",
    service: "Engine Diagnostics",
  },
  {
    name: "Tom H.",
    location: "Frisco, TX",
    rating: 5,
    text: "My transmission started slipping on the highway. I was dreading a huge bill. They diagnosed it as a bad solenoid and had it fixed for under $400. Clear communication throughout — I always knew what was happening.",
    service: "Transmission Service",
  },

  // AC / heating
  {
    name: "Linda G.",
    location: "Allen, TX",
    rating: 5,
    text: "AC stopped blowing cold in July — worst possible timing. Apex Auto found a refrigerant leak, fixed it, and recharged the system all in the same visit. Cold air by noon. These guys are the real deal.",
    service: "AC Repair",
  },
  {
    name: "Michael R.",
    location: "McKinney, TX",
    rating: 5,
    text: "Brought my truck in for an alignment after getting new tires elsewhere. The tech showed me on the printout exactly where it was off and what he corrected. My truck tracks perfectly straight now. Great work.",
    service: "Tires & Alignment",
  },
];
