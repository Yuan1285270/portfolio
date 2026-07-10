"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const marqueeProjects = [
  { src: "/portfolio/all-en.webp", alt: "ALL-EN e-commerce system" },
  { src: "/portfolio/spendix.webp", alt: "SpendiX personal finance app" },
  { src: "/portfolio/smart-drop.webp", alt: "Smart Drop agriculture app" },
  { src: "/portfolio/ai-travel.webp", alt: "AI travel content writer" },
  { src: "/portfolio/cycle-guardian.webp", alt: "Cycle Guardian safety system" },
  { src: "/portfolio/learn-chinese.webp", alt: "Learn Chinese Together app" },
];

const marqueeJourney = [
  { src: "/portfolio/fintech-event.webp", alt: "AI FinTech hackathon" },
  { src: "/portfolio/ncpc.webp", alt: "National programming contest" },
  { src: "/portfolio/it-month.webp", alt: "IT Month competition" },
  { src: "/portfolio/cycle-showcase.webp", alt: "Cycle Guardian showcase" },
  { src: "/portfolio/yuan-profile.webp", alt: "Tsung-Yuan at Horseshoe Bend" },
];

const capabilities = [
  {
    number: "01",
    name: "Backend Development",
    description:
      "Designing reliable APIs, databases, and business logic with FastAPI, PHP, Python, and MySQL.",
  },
  {
    number: "02",
    name: "AI / ML Integration",
    description:
      "Turning models and LLMs into useful product features—from RAG and clustering to Gemini-powered workflows.",
  },
  {
    number: "03",
    name: "Full-Stack Products",
    description:
      "Building responsive web and mobile experiences with React, TypeScript, Flutter, and pragmatic UX.",
  },
  {
    number: "04",
    name: "Cloud Architecture",
    description:
      "Shipping and operating services on Google Cloud, Render, and modern deployment pipelines.",
  },
  {
    number: "05",
    name: "IoT & Hardware",
    description:
      "Connecting software with Raspberry Pi, sensors, computer vision, and real-world safety systems.",
  },
];

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "ALL-EN",
    description:
      "A full-featured commerce platform with product, order, and customer management plus an AI shopping assistant.",
    highlight: "Complete order and product management",
    tech: ["PHP", "MySQL", "JavaScript"],
    image: "/portfolio/all-en.webp",
    imageAlt: "ALL-EN e-commerce storefront",
    imageWidth: 1600,
    imageHeight: 913,
    github: "https://github.com/Yuan1285270/DatabaseAllin",
  },
  {
    number: "02",
    category: "AI / FinTech",
    title: "SpendiX",
    description:
      "A personal finance product that uses K-Means clustering and AI insights to make spending patterns easier to understand.",
    highlight: "Personalized insights and budget tracking",
    tech: ["FastAPI", "Machine Learning", "Gemini"],
    image: "/portfolio/spendix.webp",
    imageAlt: "SpendiX personal finance identity",
    imageWidth: 1600,
    imageHeight: 903,
    github: "https://github.com/Yuan1285270/AI_Fintech_APIs",
  },
  {
    number: "03",
    category: "Cloud / AgriTech",
    title: "Smart Drop",
    description:
      "An AI-powered crop fertilization assistant that combines conversational guidance with live weather context.",
    highlight: "Built with Google Cloud and Gemini",
    tech: ["FastAPI", "Google Cloud", "Flutter"],
    image: "/portfolio/smart-drop.webp",
    imageAlt: "Smart Drop mobile product concept",
    imageWidth: 1600,
    imageHeight: 896,
    github: "https://github.com/Yuan1285270/Devjam2025",
  },
];

