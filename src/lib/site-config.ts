import {
  Archive,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Home,
  MapPin,
  PackageCheck,
  Route,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

// Temporary business data for local buildout.
// Replace these values before production without changing components.
export const siteConfig = {
  companyName: "BleuNord Moving",
  tagline: "Premium local movers for homes, condos, and offices.",
  phone: "(514) 555-0186",
  email: "hello@bleunordmoving.ca",
  address: "248 Rue Saint-Jacques, Montreal, QC H2Y 1L9",
  hours: "Mon-Sat, 8:00 AM-7:00 PM",
  serviceArea: "Greater Montreal, Laval, Longueuil, and nearby Quebec routes",
  rating: "4.9",
  reviewCount: "286",
  heroTrust: ["Fully insured", "No hidden fees", "Montreal-based crew"],
  facts: [
    { label: "Years moving Montreal", value: "9+" },
    { label: "Moves coordinated", value: "4,800+" },
    { label: "Average rating", value: "4.9/5" },
    { label: "Availability", value: "6 days" },
  ],
  credentials: [
    "Commercial liability insured",
    "Floor and doorway protection",
    "Clean trucks and moving blankets",
  ],
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

export const services = [
  {
    title: "Residential",
    description: "Apartments, condos, and family homes handled with care.",
    inclusions: ["Floor protection", "Furniture wrapping", "Elevator timing"],
    icon: Home,
  },
  {
    title: "Commercial",
    description: "Office moves planned around your team and schedule.",
    inclusions: ["Desk breakdown", "Equipment handling", "After-hours options"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Long Distance",
    description: "Quebec and Ontario routes with clear timing.",
    inclusions: ["Route planning", "Blanket wrap", "Arrival updates"],
    icon: Truck,
  },
  {
    title: "Packing",
    description: "Boxes, wrapping, and labeling for fragile items.",
    inclusions: ["Fragile wrapping", "Room labels", "Packing materials"],
    icon: PackageCheck,
  },
  {
    title: "Specialty Moving",
    description: "Pianos, antiques, art, and oversized furniture.",
    inclusions: ["Piano boards", "Extra straps", "Doorway protection"],
    icon: Archive,
  },
  {
    title: "Last Minute",
    description: "Fast help when plans change and timing matters.",
    inclusions: ["Rapid crew match", "Flexible windows", "Simple estimate"],
    icon: CalendarClock,
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Share the move",
    description: "Tell us the addresses, date, access notes, and home size.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Plan the crew",
    description: "We match the truck, movers, timing, and protection plan.",
    icon: Route,
  },
  {
    step: "03",
    title: "Move day stays calm",
    description:
      "Your crew arrives ready, protects the space, and keeps you updated.",
    icon: Sofa,
  },
];

export const whyUs = [
  {
    title: "Upfront Pricing",
    description: "Clear hourly and flat-rate examples before move day.",
    icon: CheckCircle2,
  },
  {
    title: "Fully Insured",
    description: "Your home, belongings, and crew are covered.",
    icon: ShieldCheck,
  },
  {
    title: "Montreal Crew",
    description: "Local movers who know walk-ups, parking, and weather.",
    icon: MapPin,
  },
  {
    title: "On Time",
    description: "Arrival windows stay tight and communication stays clear.",
    icon: Clock,
  },
];

export const trustStats = [
  { label: "Rating", value: siteConfig.rating, icon: Star },
  { label: "Reviews", value: siteConfig.reviewCount, icon: Sparkles },
  { label: "Insured", value: "Yes", icon: BadgeCheck },
  { label: "Boxes moved", value: "32k+", icon: Boxes },
];

export const reviews = [
  {
    name: "Maya B.",
    location: "Plateau-Mont-Royal",
    avatar: "MB",
    rating: 5,
    quote:
      "The crew protected the stairwell, wrapped everything properly, and finished right on the estimate.",
  },
  {
    name: "Thomas R.",
    location: "Griffintown",
    avatar: "TR",
    rating: 5,
    quote:
      "Calm, quick, and very organized. They made a tight condo elevator booking feel easy.",
  },
  {
    name: "Nadia C.",
    location: "Westmount",
    avatar: "NC",
    rating: 5,
    quote:
      "Straight pricing, careful movers, and no surprises at the end. Exactly what we needed.",
  },
  {
    name: "Julien M.",
    location: "Rosemont",
    avatar: "JM",
    rating: 5,
    quote:
      "They handled a third-floor walk-up with zero drama and kept us updated the whole morning.",
  },
  {
    name: "Priya S.",
    location: "Outremont",
    avatar: "PS",
    rating: 5,
    quote:
      "The packing help was careful and fast. Every fragile box arrived exactly as it left.",
  },
  {
    name: "Andre L.",
    location: "Laval",
    avatar: "AL",
    rating: 5,
    quote:
      "Clear estimate, friendly crew, and a clean truck. We would book them again.",
  },
];

export const pricing = [
  {
    name: "Small Apartment",
    price: "from $395",
    details: "Studio or 1 bedroom, 2 movers, local Montreal move.",
    tag: "Quick start",
  },
  {
    name: "Family Home",
    price: "from $795",
    details: "2-3 bedrooms, larger truck, protection materials included.",
    tag: "Most popular",
  },
  {
    name: "Office Move",
    price: "custom quote",
    details: "Desks, equipment, after-hours timing, and floor planning.",
    tag: "Tailored plan",
  },
];

export const moveSizes = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4+ Bedrooms",
  "Office/Commercial",
] as const;

// Temporary estimate rules for the frontend quote flow.
// Replace with backend pricing logic before taking real bookings.
export const quoteEstimateRules: Record<
  (typeof moveSizes)[number],
  { range: string; crew: string; note: string }
> = {
  Studio: {
    range: "$395-$575",
    crew: "2 movers",
    note: "Best for compact apartments with light furniture.",
  },
  "1 Bedroom": {
    range: "$495-$725",
    crew: "2 movers",
    note: "Good fit for condos, elevators, and smaller local moves.",
  },
  "2 Bedrooms": {
    range: "$695-$995",
    crew: "3 movers",
    note: "Adds speed for larger furniture and longer building access.",
  },
  "3 Bedrooms": {
    range: "$895-$1,295",
    crew: "3-4 movers",
    note: "Built for family homes, stairs, and fuller inventories.",
  },
  "4+ Bedrooms": {
    range: "$1,250-$1,850",
    crew: "4 movers",
    note: "Recommended for larger homes and full-day planning.",
  },
  "Office/Commercial": {
    range: "Custom plan",
    crew: "Planned crew",
    note: "Scheduled around equipment, desks, access, and downtime.",
  },
};

export const faqs = [
  {
    question: "How far ahead should I book?",
    answer:
      "One to three weeks is ideal. End-of-month dates fill fastest, but last-minute slots are sometimes available.",
  },
  {
    question: "Do you bring moving blankets and wrap?",
    answer:
      "Yes. Each crew brings blankets, stretch wrap, dollies, and basic floor protection.",
  },
  {
    question: "Can you move condos with elevator rules?",
    answer:
      "Yes. Share the elevator window, loading dock rules, and building contact before move day.",
  },
  {
    question: "Are the prices final?",
    answer:
      "Final pricing depends on inventory, access, distance, and crew size.",
  },
  {
    question: "Do you serve outside Montreal?",
    answer:
      "The service area covers Greater Montreal, Laval, Longueuil, and nearby Quebec routes.",
  },
];

export const galleryMoments = [
  "Wrapped sofa loaded with care",
  "Condo hallway protection",
  "Organized box staging",
  "Clean truck interior",
  "Office desk breakdown",
  "Finished room placement",
];

export const companyHighlights = [
  { label: "Service area", value: siteConfig.serviceArea, icon: Building2 },
  { label: "Hours", value: siteConfig.hours, icon: Clock },
  { label: "Contact", value: siteConfig.phone, icon: Truck },
];

export const trustLogos = [
  "Condo Boards",
  "Property Teams",
  "Local Offices",
  "Family Homes",
  "Rental Managers",
  "Retail Spaces",
];

export const includedItems = [
  "Moving blankets",
  "Floor runners",
  "Dollies and straps",
  "Basic wrap",
  "Arrival updates",
  "Crew lead",
];
