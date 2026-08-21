import { Fragment, useEffect, useState } from "react";

const navLinks = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#about", "About"],
  ["#team", "Team"],
  ["#testimonials", "Reviews"],
  ["#faq", "FAQ"],
];

const trustStats = [
  ["4,800+", "Happy Patients"],
  ["14 yrs", "Of Excellence"],
  ["98%", "Satisfaction Rate"],
];

const services = [
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

const processSteps = [
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

const pillars = [
  "Pain-free, anxiety-aware treatment protocols",
  "No hidden fees - full cost clarity before you begin",
  "State-of-the-art sterilisation and safety standards",
  "Family-friendly care from age 3 to 93",
];

const team = [
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

const testimonials = [
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

const techItems = [
  ["Digital OPG & CBCT X-ray", "3D imaging for precision diagnosis"],
  ["Intraoral Cameras", "See exactly what we see, in real time"],
  ["Laser Dentistry", "Less pain, faster healing, no stitches"],
  ["CAD/CAM Same-Day Crowns", "No temporary crowns, no second visit"],
  ["Digital Impressions", "No more messy putty moulds"],
];

const faqs = [
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

const serviceOptions = services.map((service) => service.title);

function Logo() {
  return (
    <a href="#home" className="nav__logo">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 2C10 2 6 5.5 6 10c0 2 .6 3.8 1.5 5.2C9 17.5 9.5 20 9.5 22.5c0 1.5.7 2.5 2 2.5h5c1.3 0 2-1 2-2.5 0-2.5.5-5 2-7.3C21.4 13.8 22 12 22 10c0-4.5-4-8-8-8z"
          fill="#1AAFA0"
        />
      </svg>
      <span>PureSmile</span>
    </a>
  );
}

function ServiceIcon({ bg, color }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill={bg} />
      <path
        d="M16 20c0-4 3.6-8 8-8s8 4 8 8c0 2-.5 4-1.5 5.5C29 28 29 32 29 34c0 2-1 3-2.5 3h-5c-1.5 0-2.5-1-2.5-3 0-2 0-6-1.5-8.5C16.5 24 16 22 16 20z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="#1AAFA0" strokeWidth="1.5" />
      <path
        d="M7 10l2 2 4-4"
        stroke="#1AAFA0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="faq-icon" aria-hidden="true">
      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon({ stroke = "white" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
      <path
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Header({ isScrolled, isMenuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <>
      <header className={`nav${isScrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav__inner">
          <Logo />
          <nav className="nav__links">
            {navLinks.map(([href, label]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a href="#contact" className="nav__cta">
              Book Appointment
            </a>
          </nav>
          <button className="nav__burger" type="button" aria-label="Menu" onClick={onToggleMenu}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${isMenuOpen ? " open" : ""}`} id="mobileMenu">
        {navLinks.map(([href, label]) => (
          <a href={href} key={href} onClick={onCloseMenu}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={onCloseMenu} className="mobile-menu__cta">
          Book Appointment
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-shapes">
        <div className="shape shape--1" />
        <div className="shape shape--2" />
      </div>
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__eyebrow">Gujrat's Premier Dental Care</span>
          <h1 className="hero__headline">
            A smile that
            <br />
            <em>lasts a lifetime.</em>
          </h1>
          <p className="hero__sub">
            We combine advanced technology with gentle, patient-first care so every visit feels
            less like a clinic and more like a fresh start.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Book Free Consultation
            </a>
            <a href="#services" className="btn btn--ghost">
              Explore Services
            </a>
          </div>
          <div className="hero__trust">
            {trustStats.map(([value, label], index) => (
              <Fragment key={label}>
                {index > 0 && <div className="trust-divider" />}
                <div className="trust-item">
                  <span className="trust-item__num">{value}</span>
                  <span className="trust-item__label">{label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="tooth-frame">
            <svg className="tooth-svg" viewBox="0 0 340 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="toothClip">
                  <path d="M170 8C120 8 60 55 60 110c0 28 10 52 22 72 18 28 22 68 22 98 0 28 12 50 30 62 10 6 20 8 30 8 8 0 18-2 26-8 6-4 12-10 16-18 4 8 10 14 16 18 8 6 18 8 26 8 10 0 20-2 30-8 18-12 30-34 30-62 0-30 4-70 22-98 12-20 22-44 22-72C312 55 220 8 170 8z" />
                </clipPath>
              </defs>
              <image
                href="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=340&h=400&fit=crop&crop=face"
                width="340"
                height="400"
                clipPath="url(#toothClip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <path
                d="M170 8C120 8 60 55 60 110c0 28 10 52 22 72 18 28 22 68 22 98 0 28 12 50 30 62 10 6 20 8 30 8 8 0 18-2 26-8 6-4 12-10 16-18 4 8 10 14 16 18 8 6 18 8 26 8 10 0 20-2 30-8 18-12 30-34 30-62 0-30 4-70 22-98 12-20 22-44 22-72C312 55 220 8 170 8z"
                fill="none"
                stroke="#1AAFA0"
                strokeWidth="3"
                opacity="0.6"
              />
            </svg>
            <div className="tooth-badge">
              <CheckIcon />
              ISO Certified Clinic
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub, light = false }) {
  return (
    <div className={`section-header${light ? " section-header--light" : ""}`}>
      <span className={`section-eyebrow${light ? " section-eyebrow--light" : ""}`}>
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

function Announcement() {
  return (
    <div className="announce">
      <div className="announce__inner">
        <span>New Patient Special: Free teeth whitening consultation with any first visit -</span>
        <a href="#contact">Claim Now</a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What We Offer"
          title="Complete care, under one roof"
          sub="From routine cleanings to full smile transformations, every treatment is delivered with precision and care."
        />
        <div className="services__grid">
          {services.map((service) => (
            <div
              className={`service-card${service.featured ? " service-card--featured" : ""}`}
              key={service.title}
            >
              <div className="service-card__icon">
                <ServiceIcon bg={service.bg} color={service.color} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" className="service-card__link">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <SectionHeader eyebrow="Your Journey" title="Simple steps to a healthier smile" />
        <div className="process__steps">
          {processSteps.map((step, index) => (
            <div
              className={`process-step${index === processSteps.length - 1 ? " process-step--last" : ""}`}
              key={step.title}
            >
              <div className={`process-step__dot${step.accent ? " process-step__dot--accent" : ""}`}>
                <CalendarIcon />
              </div>
              {index < processSteps.length - 1 && <div className="process-step__line" />}
              <div className="process-step__content">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=520&h=600&fit=crop"
                alt="Modern dental clinic interior"
                loading="lazy"
              />
              <div className="about__stat-badge">
                <span className="about__stat-num">14</span>
                <span className="about__stat-label">
                  Years of
                  <br />
                  trusted care
                </span>
              </div>
            </div>
            <div className="about__secondary-img">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffbb7e9f99e?w=240&h=200&fit=crop"
                alt="Dental equipment"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about__text">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title">
              Built on trust.
              <br />
              Driven by science.
            </h2>
            <p>
              PureSmile was founded in 2010 with a single idea: dental care should not feel
              intimidating. Our clinic is calming, clean, and transparent, so every patient
              understands what is happening and why.
            </p>
            <p>
              We invest in the latest technology, from digital impressions to laser-assisted
              procedures, because your time and comfort matter as much as your outcome.
            </p>
            <ul className="about__pillars">
              {pillars.map((pillar) => (
                <li key={pillar}>
                  <CheckIcon />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--primary">
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <SectionHeader
          eyebrow="The Experts"
          title="Faces behind your smile"
          sub="Our team of certified specialists brings decades of combined experience and a genuine love for what they do."
        />
        <div className="team__grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-card__img">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-card__social">
                  <a href="#" aria-label={`${member.name} LinkedIn`}>
                    in
                  </a>
                </div>
              </div>
              <div className="team-card__info">
                <h4>{member.name}</h4>
                <span className="team-card__role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <SectionHeader eyebrow="Patient Reviews" title="Words from real patients" light />
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <div className={`testi-card${item.accent ? " testi-card--accent" : ""}`} key={item.name}>
              <div className="testi-card__stars" aria-label="5 stars">
                *****
              </div>
              <blockquote>"{item.quote}"</blockquote>
              <div className="testi-card__author">
                <div className="testi-card__avatar">{item.initials}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials__rating">
          <div className="rating-badge">
            <span className="rating-badge__num">4.9</span>
            <div>
              <div className="rating-badge__stars">*****</div>
              <span>Based on 620+ Google reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="technology">
      <div className="container">
        <div className="tech__grid">
          <div className="tech__text">
            <span className="section-eyebrow">Our Equipment</span>
            <h2 className="section-title">
              Advanced tech.
              <br />
              Gentle hands.
            </h2>
            <p>
              We continuously upgrade our equipment so you benefit from the same tools used in
              leading dental institutions right here in Gujrat.
            </p>
            <ul className="tech__list">
              {techItems.map(([name, detail]) => (
                <li key={name}>
                  <span>{name}</span> - {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="tech__visual">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=540&h=460&fit=crop"
              alt="Modern dental equipment"
              loading="lazy"
            />
            <div className="tech__badge">
              <CheckIcon />
              ISO 9001 Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <SectionHeader eyebrow="FAQ" title="Questions we hear every day" />
        <div className="faq__grid">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={question}>
                <button
                  className="faq-item__q"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {question}
                  <ChevronIcon />
                </button>
                <div className="faq-item__a">
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const minDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title">Your next appointment starts here</h2>
            <p>
              Fill out the form and our team will confirm within 2 hours during clinic hours.
              Emergency? Call us directly.
            </p>
            <div className="contact__details">
              {[
                ["Address", "Civil Hospital Road, Gujrat, Punjab, Pakistan"],
                ["Phone", "+92 53 123 4567"],
                ["Hours", "Mon - Sat: 9:00 AM - 8:00 PM"],
              ].map(([label, value]) => (
                <div className="contact-detail" key={label}>
                  <div className="contact-detail__icon">
                    <CheckIcon />
                  </div>
                  <div>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__form-wrap">
            {!submitted ? (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3>Book an Appointment</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" placeholder="Umer" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder="Zubair" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="umer@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="+92 300 0000000" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" required defaultValue="">
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" min={minDate} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Notes (optional)</label>
                  <textarea id="message" rows="3" placeholder="Any concerns or special requirements" />
                </div>
                <button className="btn btn--primary btn--full" type="submit">
                  Confirm Appointment Request
                </button>
                <p className="form-disclaimer">We'll confirm within 2 hours. No commitment required</p>
              </form>
            ) : (
              <div className="form-success">
                <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#D6F0EA" />
                  <path
                    d="M20 32l8 8 16-16"
                    stroke="#1AAFA0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3>Appointment Requested!</h3>
                <p>We'll call you within 2 hours to confirm your slot. See you soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    [
      "Services",
      [
        ["General Dentistry", "#services"],
        ["Cosmetic Dentistry", "#services"],
        ["Dental Implants", "#services"],
        ["Orthodontics", "#services"],
        ["Teeth Whitening", "#services"],
      ],
    ],
    [
      "Clinic",
      [
        ["About Us", "#about"],
        ["Our Team", "#team"],
        ["Patient Reviews", "#testimonials"],
        ["FAQ", "#faq"],
        ["Contact", "#contact"],
      ],
    ],
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>Gujrat's most trusted dental clinic, delivering gentle expert care since 2010.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="WhatsApp">wa</a>
            </div>
          </div>
          <div className="footer__links">
            {columns.map(([title, links]) => (
              <div className="footer__col" key={title}>
                <h5>{title}</h5>
                {links.map(([label, href]) => (
                  <a href={href} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            ))}
            <div className="footer__col">
              <h5>Contact</h5>
              <span>
                Civil Hospital Road,
                <br />
                Gujrat, Punjab
              </span>
              <a href="tel:+925312345">+92 53 123 4567</a>
              <a href="mailto:hello@puresmile.pk">hello@puresmile.pk</a>
              <span>Mon - Sat: 9AM - 8PM</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>Copyright 2025 PureSmile Dental Clinic. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingCta({ visible }) {
  return (
    <a href="#contact" className={`floating-cta${visible ? " visible" : ""}`}>
      <CalendarIcon />
      Book Now
    </a>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowFloatingCta(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fadeEls = Array.from(
      document.querySelectorAll(
        ".service-card, .team-card, .testi-card, .process-step, " +
          ".tech__text, .tech__visual, .about__grid > *, " +
          ".contact__info, .contact__form-wrap, .faq-item",
      ),
    );

    fadeEls.forEach((el) => el.classList.add("fade-up"));

    if (!("IntersectionObserver" in window)) {
      fadeEls.forEach((el) => el.classList.add("in-view"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          window.setTimeout(() => {
            entry.target.classList.add("in-view");
          }, 80 * (fadeEls.indexOf(entry.target) % 6));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
      <Hero />
      <Announcement />
      <Services />
      <Process />
      <About />
      <Team />
      <Testimonials />
      <Technology />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCta visible={showFloatingCta} />
    </>
  );
}
