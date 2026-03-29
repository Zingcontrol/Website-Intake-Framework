export interface ServiceFeature {
  title: string;
  description: string;
}

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
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  urgent?: boolean;
}

export const services: Record<string, Service> = {
  "oil-change": {
    slug: "oil-change",
    title: "Oil Change & Lube",
    shortTitle: "Oil Change",
    headline: "Fast, Honest Oil Changes — In and Out in 30 Minutes",
    description:
      "Skipping oil changes is the single fastest way to shorten your engine's life. Apex Auto makes it easy: no appointment needed for most vehicles, honest recommendations, and the right oil for your car — conventional, synthetic blend, or full synthetic. We check your fluids and tire pressure every visit at no extra charge.",
    heroImage:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1920&q=80",
    features: [
      {
        title: "No Appointment Needed",
        description:
          "Walk in any time during business hours. Most oil changes are completed in 30 minutes or less so you can get back on the road fast.",
      },
      {
        title: "All Oil Types",
        description:
          "We use conventional, synthetic blend, and full synthetic oil — whatever your vehicle manufacturer specifies — using only API-certified products.",
      },
      {
        title: "Free Multi-Point Inspection",
        description:
          "Every oil change includes a courtesy inspection of your air filter, cabin filter, tire pressure, fluid levels, and wiper blades.",
      },
      {
        title: "Filter Replacement",
        description:
          "We replace your oil filter with a new OEM-quality filter on every service. Never re-use old filters.",
      },
      {
        title: "Sticker Reminder",
        description:
          "We place a convenient windshield sticker showing your next service mileage and date so you never have to guess when you are due.",
      },
      {
        title: "Digital Service Records",
        description:
          "Your service history is stored in our system. Just give us your name or license plate and we pull up everything — no receipts to dig through.",
      },
    ],
    faqs: [
      {
        question: "How often should I change my oil?",
        answer:
          "Most modern vehicles using full synthetic oil can go 7,500 to 10,000 miles between changes. Older vehicles or those using conventional oil typically need a change every 3,000 to 5,000 miles. We will recommend the correct interval for your specific vehicle.",
      },
      {
        question: "What is the difference between synthetic and conventional oil?",
        answer:
          "Full synthetic oil provides better engine protection at extreme temperatures, lasts longer between changes, and improves fuel economy slightly. If your vehicle was designed for synthetic, we strongly recommend using it. We can walk you through which option is right for you.",
      },
      {
        question: "Do I need an appointment for an oil change?",
        answer:
          "No. Walk-ins are welcome any time during business hours. If you want to guarantee a specific time slot, you can call ahead and we will have a bay ready when you arrive.",
      },
      {
        question: "How long does an oil change take?",
        answer:
          "Most oil changes are done in 30 minutes or less. If we identify other issues during the courtesy inspection, we will let you know and you can decide whether to address them that day or schedule a follow-up.",
      },
    ],
    relatedServices: ["tires", "diagnostics", "brakes"],
  },

  brakes: {
    slug: "brakes",
    title: "Brake Repair & Service",
    shortTitle: "Brakes",
    headline: "Don't Ignore Your Brakes — Apex Auto Has You Covered",
    description:
      "Grinding, squealing, or a soft pedal are signs your brakes need attention now. Apex Auto's ASE-certified technicians inspect the entire brake system — pads, rotors, calipers, lines, and fluid — and give you a straight answer on what needs to be done and what can wait. No upselling, no pressure.",
    heroImage:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=80",
    urgent: true,
    features: [
      {
        title: "Free Brake Inspection",
        description:
          "Concerned about your brakes? We will inspect pads, rotors, calipers, and brake fluid at no charge and give you a straight, honest assessment.",
      },
      {
        title: "Pads, Rotors & Calipers",
        description:
          "We service the complete brake system including brake pads, rotors, drums, calipers, wheel cylinders, and brake lines on all makes and models.",
      },
      {
        title: "Quality Parts",
        description:
          "We use premium aftermarket or OEM brake components that meet or exceed your vehicle manufacturer's specifications.",
      },
      {
        title: "Brake Fluid Flush",
        description:
          "Brake fluid absorbs moisture over time and must be replaced. We test your fluid's boiling point and recommend a flush when it falls below spec.",
      },
      {
        title: "Same-Day Service",
        description:
          "Most brake jobs are completed the same day you bring your vehicle in. We stock pads and rotors for the most common vehicles in DFW.",
      },
      {
        title: "Lifetime Warranty Available",
        description:
          "Select brake pad lines come with a lifetime warranty. Ask our service advisor which option is right for your vehicle and driving style.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my brakes need to be replaced?",
        answer:
          "Common warning signs include squealing or grinding noises when braking, a soft or spongy brake pedal, the vehicle pulling to one side when you brake, or the brake warning light on your dashboard. If you notice any of these, bring your vehicle in for a free inspection.",
      },
      {
        question: "How long do brake pads last?",
        answer:
          "Brake pad life varies widely depending on driving habits, vehicle weight, and pad material. Most pads last between 30,000 and 70,000 miles. City driving with frequent stops wears pads faster than highway driving.",
      },
      {
        question: "Do I need to replace rotors when I replace pads?",
        answer:
          "Not always. If your rotors are within specification, we can resurface them to extend their life. We will measure rotor thickness and check for warping to give you the most cost-effective recommendation.",
      },
    ],
    relatedServices: ["diagnostics", "tires", "oil-change"],
  },

  "ac-heating": {
    slug: "ac-heating",
    title: "AC & Heating",
    shortTitle: "AC & Heat",
    headline: "Stay Comfortable Year-Round with Expert Auto Climate Repair",
    description:
      "A broken AC in a Texas summer or a dead heater on a cold morning is more than an inconvenience — it is a safety issue. Apex Auto diagnoses and repairs automotive climate systems on all makes and models, from refrigerant recharges to full compressor replacements, with clear pricing before we start.",
    heroImage:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80",
    features: [
      {
        title: "AC Performance Check",
        description:
          "We measure vent temperature, check refrigerant pressure, and inspect the compressor, condenser, and evaporator to diagnose exactly what is wrong.",
      },
      {
        title: "Refrigerant Recharge",
        description:
          "If your AC is just low on refrigerant, we can recharge the system and check for leaks in the same visit.",
      },
      {
        title: "Leak Detection",
        description:
          "We use UV dye and electronic leak detectors to find refrigerant leaks before they leave you stranded with no cooling.",
      },
      {
        title: "Compressor & Component Repair",
        description:
          "From compressors and condensers to expansion valves and blend door actuators, we repair or replace the full range of climate system components.",
      },
      {
        title: "Heating System Service",
        description:
          "Heater core replacement, thermostat service, blower motor repair, and coolant flush are all within our capabilities.",
      },
      {
        title: "Upfront Estimates",
        description:
          "You will receive a written estimate before any work begins. We explain what we found, what it will cost, and what happens if you choose not to repair it.",
      },
    ],
    faqs: [
      {
        question: "Why is my car AC blowing warm air?",
        answer:
          "This can be caused by low refrigerant due to a leak, a failed compressor, a clogged condenser, or an electrical issue with the AC clutch. We will run a full diagnostic to pinpoint the cause rather than guessing.",
      },
      {
        question: "How much does a car AC recharge cost?",
        answer:
          "A basic refrigerant recharge typically runs $100 to $200 depending on the vehicle and refrigerant type. If there is an underlying leak or component failure, we will quote that separately before proceeding.",
      },
      {
        question: "My heater only blows cold air. What is wrong?",
        answer:
          "Cold air from the heater usually points to a low coolant level, a stuck thermostat, a clogged heater core, or a blend door actuator issue. We will diagnose the system and walk you through the options.",
      },
    ],
    relatedServices: ["diagnostics", "oil-change", "brakes"],
  },

  tires: {
    slug: "tires",
    title: "Tires & Alignment",
    shortTitle: "Tires",
    headline: "Tires, Rotation, Balancing & Alignment — All in One Stop",
    description:
      "Your tires are the only thing between your vehicle and the road. Apex Auto carries a wide selection of name-brand and value tires, offers free rotations with purchase, and has the alignment equipment to make sure your new tires wear evenly for years. Ask about road hazard protection on every set.",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
    features: [
      {
        title: "Tire Sales & Installation",
        description:
          "We carry major brands including Michelin, Goodyear, Continental, Bridgestone, and value options to fit every budget. New tires include mount, balance, and valve stems.",
      },
      {
        title: "Free Tire Rotation",
        description:
          "We rotate tires free of charge with every oil change — or any time you ask. Even tire wear extends tire life significantly.",
      },
      {
        title: "Wheel Balancing",
        description:
          "Vibration in your steering wheel or seat often means your wheels are out of balance. We use computerized balancers for a smooth, precise result.",
      },
      {
        title: "Alignment Check & Service",
        description:
          "Our computerized alignment system checks and corrects camber, caster, and toe angles to manufacturer specifications for even tire wear and straight tracking.",
      },
      {
        title: "Flat Repair",
        description:
          "Nail or screw in the tread? We plug and patch flat tires properly — not just a temporary plug — for a safe, lasting repair.",
      },
      {
        title: "TPMS Service",
        description:
          "Tire pressure monitoring system sensors can be replaced or reset as part of any tire service to keep your warning light off and your pressures accurate.",
      },
    ],
    faqs: [
      {
        question: "How often should I rotate my tires?",
        answer:
          "Most manufacturers recommend rotating tires every 5,000 to 7,500 miles, which typically lines up with every other oil change. We rotate tires free with every oil change if you purchase tires from us.",
      },
      {
        question: "How do I know when I need new tires?",
        answer:
          "Check your tread depth using the penny test — if you can see the top of Lincoln's head, your tires are at 2/32\" or less and should be replaced. Also look for cracks in the sidewall, bulges, or uneven wear patterns.",
      },
      {
        question: "Does alignment affect tire life?",
        answer:
          "Absolutely. Even a slight misalignment causes your tires to scrub against the road rather than rolling straight, wearing them out unevenly and much faster. We recommend an alignment check whenever you purchase new tires.",
      },
    ],
    relatedServices: ["brakes", "oil-change", "diagnostics"],
  },

  diagnostics: {
    slug: "diagnostics",
    title: "Engine Diagnostics",
    shortTitle: "Diagnostics",
    headline: "Check Engine Light On? We Find the Problem Fast",
    description:
      "Modern vehicles generate hundreds of fault codes that point our technicians toward the root cause quickly. Apex Auto uses professional-grade scan tools and ASE-certified expertise to interpret those codes correctly — not just read them — so you get an accurate diagnosis and a fair quote, not a parts-swapping guessing game.",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
    urgent: true,
    features: [
      {
        title: "Professional Scan Tool Diagnostics",
        description:
          "We use professional-grade OBD-II scan tools that access live data streams, freeze frames, and manufacturer-specific codes — far beyond what a parts-store scanner reads.",
      },
      {
        title: "Root Cause Analysis",
        description:
          "A code tells you what system failed, not why. Our technicians go further to identify the underlying cause so the repair actually sticks.",
      },
      {
        title: "Written Estimate Before Repairs",
        description:
          "Once we know what is wrong, we provide a full written estimate before touching anything. You decide what to fix and when.",
      },
      {
        title: "All Systems Covered",
        description:
          "Engine, transmission, ABS, airbag, HVAC, emissions — we diagnose faults across every vehicle system, not just powertrain.",
      },
      {
        title: "Emissions Testing",
        description:
          "We are a certified Texas emissions testing station. If your vehicle fails, we diagnose and repair the cause to help you pass.",
      },
      {
        title: "Honest Communication",
        description:
          "We explain what we found in plain English, what it means for your vehicle's safety and reliability, and what it will cost to fix.",
      },
    ],
    faqs: [
      {
        question: "Should I drive my car with the check engine light on?",
        answer:
          "It depends on the light. A steady check engine light generally means a non-emergency issue you can monitor but should have checked soon. A flashing check engine light indicates a serious misfire that can damage your catalytic converter — stop driving and call us immediately.",
      },
      {
        question: "How much does a diagnostic cost?",
        answer:
          "Our standard diagnostic fee is $99.95 for most vehicles. This covers the full scan and a written explanation of findings. The fee is applied toward the cost of any repairs you authorize that same visit.",
      },
      {
        question: "Can a parts store read my codes for free?",
        answer:
          "Yes, but a parts store only reads the code number — they cannot perform live data analysis, manufacturer-specific tests, or interpret why the code set. Misdiagnosis from code-only reads is the number-one cause of repeat check engine lights.",
      },
    ],
    relatedServices: ["brakes", "ac-heating", "tires"],
  },

  transmission: {
    slug: "transmission",
    title: "Transmission Service",
    shortTitle: "Transmission",
    headline: "Transmission Slipping? Expert Diagnosis & Repair in DFW",
    description:
      "Transmission problems left unaddressed turn into transmission replacements. Apex Auto handles everything from routine fluid services that prevent failures to full transmission repair and rebuild by experienced specialists. We give you a straight diagnosis and an honest answer on whether repair or replacement makes more financial sense for your vehicle.",
    heroImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",
    features: [
      {
        title: "Transmission Fluid Service",
        description:
          "A fluid flush and filter replacement every 30,000 to 60,000 miles is the best way to prevent transmission failure. We use the correct fluid type and quantity for your specific vehicle.",
      },
      {
        title: "Transmission Diagnostics",
        description:
          "Slipping, hard shifts, or delayed engagement are symptoms — not diagnoses. We use live data scanning and road testing to identify the exact cause.",
      },
      {
        title: "Minor Transmission Repair",
        description:
          "Solenoid replacement, sensor repair, valve body work, and external seal replacement can often restore function without a full rebuild.",
      },
      {
        title: "Transmission Rebuild",
        description:
          "When internal components are worn, a rebuild restores your transmission to factory specifications using new clutches, bands, seals, and hard parts.",
      },
      {
        title: "Remanufactured Units",
        description:
          "For older vehicles where a rebuild may not be cost-effective, we source quality remanufactured transmissions that come with a warranty.",
      },
      {
        title: "Repair vs. Replace Guidance",
        description:
          "We give you an honest recommendation based on your vehicle's age, value, mileage, and the extent of the damage — not on what costs more.",
      },
    ],
    faqs: [
      {
        question: "What are signs of transmission trouble?",
        answer:
          "Warning signs include slipping gears, delayed or rough shifts, a burning smell, transmission warning light, fluid leaks under the vehicle, or hesitation when accelerating. Bring your vehicle in early — small transmission issues are much cheaper to fix than complete failures.",
      },
      {
        question: "How much does a transmission repair cost?",
        answer:
          "Costs range widely depending on the vehicle and the extent of the problem. A fluid service runs $150 to $250. Minor repairs typically fall between $500 and $1,500. A full rebuild or replacement can range from $2,500 to $4,500 or more. We will give you an accurate estimate after diagnosis.",
      },
      {
        question: "How long does a transmission rebuild take?",
        answer:
          "A transmission rebuild typically takes three to five business days depending on parts availability and the extent of the internal damage. We will give you an estimated completion date when we start the work.",
      },
    ],
    relatedServices: ["diagnostics", "oil-change", "brakes"],
  },
};
