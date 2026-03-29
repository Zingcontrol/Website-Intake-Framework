export interface Testimonial {
  id: string;
  name: string;
  title: string;
  business: string;
  industry: string;
  quote: string;
  rating: number;
  previousTool: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'mark-r',
    name: 'Mark R.',
    title: 'Owner',
    business: 'Ridgeline Plumbing',
    industry: 'Plumbing',
    quote:
      "I tried three different CRMs before ZingGrow — every one of them left me to figure it out on my own. With Zing, a real person named Jen spent two hours with me on Zoom getting everything set up exactly the way I work. Six months later I still call the same number and get the same team. That's not how any of these other companies operate.",
    rating: 5,
    previousTool: 'HubSpot',
  },
  {
    id: 'dr-sarah-m',
    name: 'Dr. Sarah M.',
    title: 'Practice Owner',
    business: 'Millbrook Family Dental',
    industry: 'Dental Practice',
    quote:
      'We were using four different tools — a scheduling app, an email platform, a review software, and a basic CRM. The monthly cost was killing us and nothing talked to each other. ZingGrow replaced all of it. One platform, one bill, one team that knows us. Our new patient bookings are up 40% since we switched.',
    rating: 5,
    previousTool: 'Mailchimp + Calendly + Birdeye',
  },
  {
    id: 'james-t',
    name: 'James T.',
    title: 'Broker/Owner',
    business: 'Clearwater Realty Group',
    industry: 'Real Estate',
    quote:
      "Twenty-four years in business isn't something you fake. These folks have seen everything. When I had questions about my follow-up automation, they didn't just send me a help article — someone called me back the same afternoon and walked me through it. That kind of support is what keeps me as a customer.",
    rating: 5,
    previousTool: 'Follow Up Boss',
  },
  {
    id: 'tony-b',
    name: 'Tony B.',
    title: 'Owner',
    business: 'Brightside Roofing & Exteriors',
    industry: 'Roofing / Contractor',
    quote:
      "My old CRM was basically a fancy spreadsheet with a monthly fee. I needed something that would actually send texts to leads automatically, book appointments, and ask for reviews — without me doing it all manually. ZingGrow does all three and the setup team did 80% of the work for me during onboarding. This is what I was paying for.",
    rating: 5,
    previousTool: 'Spreadsheets + Podium',
  },
  {
    id: 'lisa-v',
    name: 'Lisa V.',
    title: 'Owner',
    business: 'Verde Kitchen & Catering',
    industry: 'Restaurant / Catering',
    quote:
      "I was skeptical that a CRM could help a restaurant. But the automated review requests alone changed everything for us — our Google rating went from 3.9 to 4.7 in about four months. The team at Zing set up the whole flow and showed me how to monitor it. It now runs completely on its own.",
    rating: 5,
    previousTool: 'Nothing formal',
  },
  {
    id: 'dan-h',
    name: 'Dan H.',
    title: 'Owner',
    business: 'Horizon HVAC Solutions',
    industry: 'HVAC',
    quote:
      "I've been in business 18 years and I've worked with a lot of vendors. Zing Business Systems is the real deal — veteran-run, professional, and they actually answer the phone. The platform does everything I need and they helped me migrate all my contacts over without losing a thing. Best technology decision I've made in years.",
    rating: 5,
    previousTool: 'ServiceTitan (partial)',
  },
];
