export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  heroImage: string;
  features: string[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: 'transmission-replacement',
    title: 'Prebuilt Transmission Replacement',
    shortTitle: 'Transmission Replacement',
    headline: 'In-Stock Prebuilt Units — Same-Day Installation for Your Truck',
    description:
      'When your truck transmission fails, downtime costs you money. We keep a full inventory of prebuilt, upgraded transmission units for Ford, Chevy/GMC, and Dodge/Ram trucks — ready to drop in the day you arrive. No waiting weeks for a rebuild. No dealer markups. Just a better-than-OEM unit installed by transmission specialists.',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80',
    features: [
      'In-stock prebuilt units for most domestic truck applications — no waiting on parts',
      'Upgraded internal components that exceed OEM specifications for durability',
      'Same-day or next-day installation in most cases',
      'Free towing within 50 miles — we come to you',
      'Transmission specialists only — every tech works on transmissions every day',
      '1-year warranty on all replacement units',
    ],
    faqs: [
      {
        question: 'How fast can you actually replace my transmission?',
        answer:
          'In most cases, same day or next business day. Because we stock prebuilt units on the shelf, there is no waiting for cores to be rebuilt or parts to arrive. You call in, we confirm we have your unit in stock, and we schedule you immediately.',
      },
      {
        question: 'What does "prebuilt" mean, and why is it better?',
        answer:
          'A prebuilt unit is a fully assembled, tested transmission built ahead of time using upgraded clutch packs, bands, and seals — not just OEM replacement parts. When you bring your truck in, we remove the old unit and install a prebuilt one. Your old unit then becomes the core we rebuild for the next customer. You get a finished, proven unit with zero waiting.',
      },
      {
        question: 'Do you replace transmissions in all trucks?',
        answer:
          'We specialize exclusively in domestic trucks: Ford, Chevrolet/GMC, and Dodge/Ram. We do not service foreign or import vehicles, and we do not do sideline jobs — transmissions are all we do, which means we do them better than anyone.',
      },
    ],
    relatedServices: ['transmission-rebuild', 'transmission-diagnostics', 'free-towing'],
  },
  {
    slug: 'transmission-rebuild',
    title: 'Transmission Rebuild & Upgrade',
    shortTitle: 'Transmission Rebuild',
    headline: 'Full Internal Rebuild with Upgraded Clutches, Bands & Seals',
    description:
      'A proper transmission rebuild is more than slapping in new seals. Our techs fully disassemble, clean, and inspect every component — replacing worn clutch packs, bands, bushings, and seals with upgraded parts that outperform OEM specifications. Every rebuild is pressure-tested before it goes back in your truck.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
    features: [
      'Complete teardown, cleaning, and inspection of every component',
      'Upgraded clutch packs and friction material for improved holding capacity',
      'New bands, bushings, seals, and gaskets throughout',
      'Pressure testing before installation to verify proper operation',
      'Torque converter inspection and replacement when needed',
      'Post-installation road test and fluid level check',
    ],
    faqs: [
      {
        question: 'When should I rebuild rather than replace with a prebuilt unit?',
        answer:
          'A rebuild makes sense when you want to stick with your specific unit or if the case or housing has unique characteristics worth preserving. However, for fastest turnaround, most customers prefer a prebuilt swap — you get a finished, tested unit immediately instead of waiting for the rebuild process. We will give you an honest recommendation after diagnosis.',
      },
      {
        question: 'What upgrades do you include in a rebuild?',
        answer:
          'Every rebuild includes upgraded friction material in the clutch packs, heavy-duty bands where applicable, all new seals and gaskets, and new bushings throughout. These upgrades mean your rebuilt unit will outlast a stock OEM replacement under the same driving conditions.',
      },
      {
        question: 'How long does a rebuild take?',
        answer:
          'A full rebuild typically takes 2–3 business days depending on parts availability and the specific unit. If your truck cannot wait, we can often swap in a prebuilt unit same-day and rebuild yours for the next customer.',
      },
    ],
    relatedServices: ['transmission-replacement', 'transmission-diagnostics', 'fluid-service'],
  },
  {
    slug: 'transmission-diagnostics',
    title: 'Transmission Diagnostics',
    shortTitle: 'Diagnostics',
    headline: 'Live Data Scan, Road Test & Pinpoint Root-Cause Analysis',
    description:
      'A slipping, shuddering, or non-shifting transmission could be a simple solenoid, a fluid issue, or a sign of major internal failure. Misdiagnose it and you spend money on the wrong repair. Our diagnostic process uses live data scanning, a controlled road test, and hands-on inspection to find exactly what is wrong — before we recommend any repair.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=80',
    features: [
      'Full transmission-specific scan tool with live data readouts',
      'Controlled road test to replicate and observe the symptom',
      'Fluid condition and level check as part of every inspection',
      'Visual inspection for external leaks, wiring issues, and linkage problems',
      'Honest written estimate before any work begins',
      'No upselling — we only recommend what your truck actually needs',
    ],
    faqs: [
      {
        question: 'What does a transmission diagnostic cover?',
        answer:
          'Our diagnostic includes a scan for fault codes, live solenoid and pressure data review, a road test, fluid condition inspection, and a visual check of external components. We look at the whole picture before recommending a path forward.',
      },
      {
        question: 'Can a bad transmission sensor cause the same symptoms as a failing transmission?',
        answer:
          'Absolutely, and we see it regularly. Speed sensors, pressure control solenoids, and range sensors can all cause harsh shifts, slipping, or no-move conditions that mimic internal failure. Our diagnostic process rules out these less expensive fixes before recommending a rebuild or replacement.',
      },
      {
        question: 'Do I need to bring my truck in, or can you come to me?',
        answer:
          'If your truck is driveable, bring it in. If it is not, we offer free towing within 50 miles — no charge to get your truck to our shop so we can diagnose it properly.',
      },
    ],
    relatedServices: ['transmission-replacement', 'transmission-rebuild', 'fluid-service'],
  },
  {
    slug: 'fluid-service',
    title: 'Transmission Fluid Service',
    shortTitle: 'Fluid Service',
    headline: 'Flush, Filter & the Right Fluid for Your Specific Truck',
    description:
      'Transmission fluid is the lifeblood of your gearbox. Using the wrong fluid — or neglecting a fluid service — can cause wear, overheating, and premature failure. We flush your system, replace the filter, and refill with the correct fluid specification for your exact truck model and transmission type. Not every truck takes the same fluid, and we know the difference.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=80',
    features: [
      'Full fluid exchange — not just a drain-and-fill',
      'Transmission filter replacement on applicable units',
      'Correct OEM-spec or upgraded fluid matched to your transmission',
      'Pan gasket inspection and replacement when needed',
      'Fluid condition report and service interval recommendation',
      'Quick turnaround — often same-day service',
    ],
    faqs: [
      {
        question: 'How often should I service my truck transmission fluid?',
        answer:
          'For most domestic trucks under normal driving, every 30,000–60,000 miles. For towing, hauling, or severe duty use, every 15,000–30,000 miles. Transmission fluid breaks down from heat and contamination — regular service dramatically extends the life of your transmission.',
      },
      {
        question: 'Does fluid type really matter that much?',
        answer:
          'Yes — significantly. Ford, GM, and Chrysler/Ram each specify different fluid formulations, and using the wrong type can cause hard shifts, solenoid damage, and accelerated wear. We match the exact fluid to your transmission, not just whatever is cheapest on the shelf.',
      },
      {
        question: 'Can a fluid service fix a slipping transmission?',
        answer:
          'Sometimes. If the issue is contaminated fluid or a clogged filter causing low pressure, a fluid service can restore proper operation. If there is internal wear, a fluid service alone will not fix it — but we will tell you honestly which situation you are in after an inspection.',
      },
    ],
    relatedServices: ['transmission-diagnostics', 'transmission-rebuild', 'transmission-replacement'],
  },
  {
    slug: 'free-towing',
    title: 'Free Towing & Recovery',
    shortTitle: 'Free Towing',
    headline: 'Truck-Capable Towing Within 50 Miles — No Hidden Fees',
    description:
      'A truck with a failed transmission usually cannot be driven safely. That is why we offer completely free towing for any domestic truck within a 50-mile radius of our Orem shop. No towing bill, no hidden fees, no minimums — just call us, and we will come get your truck and bring it to our shop for diagnosis and repair.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
    features: [
      'Completely free within 50 miles of Orem, UT — no conditions',
      'Truck-capable tow equipment for full-size pickups and work trucks',
      'Flat-bed and wheel-lift options depending on the situation',
      'Fast dispatch — we know your time matters',
      'No surprise charges when you get your invoice',
      'Covers the entire Utah Valley and surrounding areas',
    ],
    faqs: [
      {
        question: 'Is the towing really free, or are there conditions?',
        answer:
          'It is free with no conditions — as long as you are within 50 miles of our shop in Orem and we are performing the repair. We do not charge a towing fee separately, and it will not appear on your invoice.',
      },
      {
        question: 'What areas does your 50-mile towing radius cover?',
        answer:
          'From Orem, 50 miles covers the entire Utah Valley including Provo, Salt Lake City, Lehi, American Fork, Springville, Payson, Spanish Fork, Draper, Sandy, and surrounding communities. If you are not sure whether you qualify, just call us.',
      },
      {
        question: 'Can you tow a dually or work truck?',
        answer:
          'Yes. We have the equipment to handle full-size pickups, dualies, and light commercial trucks. If you have an unusually large or heavy rig, call us first and we will confirm the right equipment for the job.',
      },
    ],
    relatedServices: ['emergency-service', 'transmission-replacement', 'transmission-diagnostics'],
  },
  {
    slug: 'emergency-service',
    title: 'Emergency Road Service',
    shortTitle: 'Emergency Service',
    headline: '24/7 Emergency Response — Call (833) 322-8458 Anytime',
    description:
      'Transmission failures do not wait for business hours. Our TTS Emergency Road Service program is available 24 hours a day, 7 days a week. Whether you are stranded on I-15 or broke down at a job site, call our emergency line at (833) 322-8458 and we will coordinate a response to get your truck taken care of — day or night.',
    heroImage: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1920&q=80',
    features: [
      '24/7 emergency response line: (833) 322-8458',
      'After-hours dispatch for stranded trucks',
      'Emergency towing coordination within 50 miles',
      'Priority scheduling for emergency customers',
      'Direct line to a TTS specialist — not a call center',
      'Fast, calm support to get your situation handled',
    ],
    faqs: [
      {
        question: 'What counts as a transmission emergency?',
        answer:
          'Any sudden loss of drive (no forward or reverse), severe slipping that makes the truck unsafe to drive, fluid loss, burning smell, or a transmission warning light combined with drivability issues. When in doubt, call us — we would rather talk you through it than have you damage the unit further by driving it.',
      },
      {
        question: 'Is the emergency line staffed by actual technicians?',
        answer:
          'Yes. When you call (833) 322-8458 after hours, you reach a TTS team member — not a third-party answering service. We can advise you on whether it is safe to drive, coordinate towing, and get you scheduled for first thing the next morning.',
      },
      {
        question: 'Do emergency calls cost more?',
        answer:
          'The emergency line and after-hours consultation are free. Towing within 50 miles is free as usual. The only costs are for the actual repair work, which we quote upfront before starting anything.',
      },
    ],
    relatedServices: ['free-towing', 'transmission-replacement', 'transmission-diagnostics'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
