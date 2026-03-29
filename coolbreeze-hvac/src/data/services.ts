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
  headline: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
}

export const services: Record<string, Service> = {
  "ac-repair": {
    slug: "ac-repair",
    title: "AC Repair",
    headline: "Fast, Reliable AC Repair in the DFW Metroplex",
    description:
      "When your air conditioning breaks down in the Texas heat, every minute counts. Our certified technicians diagnose and repair all makes and models, restoring your comfort quickly with upfront pricing and no overtime charges. We carry the most common parts on our trucks so most repairs are completed in a single visit.",
    heroImage:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
    features: [
      {
        title: "Same-Day Service",
        description:
          "We understand that a broken AC in Texas is an emergency. Most calls are scheduled for same-day service so you are never left waiting.",
      },
      {
        title: "Upfront Pricing",
        description:
          "You will receive a clear, written estimate before any work begins. No hidden fees and no surprises on your invoice.",
      },
      {
        title: "All Makes & Models",
        description:
          "From Trane and Carrier to Lennox and Goodman, our technicians are trained and equipped to service every major brand.",
      },
      {
        title: "EPA-Certified Technicians",
        description:
          "Every CoolBreeze technician holds EPA 608 certification and undergoes ongoing factory training to stay current with the latest systems.",
      },
      {
        title: "Parts on Every Truck",
        description:
          "Our service vehicles are stocked with capacitors, contactors, fan motors, and other common parts so most repairs are finished in one trip.",
      },
      {
        title: "1-Year Repair Warranty",
        description:
          "All AC repairs are backed by a full one-year parts and labor warranty for your peace of mind.",
      },
    ],
    faqs: [
      {
        question: "How quickly can you repair my AC?",
        answer:
          "In most cases we offer same-day service. During peak summer months we prioritize emergency calls and can typically arrive within 2 to 4 hours.",
      },
      {
        question: "My AC is blowing warm air. What could be wrong?",
        answer:
          "Warm air can be caused by a refrigerant leak, a faulty compressor, a bad capacitor, or a dirty evaporator coil. Our technicians will perform a full diagnostic to pinpoint the exact issue before recommending a repair.",
      },
      {
        question: "Is it worth repairing my old AC or should I replace it?",
        answer:
          "As a general rule, if your system is over 15 years old and the repair cost exceeds 50 percent of a new unit, replacement is usually the better investment. We will give you an honest recommendation either way.",
      },
      {
        question: "Do you offer emergency AC repair?",
        answer:
          "Yes. We provide emergency AC repair services seven days a week, including holidays. Call our main line any time and you will reach a live dispatcher.",
      },
    ],
    relatedServices: ["maintenance", "installation", "heat-pump"],
  },

  "heating-repair": {
    slug: "heating-repair",
    title: "Heating Repair",
    headline: "Keep Your Home Warm with Expert Heating Repair",
    description:
      "North Texas winters can bring freezing temperatures overnight. Our heating repair team responds fast to get your furnace, heat pump, or boiler back in working order. We service all brands and back every repair with a satisfaction guarantee.",
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=80",
    features: [
      {
        title: "24/7 Emergency Heating Repair",
        description:
          "Freezing temperatures do not wait for business hours. Our emergency line is staffed around the clock so you can get help when you need it most.",
      },
      {
        title: "Gas & Electric Systems",
        description:
          "Whether you have a gas furnace, electric heat pump, or hydronic boiler, our team has the training and tools to handle the job.",
      },
      {
        title: "Safety Inspections Included",
        description:
          "Every heating repair includes a complimentary carbon monoxide check and heat exchanger inspection to make sure your system is operating safely.",
      },
      {
        title: "Transparent Diagnostics",
        description:
          "We walk you through our findings with photos and clear explanations before recommending any repair so you can make an informed decision.",
      },
      {
        title: "Stocked Service Vehicles",
        description:
          "Common heating parts like ignitors, flame sensors, and blower motors travel with us on every call to minimize return trips.",
      },
      {
        title: "Satisfaction Guarantee",
        description:
          "If your heating system is not performing properly after our repair, we will come back at no additional cost and make it right.",
      },
    ],
    faqs: [
      {
        question: "Why is my heater blowing cold air?",
        answer:
          "This is commonly caused by a dirty flame sensor, a faulty ignitor, or a tripped safety switch. It can also indicate a thermostat issue. Our technicians will diagnose the root cause and explain your options.",
      },
      {
        question: "How often should I replace my furnace filter during winter?",
        answer:
          "During heavy use we recommend checking your filter every 30 days and replacing it when it looks visibly dirty. A clogged filter restricts airflow and forces your system to work harder, increasing energy bills and wear.",
      },
      {
        question: "Is a cracked heat exchanger dangerous?",
        answer:
          "Yes. A cracked heat exchanger can allow carbon monoxide to leak into your living space, which is a serious health hazard. If we detect a crack during inspection we will advise you on repair or replacement options immediately.",
      },
    ],
    relatedServices: ["furnace-repair", "heat-pump", "maintenance"],
  },

  "furnace-repair": {
    slug: "furnace-repair",
    title: "Furnace Repair",
    headline: "Dependable Furnace Repair from Certified Technicians",
    description:
      "A malfunctioning furnace is more than an inconvenience; it can be a safety concern. CoolBreeze technicians are trained to diagnose and repair gas and electric furnaces of all makes, ensuring your home stays warm and your family stays safe. We offer straightforward pricing and stand behind our work.",
    heroImage:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80",
    features: [
      {
        title: "Complete Furnace Diagnostics",
        description:
          "We test every critical component including the heat exchanger, blower motor, ignition system, and thermostat to identify the exact problem.",
      },
      {
        title: "Gas & Electric Furnaces",
        description:
          "Our technicians are licensed to work on both natural gas and electric furnace systems from all major manufacturers.",
      },
      {
        title: "Carbon Monoxide Testing",
        description:
          "Safety comes first. Every furnace repair visit includes carbon monoxide level testing in your living areas and at the unit itself.",
      },
      {
        title: "Flat-Rate Pricing",
        description:
          "You pay by the job, not by the hour. Our flat-rate pricing means no surprises regardless of how long the repair takes.",
      },
      {
        title: "Warranty-Friendly Service",
        description:
          "We honor all manufacturer warranties and use OEM or manufacturer-approved parts to keep your coverage intact.",
      },
      {
        title: "Follow-Up Guarantee",
        description:
          "If the issue recurs within 30 days of our repair, we will return and re-diagnose at no charge.",
      },
    ],
    faqs: [
      {
        question: "My furnace keeps cycling on and off. What is wrong?",
        answer:
          "Short cycling is often caused by a clogged filter, a malfunctioning flame sensor, or an oversized unit. It increases energy costs and puts extra stress on components. We will identify the cause and fix it promptly.",
      },
      {
        question: "How long does a typical furnace repair take?",
        answer:
          "Most furnace repairs are completed in one to two hours once the technician is on site. If a special-order part is needed, we will schedule a return visit at your earliest convenience.",
      },
      {
        question: "Should I repair or replace a 20-year-old furnace?",
        answer:
          "Furnaces typically last 15 to 25 years. If yours is nearing the end of that range and needs a costly repair, replacement may be more cost-effective in the long run. We will provide both options so you can decide what makes sense for your budget.",
      },
      {
        question: "Do you service all furnace brands?",
        answer:
          "Yes. We repair Trane, Carrier, Lennox, Goodman, Rheem, Bryant, York, and every other major furnace manufacturer sold in the DFW market.",
      },
    ],
    relatedServices: ["heating-repair", "installation", "maintenance"],
  },

  "heat-pump": {
    slug: "heat-pump",
    title: "Heat Pump Services",
    headline: "Year-Round Comfort with Heat Pump Installation & Repair",
    description:
      "Heat pumps provide energy-efficient heating and cooling in a single system, making them an excellent choice for the North Texas climate. CoolBreeze offers expert heat pump installation, repair, and maintenance to help you save on energy costs while staying comfortable year-round.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
    features: [
      {
        title: "Energy-Efficient Solutions",
        description:
          "Heat pumps can reduce heating costs by up to 50 percent compared to traditional furnaces. We help you choose the right size and SEER rating for maximum savings.",
      },
      {
        title: "Dual-Function Comfort",
        description:
          "A heat pump heats your home in winter and cools it in summer using a single system, simplifying maintenance and reducing equipment costs.",
      },
      {
        title: "Expert Sizing & Installation",
        description:
          "Proper sizing is critical for heat pump performance. We perform Manual J load calculations to ensure your new system is matched to your home.",
      },
      {
        title: "Refrigerant Expertise",
        description:
          "Our technicians are trained to work with both R-410A and next-generation R-454B refrigerants used in modern heat pump systems.",
      },
      {
        title: "Defrost Cycle Repair",
        description:
          "If your outdoor unit is icing up in winter, we can diagnose and repair defrost board, sensor, and reversing valve issues quickly.",
      },
      {
        title: "Rebate Assistance",
        description:
          "We help you navigate available utility rebates and federal tax credits for qualifying high-efficiency heat pump installations.",
      },
    ],
    faqs: [
      {
        question: "Do heat pumps work well in Texas?",
        answer:
          "Absolutely. The mild winters in DFW make heat pumps one of the most efficient heating and cooling options available. They perform best in climates where temperatures rarely drop below 25 degrees for extended periods.",
      },
      {
        question: "How long does a heat pump last?",
        answer:
          "With proper maintenance a quality heat pump typically lasts 12 to 17 years. Enrolling in our CoolBreeze Club maintenance plan helps extend the life of your system.",
      },
      {
        question: "What is the difference between a heat pump and a traditional AC?",
        answer:
          "A traditional AC only cools your home and relies on a separate furnace for heat. A heat pump uses a reversing valve to both heat and cool, making it a versatile two-in-one solution.",
      },
    ],
    relatedServices: ["ac-repair", "heating-repair", "installation"],
  },

  installation: {
    slug: "installation",
    title: "HVAC Installation",
    headline: "Professional HVAC Installation for Lasting Comfort",
    description:
      "Whether you are building a new home, replacing an aging system, or upgrading to higher efficiency, CoolBreeze delivers expert HVAC installation you can trust. We handle the entire process from equipment selection and load calculations to permitting, installation, and post-install inspection.",
    heroImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
    features: [
      {
        title: "Free In-Home Estimates",
        description:
          "A comfort advisor visits your home to assess your needs, measure your space, and provide a detailed written proposal at no cost.",
      },
      {
        title: "Manual J Load Calculations",
        description:
          "We use industry-standard load calculations to size your equipment correctly, preventing the efficiency and comfort problems caused by oversized or undersized systems.",
      },
      {
        title: "Top-Brand Equipment",
        description:
          "We install Trane, Carrier, Lennox, and other leading brands and help you choose the best system for your home and budget.",
      },
      {
        title: "Licensed & Insured Crews",
        description:
          "Every installation is performed by NATE-certified technicians who are fully licensed, bonded, and insured for your protection.",
      },
      {
        title: "Permitting & Inspections",
        description:
          "We handle all necessary city permits and schedule the required inspections so your installation meets local building codes.",
      },
      {
        title: "Flexible Financing",
        description:
          "We partner with leading lenders to offer low monthly payments and promotional interest rates that fit your budget.",
      },
    ],
    faqs: [
      {
        question: "How long does a full HVAC installation take?",
        answer:
          "A standard residential replacement is typically completed in one day. New construction installs or complex ductwork modifications may take two to three days depending on the scope.",
      },
      {
        question: "What size system do I need for my home?",
        answer:
          "System size depends on your home's square footage, insulation, window area, and other factors. We perform a Manual J load calculation to determine the correct size rather than relying on rules of thumb.",
      },
      {
        question: "Do you offer financing for new HVAC systems?",
        answer:
          "Yes. We offer financing plans with approved credit, including options with low monthly payments and promotional 0 percent APR periods. Ask your comfort advisor for details.",
      },
      {
        question: "What warranties come with a new system?",
        answer:
          "Most systems include a 10-year manufacturer parts warranty when registered. CoolBreeze also provides a 2-year labor warranty on all installations, and extended coverage is available through our CoolBreeze Club.",
      },
    ],
    relatedServices: ["ac-repair", "heat-pump", "maintenance"],
  },

  maintenance: {
    slug: "maintenance",
    title: "HVAC Maintenance",
    headline: "Protect Your Investment with CoolBreeze Maintenance Plans",
    description:
      "Routine maintenance is the single best way to extend the life of your HVAC system, prevent costly breakdowns, and keep your energy bills in check. Our CoolBreeze Club members enjoy priority scheduling, discounted repairs, and two comprehensive tune-ups per year.",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    features: [
      {
        title: "Bi-Annual Tune-Ups",
        description:
          "Club members receive one cooling tune-up in the spring and one heating tune-up in the fall to keep your system running at peak performance.",
      },
      {
        title: "Priority Scheduling",
        description:
          "When you need a repair, CoolBreeze Club members move to the front of the line with same-day priority scheduling.",
      },
      {
        title: "15% Repair Discount",
        description:
          "Members save 15 percent on all parts and labor for any repairs needed throughout the year, on top of the included tune-ups.",
      },
      {
        title: "No Overtime Charges",
        description:
          "Club members never pay overtime rates for evening, weekend, or holiday service calls.",
      },
      {
        title: "Comprehensive Inspection",
        description:
          "Each tune-up includes a detailed multi-point inspection covering electrical connections, refrigerant levels, airflow, and safety controls.",
      },
      {
        title: "Filter Reminders",
        description:
          "We send you automatic reminders when it is time to change your filter so you never have to guess.",
      },
    ],
    faqs: [
      {
        question: "What is included in a CoolBreeze tune-up?",
        answer:
          "Our tune-up includes a multi-point inspection, cleaning of the condenser and evaporator coils, checking refrigerant levels, tightening electrical connections, calibrating the thermostat, and testing all safety controls.",
      },
      {
        question: "How much does the CoolBreeze Club cost?",
        answer:
          "Membership starts at $19.95 per month for one system. Each additional system can be added at a discounted rate. The plan pays for itself with just one repair discount or avoided breakdown.",
      },
      {
        question: "Do I really need maintenance if my system is running fine?",
        answer:
          "Yes. Most HVAC failures stem from neglected maintenance. Regular tune-ups catch small problems before they become expensive repairs and help your system maintain its efficiency rating over time.",
      },
      {
        question: "Can I cancel my membership at any time?",
        answer:
          "Yes. The CoolBreeze Club is a month-to-month membership with no long-term contracts. You can cancel at any time with no penalties.",
      },
    ],
    relatedServices: ["ac-repair", "heating-repair", "installation"],
  },
};
