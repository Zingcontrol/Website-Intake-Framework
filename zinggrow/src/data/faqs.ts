export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'platform-tech',
    question: 'What technology powers the ZingGrow platform?',
    answer:
      "ZingGrow is built on enterprise-grade marketing automation infrastructure — the same technology stack used by tens of thousands of businesses nationwide. But here's the thing: the technology is the easy part. What makes ZingGrow different is the 24 years of small business expertise, the hands-on human onboarding, and the dedicated support team that comes with every account. You're not paying for a login. You're paying for a partner.",
  },
  {
    id: 'pricing',
    question: 'How much does ZingGrow cost?',
    answer:
      "ZingGrow starts at a flat monthly rate that covers your entire team — no per-seat pricing, no nickel-and-diming. Pricing depends on the features you need and the size of your contact list. We're transparent about it from the first call. Most clients find they're spending less with ZingGrow than they were paying for three or four separate tools. Schedule a demo and we'll give you exact numbers based on your situation.",
  },
  {
    id: 'onboarding-time',
    question: 'How long does onboarding take?',
    answer:
      'Most clients are fully live within 5–10 business days. Your onboarding specialist schedules a kickoff call within 24 hours of signup, and from there you work together on data migration, automation setup, and team training. We do not hand you a 47-page help center and wish you luck — a real person is with you every step of the way until you feel confident running things on your own.',
  },
  {
    id: 'need-help',
    question: "What happens when I need help after onboarding?",
    answer:
      "You call or email the same support team that onboarded you. They already know your account, your workflows, and your business goals. There's no ticket queue where some stranger re-reads your entire history. Response time SLA is same-day for most issues, same-hour for critical problems. This is what 24 years in the business looks like — not a chatbot that apologizes and asks you to rephrase.",
  },
  {
    id: 'setup-done-for-you',
    question: 'Do you do the setup for me, or do I have to build everything myself?',
    answer:
      "We do it with you, not for you — meaning your onboarding specialist does the heavy lifting while you stay involved enough to understand what's happening. We migrate your contacts, configure your pipelines, build your first automation sequences, and set up your booking page. By the time onboarding is done, you know how it all works because we walked you through every piece. You are never just handed a blank platform.",
  },
  {
    id: 'contract-terms',
    question: 'Are there long-term contracts?',
    answer:
      "We offer both month-to-month and annual plans. Annual plans come with a meaningful discount. We're confident enough in our product and our support to let the results do the talking — we're not in the business of locking people in with contracts and hoping they forget. That said, most clients who give it 90 days are customers for years. We have clients who have been with us since the early 2000s.",
  },
  {
    id: 'whats-included',
    question: "What's included in a standard ZingGrow account?",
    answer:
      'A standard account includes: CRM and pipeline management, email and SMS automation, appointment scheduling with reminders, automated review requests and reputation monitoring, website and landing page builder, reporting and analytics dashboard, human onboarding with a dedicated specialist, and ongoing human support. It replaces your CRM, your email marketing platform, your scheduling tool, your review software, and your basic website builder — all in one.',
  },
  {
    id: 'switch-from-current-tools',
    question: 'I already use Mailchimp / HubSpot / another tool. Is switching hard?',
    answer:
      "Switching is one of the biggest things we specialize in. Your onboarding specialist has migrated hundreds of accounts from Mailchimp, HubSpot, spreadsheets, and a dozen other platforms. We export your contacts, tags, and history; rebuild your key automations in ZingGrow; and run both systems in parallel until you're confident. Most clients flip the switch within two weeks with zero data loss. If you've been putting off switching because it feels overwhelming — that's exactly why we exist.",
  },
];
