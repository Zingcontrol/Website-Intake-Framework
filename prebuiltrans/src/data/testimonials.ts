export interface Testimonial {
  id: number;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Derek H.',
    location: 'Orem, UT',
    vehicle: '2017 Ford F-250 Super Duty',
    rating: 5,
    text: 'My F-250 lost all forward gears on a Monday morning — I use it for work hauling every day. Called Pre-Built Transmissions, they towed it free from my shop in Provo, and had a prebuilt unit installed by Tuesday afternoon. I could not believe how fast they turned it around. The truck shifts better now than it ever did. These guys are the real deal.',
    service: 'Prebuilt Transmission Replacement',
  },
  {
    id: 2,
    name: 'Jason M.',
    location: 'American Fork, UT',
    vehicle: '2015 Chevy Silverado 2500HD',
    rating: 5,
    text: 'I had three other shops tell me I needed a full rebuild that would take 2 weeks. Pre-Built Transmissions diagnosed it in an hour and had a prebuilt unit ready to go. Same day service, no kidding. They even explained exactly what was wrong with the original unit. Honest, fast, and fair priced. I will not take my trucks anywhere else.',
    service: 'Transmission Replacement',
  },
  {
    id: 3,
    name: 'Craig T.',
    location: 'Spanish Fork, UT',
    vehicle: '2019 Ram 1500',
    rating: 5,
    text: 'Broke down on I-15 coming home from a hunting trip. Called the 24/7 emergency number at 9pm, and they actually answered — a real person, not a voicemail. They arranged a tow that night and had my Ram diagnosed and repaired by the next afternoon. The free towing alone saved me $200. Highly recommend for any Utah Valley truck owner.',
    service: 'Emergency Road Service',
  },
  {
    id: 4,
    name: 'Mike R.',
    location: 'Lehi, UT',
    vehicle: '2014 Ford F-150 EcoBoost',
    rating: 5,
    text: 'Went in worried it was the whole transmission — turned out to be a solenoid pack and fluid service. They could have easily talked me into a full replacement and I would not have known the difference. Instead they fixed the actual problem and charged me appropriately. Honesty goes a long way. My truck is running perfectly.',
    service: 'Transmission Diagnostics',
  },
  {
    id: 5,
    name: 'Brandon W.',
    location: 'Payson, UT',
    vehicle: '2016 GMC Sierra 1500',
    rating: 5,
    text: 'Had my Sierra in for a full rebuild after it started slipping badly under load. The guys at Pre-Built walked me through every step, showed me the worn clutch packs after teardown, and explained the upgrades they were putting in. The rebuilt transmission feels noticeably stronger than stock, especially when I am towing my fifth wheel. Worth every penny.',
    service: 'Transmission Rebuild',
  },
  {
    id: 6,
    name: 'Ryan K.',
    location: 'Springville, UT',
    vehicle: '2020 Ford F-350 Dually',
    rating: 5,
    text: 'Running a construction business means my F-350 is working hard every single day. Pre-Built Transmissions did a full fluid service and inspection — found an early-stage seal leak that would have turned into a major repair down the road. Caught it early, fixed it fast, and my truck was back on the job site the same afternoon. These guys understand working trucks.',
    service: 'Fluid Service',
  },
  {
    id: 7,
    name: 'Scott P.',
    location: 'Draper, UT',
    vehicle: '2018 Dodge Ram 2500 Cummins',
    rating: 5,
    text: 'My Ram started throwing a P0700 code and shifting rough. Pre-Built did a full live-data diagnostic and pinpointed a failed pressure control solenoid — no internal damage. Repaired in a day. I was dreading a $4,000 rebuild bill and walked out spending a fraction of that. Knowledgeable technicians who know exactly what they are looking at.',
    service: 'Transmission Diagnostics',
  },
  {
    id: 8,
    name: 'Travis L.',
    location: 'Provo, UT',
    vehicle: '2013 Chevrolet Silverado 1500',
    rating: 5,
    text: 'Free towing is a game changer. My truck died in a parking lot in Provo on a Friday morning. They sent a flatbed, got it to the shop, and because I called early enough, they had a prebuilt unit installed before closing time. By Friday evening I had my truck back. Other shops would have had it sit all weekend. Cannot say enough good things.',
    service: 'Free Towing & Transmission Replacement',
  },
];
