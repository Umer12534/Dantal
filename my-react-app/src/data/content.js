// ─── Navigation ───────────────────────────────────────────────
export const navLinks = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#about", "About"],
  ["#team", "Team"],
  ["#testimonials", "Reviews"],
  ["#faq", "FAQ"],
];

// ─── Hero ──────────────────────────────────────────────────────
export const trustStats = [
  ["4,800+", "Happy Patients"],
  ["14 yrs", "Of Excellence"],
  ["98%", "Satisfaction Rate"],
];

// ─── Services ─────────────────────────────────────────────────
export const services = [
  {
    title: "General Dentistry",
    text: "Routine exams, professional cleanings, fillings, and preventive care to keep your smile healthy year-round.",
    featured: true,
    color: "#1AAFA0",
    bg: "#D6F0EA",
  },
  {
    title: "Cosmetic Dentistry",
    text: "Veneers, whitening, bonding, and smile design crafted to give you the confidence to show your teeth.",
    color: "#F26B5B",
    bg: "#FEE9E6",
  },
  {
    title: "Dental Implants",
    text: "Permanent, natural-looking tooth replacement. Restore function and aesthetics with titanium-grade precision.",
    color: "#2563EB",
    bg: "#E8EEF8",
  },
  {
    title: "Orthodontics",
    text: "Traditional braces and clear aligners for teens and adults. Straight teeth at any age.",
    color: "#1AAFA0",
    bg: "#D6F0EA",
  },
  {
    title: "Teeth Whitening",
    text: "Professional in-chair and take-home whitening systems. Up to 8 shades brighter in a single session.",
    color: "#F59E0B",
    bg: "#FFF3CD",
  },
  {
    title: "Root Canal Therapy",
    text: "Pain-free endodontic treatment with modern rotary systems. Save your natural tooth with less downtime.",
    color: "#9333EA",
    bg: "#F3E8FF",
  },
  {
    title: "Pediatric Dentistry",
    text: "A child-friendly environment built to ease anxiety and make first dental visits positive.",
    color: "#F26B5B",
    bg: "#FEE9E6",
  },
  {
    title: "Emergency Dental",
    text: "Same-day appointments for toothache, broken teeth, lost fillings, and dental trauma.",
    color: "#2563EB",
    bg: "#E8EEF8",
  },
];

export const serviceOptions = services.map((service) => service.title);

// ─── Process ──────────────────────────────────────────────────
export const processSteps = [
  {
    title: "Book Online or Call",
    text: "Choose a time that works for you. We offer morning, evening, and weekend slots with clear scheduling.",
  },
  {
    title: "Comprehensive Exam",
    text: "Digital X-rays, full oral health assessment, and an honest conversation about your treatment options.",
  },
  {
    title: "Personalised Treatment Plan",
    text: "Your dentist explains every option clearly, with a plan tailored to your goals and budget.",
  },
  {
    title: "Leave with a Smile",
    text: "Walk out feeling confident. We schedule your follow-up care and send aftercare reminders.",
    accent: true,
  },
];

// ─── About ────────────────────────────────────────────────────
export const pillars = [
  "Pain-free, anxiety-aware treatment protocols",
  "No hidden fees - full cost clarity before you begin",
  "State-of-the-art sterilisation and safety standards",
  "Family-friendly care from age 3 to 93",
];

// ─── Team ─────────────────────────────────────────────────────
export const team = [
  {
    name: "Dr. Ayesha Malik",
    role: "Principal Dentist & Cosmetic Specialist",
    bio: "BDS, FCPS - 12 years of practice - Trained in London & Dubai",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=340&fit=crop&crop=face",
  },
  {
    name: "Dr. Hassan Raza",
    role: "Orthodontist & Implant Surgeon",
    bio: "BDS, MSc Orthodontics - 10 years - Fellowship in Implantology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=340&fit=crop&crop=face",
  },
  {
    name: "Dr. Sana Tariq",
    role: "Pediatric Dentist",
    bio: "BDS, MCPS Pediatric Dentistry - 8 years - Child anxiety specialist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=340&fit=crop&crop=face",
  },
];

// ─── Testimonials ─────────────────────────────────────────────
export const testimonials = [
  {
    name: "Sadia Rehman",
    label: "Cosmetic Veneers Patient",
    initials: "SR",
    quote:
      "I've had dental anxiety my whole life. Dr. Ayesha was the first dentist who actually listened. The whole experience felt calm and controlled, and my veneers look absolutely unreal.",
  },
  {
    name: "Tariq Ahmed",
    label: "Parent - Pediatric Patient",
    initials: "TA",
    quote:
      "Brought my 5-year-old for the first time and she actually asked to come back. The team made it a game. Dr. Sana is incredible with kids.",
    accent: true,
  },
  {
    name: "Mohammad Khan",
    label: "Dental Implant Patient",
    initials: "MK",
    quote:
      "Got two implants done. Zero pain during the procedure. Recovery was faster than I expected. I eat normally now, something I couldn't do for years.",
  },
];

// ─── Technology ───────────────────────────────────────────────
export const techItems = [
  ["Digital OPG & CBCT X-ray", "3D imaging for precision diagnosis"],
  ["Intraoral Cameras", "See exactly what we see, in real time"],
  ["Laser Dentistry", "Less pain, faster healing, no stitches"],
  ["CAD/CAM Same-Day Crowns", "No temporary crowns, no second visit"],
  ["Digital Impressions", "No more messy putty moulds"],
];

// ─── FAQ ──────────────────────────────────────────────────────
export const faqs = [
  [
    "Does dental treatment hurt?",
    "Modern dentistry is far more comfortable than most people expect. We use fine local anaesthetics and offer sedation options for anxious patients.",
  ],
  [
    "How often should I visit the dentist?",
    "We recommend a check-up and cleaning every 6 months for most patients. Some conditions may require more frequent visits.",
  ],
  [
    "What age should my child first visit?",
    "We recommend bringing children in as soon as their first tooth appears, or by age 1 at the latest.",
  ],
  [
    "How long do dental implants last?",
    "With proper care, dental implants can last a lifetime. The crown may need replacement after 15 to 20 years depending on wear.",
  ],
  [
    "Do you accept insurance or payment plans?",
    "Yes. We work with most major insurance providers and offer flexible instalment plans for larger treatments.",
  ],
  [
    "Is teeth whitening safe?",
    "Professional whitening performed in a clinical setting is safe and more controlled than over-the-counter kits.",
  ],
];
