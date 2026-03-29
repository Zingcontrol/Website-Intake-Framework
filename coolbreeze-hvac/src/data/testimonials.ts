export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  // AC Repair reviews
  {
    name: "James W.",
    location: "Plano, TX",
    rating: 5,
    text: "Our AC went out on the hottest day of the summer and CoolBreeze had a technician at our door within two hours. He found the problem fast, had the part on his truck, and we were cool again before dinner.",
    service: "AC Repair",
  },
  {
    name: "Maria S.",
    location: "Frisco, TX",
    rating: 5,
    text: "I called three companies and CoolBreeze was the only one that could come out the same day. The technician was professional, explained everything clearly, and the price was exactly what he quoted.",
    service: "AC Repair",
  },
  {
    name: "David L.",
    location: "Allen, TX",
    rating: 5,
    text: "After another company told me I needed a whole new system, CoolBreeze came out for a second opinion and fixed the issue for a fraction of the cost. Honest and reliable.",
    service: "AC Repair",
  },

  // General HVAC reviews
  {
    name: "Karen T.",
    location: "McKinney, TX",
    rating: 5,
    text: "CoolBreeze installed a new Trane system in our home and the difference is night and day. The house cools evenly, our energy bills dropped, and the installation crew left the place spotless.",
    service: "HVAC Installation",
  },
  {
    name: "Robert M.",
    location: "Richardson, TX",
    rating: 5,
    text: "We have used CoolBreeze for both heating and cooling repairs over the years. They are always on time, always fair on pricing, and their technicians genuinely know what they are doing.",
    service: "Heating Repair",
  },
  {
    name: "Sarah P.",
    location: "Plano, TX",
    rating: 5,
    text: "They replaced our old heat pump with a high-efficiency model and walked us through every step of the process. The new system is whisper-quiet and our electric bill is noticeably lower.",
    service: "Heat Pump Services",
  },

  // CoolBreeze Club / Maintenance reviews
  {
    name: "Tom H.",
    location: "Frisco, TX",
    rating: 5,
    text: "Joining the CoolBreeze Club was one of the best decisions we made as homeowners. The bi-annual tune-ups have kept our system running perfectly, and the repair discount already saved us more than the membership costs.",
    service: "CoolBreeze Club Maintenance",
  },
  {
    name: "Linda G.",
    location: "Allen, TX",
    rating: 5,
    text: "The technician who came out for our fall tune-up caught a cracked heat exchanger before it became dangerous. The CoolBreeze Club literally kept our family safe.",
    service: "CoolBreeze Club Maintenance",
  },
  {
    name: "Michael R.",
    location: "McKinney, TX",
    rating: 5,
    text: "I love that I do not have to remember to schedule maintenance anymore. CoolBreeze calls me when it is time, the price is locked in, and the technicians are always thorough and friendly.",
    service: "CoolBreeze Club Maintenance",
  },
];
