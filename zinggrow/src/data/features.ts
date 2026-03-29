export interface Feature {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  benefits: [string, string, string, string];
}

export const features: Feature[] = [
  {
    slug: 'crm',
    title: 'CRM & Pipeline Management',
    shortTitle: 'CRM',
    description:
      'Stop losing deals in spreadsheets. Track every contact, conversation, and opportunity in one place with visual pipeline stages built for how small businesses actually sell.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    benefits: [
      'Visual drag-and-drop pipeline boards',
      'Full contact history and activity timeline',
      'Custom deal stages for your sales process',
      'Automated follow-up reminders and tasks',
    ],
  },
  {
    slug: 'email-sms',
    title: 'Email & SMS Automation',
    shortTitle: 'Email & SMS',
    description:
      'Reach your customers where they are — inbox or text. Build automated sequences that nurture leads, re-engage dormant clients, and drive real revenue while you focus on your work.',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    benefits: [
      'Automated drip sequences and nurture campaigns',
      'Two-way SMS texting with customers',
      'Broadcast emails and text blasts to your list',
      'Smart segmentation based on behavior and tags',
    ],
  },
  {
    slug: 'appointments',
    title: 'Appointment Scheduling',
    shortTitle: 'Scheduling',
    description:
      'Replace back-and-forth phone tag with a booking page your customers love. Automated reminders slash no-shows, and every appointment syncs directly to your calendar.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    benefits: [
      'Online booking page you can share anywhere',
      'Automatic SMS and email appointment reminders',
      'Google Calendar and Outlook sync',
      'Buffer times, availability blocks, and team calendars',
    ],
  },
  {
    slug: 'reviews',
    title: 'Review Management',
    shortTitle: 'Reviews',
    description:
      'Turn happy customers into your best marketing. Automated review requests sent at the perfect moment, with monitoring and response tools so your reputation works for you 24/7.',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    benefits: [
      'Automated review requests after every job',
      'Google, Facebook, and Yelp monitoring in one place',
      'Response templates and one-click replies',
      'Review performance dashboard and trend tracking',
    ],
  },
  {
    slug: 'website',
    title: 'Website & Funnel Builder',
    shortTitle: 'Website Builder',
    description:
      'Build landing pages and lead funnels that convert — no developer required. Capture leads with opt-in forms, track conversions, and turn website visitors into paying customers.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    benefits: [
      'Drag-and-drop page builder with templates',
      'Lead capture forms that feed directly into your CRM',
      'Conversion tracking and A/B testing',
      'Custom domains with SSL included',
    ],
  },
  {
    slug: 'reporting',
    title: 'Reporting & Analytics',
    shortTitle: 'Reporting',
    description:
      'Finally see what is working and what is not. Track pipeline value, email open rates, campaign performance, and revenue attribution — all in one clean dashboard.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    benefits: [
      'Live pipeline value and close rate dashboards',
      'Email and SMS campaign performance metrics',
      'Revenue attribution by source and campaign',
      'Exportable reports for team meetings and planning',
    ],
  },
  {
    slug: 'onboarding',
    title: 'Human Onboarding Support',
    shortTitle: 'Human Onboarding',
    description:
      'The thing most platforms skip entirely. A real Zing team member works with you one-on-one to get your account set up, your data migrated, and your first campaigns running — before you are ever left on your own.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    benefits: [
      'Dedicated onboarding specialist assigned to your account',
      'Done-with-you data migration from your current tools',
      'Custom workflow and automation setup for your business',
      'Live training sessions for you and your team',
    ],
  },
  {
    slug: 'support',
    title: 'Ongoing Human Support',
    shortTitle: 'Human Support',
    description:
      'When something breaks or you want to level up, you call a real person — not a chatbot. Your dedicated support team knows your account, your goals, and your business. That is what 24 years in business looks like.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    benefits: [
      'Real humans answering the phone — no chatbot mazes',
      'Support team that already knows your setup',
      'Proactive check-ins and quarterly strategy reviews',
      'Same-day response SLA for critical issues',
    ],
  },
];