function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const isNearby =
          event.clientX >= rect.left - padding &&
          event.clientX <= rect.right + padding &&
          event.clientY >= rect.top - padding &&
          event.clientY <= rect.bottom + padding;

        if (!isNearby) {
          setActive(false);
          setPosition({ x: 0, y: 0 });
          return;
        }

        setActive(true);
        setPosition({
          x: (event.clientX - (rect.left + rect.width / 2)) / strength,
          y: (event.clientY - (rect.top + rect.height / 2)) / strength,
        });
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [padding, reduceMotion, strength]);

  return (
    <div
      ref={ref}
      className="magnet"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

function ContactButton({ label = "Contact me" }: { label?: string }) {
  return (
    <a className="contact-button" href="mailto:t3good1@gmail.com">
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
    </a>
  );
}

function LiveProjectButton({ href }: { href: string }) {
  return (
    <a
      className="live-project-button"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>View code</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}

function AnimatedCharacter({
  character,
  index,
  length,
  progress,
  reduced,
}: {
  character: string;
  index: number;
  length: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const start = (index / length) * 0.72;
  const end = Math.min(start + 0.28, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const displayed = character === " " ? "\u00a0" : character;

  return (
    <span className="animated-character">
      <span className="animated-character__placeholder">{displayed}</span>
      <motion.span
        className="animated-character__visible"
        style={{ opacity: reduced ? 1 : opacity }}
      >
        {displayed}
      </motion.span>
    </span>
  );
}

function AnimatedText({ text }: { text: string }) {
  const target = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={target} className="about-copy">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((character, index) => (
          <AnimatedCharacter
            key={`${character}-${index}`}
            character={character}
            index={index}
            length={text.length}
            progress={scrollYProgress}
            reduced={Boolean(reduceMotion)}
          />
        ))}
      </span>
    </p>
  );
}

function MarqueeRow({
  items,
  rowRef,
}: {
  items: typeof marqueeProjects;
  rowRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={rowRef} className="marquee-track">
      {[0, 1, 2].flatMap((repeat) =>
        items.map((item, index) => (
          <figure className="marquee-tile" key={`${repeat}-${item.src}`}>
            <img
              src={item.src}
              alt={repeat === 0 ? item.alt : ""}
              width={420}
              height={270}
              loading="lazy"
              decoding="async"
            />
            {repeat === 0 && (
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.alt}
              </figcaption>
            )}
          </figure>
        )),
      )}
    </div>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;
    const updateRows = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const rowOne = rowOneRef.current;
        const rowTwo = rowTwoRef.current;
        if (!section || !rowOne || !rowTwo) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const offset =
          (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        rowOne.style.transform = `translate3d(${offset - 200}px, 0, 0)`;
        rowTwo.style.transform = `translate3d(${-1 * (offset - 200)}px, 0, 0)`;
      });
    };

    updateRows();
    window.addEventListener("scroll", updateRows, { passive: true });
    window.addEventListener("resize", updateRows, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateRows);
      window.removeEventListener("resize", updateRows);
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="marquee-section"
      aria-label="Selected work and competition moments"
    >
      <MarqueeRow items={marqueeProjects} rowRef={rowOneRef} />
      <MarqueeRow items={marqueeJourney} rowRef={rowTwoRef} />
    </section>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <FadeIn className="hero-nav-wrap" y={-20}>
        <nav className="hero-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </FadeIn>

      <div className="hero-heading-wrap">
        <FadeIn delay={0.15} y={40}>
          <h1 id="hero-heading" className="hero-heading hero-title">
            Hi, i&apos;m yuan
          </h1>
        </FadeIn>
      </div>

      <FadeIn className="hero-portrait" delay={0.6} y={30}>
        <Magnet>
          <figure className="hero-portrait-shell">
            <img
              src="/portfolio/yuan-profile.webp"
              alt="Tsung-Yuan Lin at Horseshoe Bend"
              width={1200}
              height={1600}
              fetchPriority="high"
            />
            <div className="hero-portrait-shine" aria-hidden="true" />
            <figcaption>
              <span>Tsung-Yuan Lin</span>
              <span>Taiwan · 2026</span>
            </figcaption>
          </figure>
        </Magnet>
      </FadeIn>

      <div className="hero-bottom">
        <FadeIn className="hero-intro" delay={0.35} y={20}>
          <p>
            A full-stack developer driven by AI, cloud systems, and creative
            problem-solving
          </p>
        </FadeIn>
        <FadeIn className="hero-contact" delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function AboutSection() {
  const aboutText =
    "I'm Tsung-Yuan Lin, a Computer Science student at Feng Chia University with a 3.8/4.3 GPA. I build full-stack products that connect AI, cloud services, and real-world systems, and I completed an exchange program at Temple University. I'm most energized by competitive programming, hackathons, and turning ambitious ideas into reliable products.";

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <FadeIn className="about-decoration about-decoration--moon" delay={0.1} x={-80} y={0} duration={0.9}>
        <img src="/portfolio/deco-moon.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </FadeIn>
      <FadeIn className="about-decoration about-decoration--object" delay={0.25} x={-80} y={0} duration={0.9}>
        <img src="/portfolio/deco-object.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </FadeIn>
      <FadeIn className="about-decoration about-decoration--lego" delay={0.15} x={80} y={0} duration={0.9}>
        <img src="/portfolio/deco-lego.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </FadeIn>
      <FadeIn className="about-decoration about-decoration--group" delay={0.3} x={80} y={0} duration={0.9}>
        <img src="/portfolio/deco-group.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </FadeIn>

      <div className="about-content">
        <FadeIn y={40}>
          <h2 id="about-heading" className="hero-heading section-heading">
            About me
          </h2>
        </FadeIn>

        <AnimatedText text={aboutText} />

        <FadeIn className="about-facts" delay={0.1}>
          <div>
            <strong>3.8 / 4.3</strong>
            <span>Feng Chia GPA</span>
          </div>
          <div>
            <strong>Temple</strong>
            <span>Exchange program</span>
          </div>
          <div>
            <strong>8×</strong>
            <span>Competition milestones</span>
          </div>
        </FadeIn>

        <FadeIn className="about-cta" delay={0.2}>
          <ContactButton label="Start a conversation" />
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <FadeIn>
        <h2 id="services-heading" className="services-heading">
          Capabilities
        </h2>
      </FadeIn>

      <div className="services-list">
        {capabilities.map((capability, index) => (
          <FadeIn key={capability.number} delay={index * 0.1} y={28}>
            <article className="service-item">
              <span className="service-number">{capability.number}</span>
              <div>
                <h3>{capability.name}</h3>
                <p>{capability.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const targetScale = 1 - (projects.length - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const headingId = `project-${project.number}`;

  return (
    <div ref={container} className="project-card-space">
      <motion.article
        className="project-card"
        aria-labelledby={headingId}
        style={{
          scale: reduceMotion ? 1 : scale,
          top: `calc(var(--project-sticky-top) + ${index * 28}px)`,
        }}
      >
        <div className="project-card__top">
          <span className="project-number">{project.number}</span>
          <div className="project-title-block">
            <span>{project.category}</span>
            <h3 id={headingId}>{project.title}</h3>
          </div>
          <LiveProjectButton href={project.github} />
        </div>

        <div className="project-media-grid">
          <div className="project-info-column">
            <div className="project-info-panel project-info-panel--primary">
              <span>Build focus</span>
              <p>{project.description}</p>
            </div>
            <div className="project-info-panel project-info-panel--secondary">
              <span>Impact</span>
              <strong>{project.highlight}</strong>
              <div className="project-tech" aria-label="Technology stack">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>

          <a
            className="project-image-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} repository`}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              decoding="async"
            />
            <span>
              Open repository <ArrowUpRight aria-hidden="true" size={18} />
            </span>
          </a>
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <FadeIn>
        <h2 id="projects-heading" className="hero-heading section-heading projects-heading">
          Project
        </h2>
      </FadeIn>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>

      <footer id="contact" className="contact-footer">
        <FadeIn className="contact-footer__inner" y={40}>
          <p className="contact-kicker">Available for the next ambitious build</p>
          <h2>
            Let&apos;s make
            <br />
            something real.
          </h2>
          <a className="contact-email" href="mailto:t3good1@gmail.com">
            t3good1@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="social-links" aria-label="Social links">
            <a href="https://github.com/Yuan1285270" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tsungyuan0218" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" size={20} /> LinkedIn
            </a>
            <a href="mailto:t3good1@gmail.com">
              <Mail aria-hidden="true" size={20} /> Email
            </a>
          </div>
          <div className="contact-footer__meta">
            <span>Tsung-Yuan Lin · Portfolio 2026</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </FadeIn>
      </footer>
    </section>
  );
}

export function PortfolioLanding() {
  return (
    <main id="top" className="site-wrapper">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
