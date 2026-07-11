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
  ChevronLeft,
  ChevronRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Pause,
  Play,
  Trophy,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const momentRowOne = [
  {
    src: "/portfolio/moments/fintech-team.jpg",
    alt: "SpendiX team at the Hack to the Top AI FinTech Innovation Hackathon",
    label: "AI FinTech · 2025",
  },
  {
    src: "/portfolio/moments/it-month-team.jpg",
    alt: "Team at the 2024 IT Month Information Application Skills Competition",
    label: "IT Month · 2024",
  },
  {
    src: "/portfolio/moments-v2/nantou-group.jpg",
    alt: "AI Travel Writer team at the Mountain City Digital Hackathon",
    label: "Mountain City · 2024",
  },
  {
    src: "/portfolio/moments-v2/cross-team.jpg",
    alt: "Cycle Guardian team at the Cross-Strait Youth Maker Competition",
    label: "Cycle Guardian · 2024",
  },
  {
    src: "/portfolio/moments-v2/cycle-demo-team.jpg",
    alt: "Cycle Guardian team presenting its prototype, poster, and software demo",
    label: "Prototype showcase · 2024",
  },
];

const momentRowTwo = [
  {
    src: "/portfolio/moments-v2/cross-candid.jpg",
    alt: "Cycle Guardian teammates building together at the maker competition",
    label: "Maker candid · 2024",
  },
  {
    src: "/portfolio/moments-v2/tcse-group.jpg",
    alt: "Tsung-Yuan with faculty after presenting at TCSE 2026",
    label: "TCSE · 2026",
  },
  {
    src: "/portfolio/moments-v2/sparkful-fun.jpg",
    alt: "A candid team moment at the Sparkful activity",
    label: "Sparkful · Team life",
  },
  {
    src: "/portfolio/moments-v2/exchange-scholarship.jpg",
    alt: "Tsung-Yuan receiving an overseas study scholarship",
    label: "Study abroad scholarship",
  },
  {
    src: "/portfolio/moments-v2/ncpc-team.jpg",
    alt: "Tsung-Yuan and teammates at the NCPC national programming final",
    label: "NCPC · 2024",
  },
];

const showreels = [
  {
    title: "OwlHacks 2025",
    eyebrow: "Philadelphia · Hackathon",
    duration: "00:28",
    src: "/portfolio/showreels/owlhacks-2025.mp4",
    poster: "/portfolio/showreels/owlhacks-2025.jpg",
    description: "Build moments, whiteboard work, and the live event at Temple University's OwlHacks.",
  },
  {
    title: "Hack to the Top",
    eyebrow: "AI FinTech · Finalist",
    duration: "00:17",
    src: "/portfolio/showreels/ai-fintech-2025.mp4",
    poster: "/portfolio/showreels/ai-fintech-2025.jpg",
    description: "A tighter cut of the team, SpendiX concept, live event, and coding sessions.",
  },
  {
    title: "Cross-Strait Maker",
    eyebrow: "Cycle Guardian · 3rd Tier Prize",
    duration: "00:23",
    src: "/portfolio/showreels/cross-strait-maker-2024.mp4",
    poster: "/portfolio/showreels/cross-strait-maker-2024.jpg",
    description: "Prototype, team, and venue moments from the maker competition.",
  },
  {
    title: "Mountain City Hackathon",
    eyebrow: "Nantou · Bronze Medal",
    duration: "00:15",
    src: "/portfolio/showreels/nantou-hackathon-2024.mp4",
    poster: "/portfolio/showreels/nantou-hackathon-2024.jpg",
    description: "Only the hackathon: award, venue, team, and the AI Travel Content Writer prototype.",
  },
  {
    title: "NCPC 2024",
    eyebrow: "National Finalist",
    duration: "00:20",
    src: "/portfolio/showreels/ncpc-2024.mp4",
    poster: "/portfolio/showreels/ncpc-2024.jpg",
    description: "A short walk through Taiwan's national collegiate programming final.",
  },
  {
    title: "TCSE 2026",
    eyebrow: "English Oral Presentation",
    duration: "00:47",
    src: "/portfolio/showreels/tcse-2026.mp4",
    poster: "/portfolio/showreels/tcse-2026.jpg",
    description: "The complete original cut of the research presentation on coordinated social-media behavior detection.",
  },
  {
    title: "American Life",
    eyebrow: "Temple University · Exchange",
    duration: "02:30",
    src: "/portfolio/showreels/american-life-2025.mp4",
    poster: "/portfolio/showreels/american-life-2025.jpg",
    description: "The first 150 seconds of the original exchange-life film, cropped to its central portrait frame.",
  },
  {
    title: "Learn Chinese Together",
    eyebrow: "App Demo",
    duration: "00:38",
    src: "/portfolio/showreels/learn-chinese-together.mp4",
    poster: "/portfolio/showreels/learn-chinese-together.jpg",
    description: "A compact walkthrough of the interactive language-learning app.",
  },
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
      "Building responsive web products with React, TypeScript, and pragmatic UX.",
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

const awards = [
  {
    year: "2025",
    rank: "2nd Place · Health ML Track",
    title: "OwlHacks 2025",
    location: "Philadelphia, USA",
    detail: "Next Frontier Health ML track · Task Cleaner",
  },
  {
    year: "2025",
    rank: "Finalist",
    title: "Hack to the Top — AI FinTech Innovation Hackathon",
    location: "Taiwan",
    detail: "SpendiX · AI-powered personal finance",
  },
  {
    year: "2025",
    rank: "Participant",
    title: "DevJam TW 2025",
    location: "Taiwan",
    detail: "Smart Drop · AI crop fertilization assistant",
  },
  {
    year: "2024",
    rank: "Outstanding Award",
    title: "IT Month Information Application Skills Competition",
    location: "Taichung",
    detail: "Individual division · C/C++",
  },
  {
    year: "2024",
    rank: "2nd Place",
    title: "IT Month Information Application Skills Competition",
    location: "Taichung",
    detail: "Team division",
  },
  {
    year: "2024",
    rank: "Finalist",
    title: "National College Programming Contest (NCPC)",
    location: "Taiwan",
    detail: "National collegiate programming finals",
  },
  {
    year: "2024",
    rank: "Bronze Medal",
    title: "Mountain City Digital Hackathon",
    location: "Nantou, Taiwan",
    detail: "AI Travel Content Writer · Nantou tourism",
    proof:
      "https://www.iecs.fcu.edu.tw/news/%E5%8A%89%E6%98%8E%E6%A9%9F%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%90%8C%E5%AD%B8%E7%8D%B2%E5%B1%B1%E5%9F%8E%E6%95%B8%E4%BD%8D%E9%BB%91%E5%AE%A2%E6%9D%BE%E9%8A%85%E7%8D%8E/",
    proofLabel: "School article",
  },
  {
    year: "2024",
    rank: "3rd Tier Prize",
    title: "Cross-Strait Youth Maker Competition",
    location: "China",
    detail: "Cycle Guardian · smart bicycle safety system",
    proof:
      "https://www.iecs.fcu.edu.tw/news/%E9%83%AD%E5%B4%87%E9%9F%8B%E8%80%81%E5%B8%AB%E6%8C%87%E5%B0%8E%E5%AD%B8%E7%94%9F%E7%8D%B22024%E6%B5%B7%E5%B3%BD%E5%85%A9%E5%B2%B8%E9%9D%92%E5%B0%91%E5%B9%B4%E5%89%B5%E5%AE%A2%E5%A4%A7%E8%B3%BD%E7%8D%B2%E5%8F%83%E7%AD%89%E7%8D%8E/",
    proofLabel: "School article",
  },
];

const awardEvidence = [
  {
    year: "2025",
    title: "OwlHacks · 2nd Place",
    category: "International hackathon",
    image: "/portfolio/awards/owl-hacks-2025.png",
    imageAlt: "OwlHacks 2025 second place certificate",
    width: 1489,
    height: 2105,
    href: "/certificates/owl-hacks-2025-second-place.pdf",
  },
  {
    year: "2025",
    title: "AI FinTech · Finalist",
    category: "Finalist certificate",
    image: "/portfolio/awards/ai-fintech-finalist.jpg",
    imageAlt: "Hack to the Top AI FinTech finalist certificate",
    width: 1241,
    height: 1754,
    href: "/portfolio/awards/ai-fintech-finalist.jpg",
  },
  {
    year: "2025",
    title: "DevJam TW",
    category: "Community milestone",
    image: "/portfolio/awards/devjam-2025.webp",
    imageAlt: "DevJam TW 2025 participation certificate",
    width: 2248,
    height: 1590,
    href: "/certificates/devjam-tw-2025.pdf",
  },
  {
    year: "2024",
    title: "Mountain City · Bronze",
    category: "Bronze certificate",
    image: "/portfolio/awards/mountain-city-bronze.jpg",
    imageAlt: "Mountain City Digital Hackathon bronze certificate",
    width: 1400,
    height: 2026,
    href: "/portfolio/awards/mountain-city-bronze.jpg",
  },
  {
    year: "2024",
    title: "IT Month · Outstanding Award",
    category: "Award certificate",
    image: "/portfolio/awards/it-month-outstanding.jpg",
    imageAlt: "IT Month individual outstanding award certificate",
    width: 1400,
    height: 2096,
    href: "/portfolio/awards/it-month-outstanding.jpg",
  },
  {
    year: "2025",
    title: "Temple · Global Exchange",
    category: "Academic milestone",
    image: "/portfolio/awards/temple-exchange.jpg",
    imageAlt: "Temple University global exchange completion certificate",
    width: 1400,
    height: 1034,
    href: "/certificates/temple-exchange-fall-2025.pdf",
  },
  {
    year: "2024",
    title: "IELTS Academic · C1",
    category: "English proficiency record",
    image: "/portfolio/awards/ielts-c1.jpg",
    imageAlt: "Redacted IELTS Academic test report showing overall band 7.0 and CEFR C1",
    width: 1200,
    height: 1720,
    href: "/portfolio/awards/ielts-c1.jpg",
  },
];

const awardEvidenceGroups = [
  {
    id: "portrait",
    label: "Portrait certificates",
    items: awardEvidence.filter((evidence) => evidence.height > evidence.width),
  },
  {
    id: "landscape",
    label: "Landscape records",
    items: awardEvidence.filter((evidence) => evidence.width >= evidence.height),
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
    image: "/portfolio/originals/all-en.png",
    imageAlt: "ALL-EN e-commerce storefront",
    imageWidth: 2046,
    imageHeight: 1168,
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
    image: "/portfolio/originals/spendix.jpg",
    imageAlt: "SpendiX personal finance identity",
    imageWidth: 2048,
    imageHeight: 1156,
    github: "https://github.com/Yuan1285270/AI_Fintech_APIs",
  },
  {
    number: "03",
    category: "Cloud / AgriTech",
    title: "Smart Drop",
    description:
      "An AI-powered crop fertilization assistant that combines conversational guidance with live weather context.",
    highlight: "Built with Google Cloud and Gemini",
    tech: ["FastAPI", "Google Cloud", "Gemini", "OpenWeather API"],
    image: "/portfolio/originals/smart-drop.jpg",
    imageAlt: "Smart Drop mobile product concept",
    imageWidth: 2048,
    imageHeight: 1147,
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

function MarqueeBand({
  items,
  duration,
  reverse = false,
  paused,
}: {
  items: typeof momentRowOne;
  duration: number;
  reverse?: boolean;
  paused: boolean;
}) {
  return (
    <div className="marquee-viewport">
      <div
        className={`marquee-track${reverse ? " marquee-track--reverse" : ""}${paused ? " is-paused" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {[0, 1].map((repeat) => (
          <div
            className="marquee-group"
            key={repeat}
            aria-hidden={repeat === 1 ? "true" : undefined}
          >
            {items.map((item, index) => (
              <figure className="marquee-tile" key={`${repeat}-${item.src}`}>
                <img
                  src={item.src}
                  alt={repeat === 0 ? item.alt : ""}
                  width={1400}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
                {repeat === 0 && (
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MarqueeSection() {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const isPaused = paused || Boolean(reduceMotion);

  return (
    <section
      className="marquee-section"
      aria-labelledby="moments-heading"
    >
      <div className="marquee-header">
        <div>
          <p>People, teams, and places</p>
          <h2 id="moments-heading">Selected moments</h2>
        </div>
        <button
          type="button"
          className="marquee-toggle"
          aria-pressed={isPaused}
          onClick={() => setPaused((current) => !current)}
          disabled={Boolean(reduceMotion)}
        >
          {isPaused ? <Play aria-hidden="true" size={16} /> : <Pause aria-hidden="true" size={16} />}
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
      <MarqueeBand items={momentRowOne} duration={15} paused={isPaused} />
      <MarqueeBand items={momentRowTwo} duration={13} reverse paused={isPaused} />
    </section>
  );
}

function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const wrap = (index: number) =>
    (index + showreels.length) % showreels.length;
  const go = (delta: number) =>
    setActiveIndex((current) => wrap(current + delta));
  const visibleSlides = [
    { index: wrap(activeIndex - 1), slot: "previous" as const },
    { index: activeIndex, slot: "active" as const },
    { index: wrap(activeIndex + 1), slot: "next" as const },
  ];

  return (
    <section id="films" className="video-section" aria-labelledby="films-heading">
      <FadeIn className="video-header">
        <div>
          <p>Activity films · edited stories</p>
          <h2 id="films-heading" className="hero-heading">
            Short stories
          </h2>
        </div>
        <p>
          Each reel combines files from the same activity. Sound starts on—press
          play, then swipe, drag, or use the arrows to move between them.
        </p>
      </FadeIn>

      <motion.div
        className="video-stage"
        role="region"
        aria-roledescription="carousel"
        aria-label="Activity video carousel"
        tabIndex={0}
        drag={reduceMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (info.offset.x < -64 || info.velocity.x < -550) go(1);
          if (info.offset.x > 64 || info.velocity.x > 550) go(-1);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(1);
          }
          if (event.key === "Home") {
            event.preventDefault();
            setActiveIndex(0);
          }
          if (event.key === "End") {
            event.preventDefault();
            setActiveIndex(showreels.length - 1);
          }
        }}
      >
        {visibleSlides.map(({ index, slot }) => {
          const reel = showreels[index];
          const className = `video-card video-card--${slot}`;

          if (slot !== "active") {
            return (
              <button
                type="button"
                className={className}
                key={`${reel.src}-${slot}`}
                onClick={() => go(slot === "previous" ? -1 : 1)}
                aria-label={`${slot === "previous" ? "Previous" : "Next"} video: ${reel.title}`}
              >
                <img src={reel.poster} alt="" width={720} height={1280} loading="lazy" />
                <span className="video-card__shade" aria-hidden="true" />
                <span className="video-card__side-copy">
                  <span>{reel.duration}</span>
                  <strong>{reel.title}</strong>
                </span>
              </button>
            );
          }

          return (
            <article
              className={className}
              key={`${reel.src}-${slot}`}
              aria-label={`${index + 1} of ${showreels.length} — ${reel.title}`}
            >
              <video
                key={reel.src}
                src={reel.src}
                poster={reel.poster}
                loop
                controls
                playsInline
                preload="metadata"
                aria-label={`${reel.title} video — sound on`}
                onPointerDown={(event) => event.stopPropagation()}
              />
              <span className="video-card__shade" aria-hidden="true" />
              <div className="video-card__copy">
                <span>{reel.eyebrow}</span>
                <h3>{reel.title}</h3>
                <p>{reel.description}</p>
              </div>
              <span className="video-card__duration">{reel.duration}</span>
            </article>
          );
        })}
      </motion.div>

      <div className="video-controls">
        <button type="button" onClick={() => go(-1)} aria-label="Previous activity video">
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="video-dots" aria-label="Choose an activity video">
          {showreels.map((reel, index) => (
            <button
              type="button"
              key={reel.src}
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Show ${reel.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next activity video">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <p className="video-status" aria-live="polite">
        {String(activeIndex + 1).padStart(2, "0")} / {String(showreels.length).padStart(2, "0")} · {showreels[activeIndex].title}
      </p>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <FadeIn className="hero-nav-wrap" y={-20}>
        <nav className="hero-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#films">Films</a>
          <a href="#awards">Awards</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </FadeIn>

      <div className="hero-heading-wrap">
        <FadeIn delay={0.15} y={40}>
          <h1 id="hero-heading" className="hero-heading hero-title">
            Hi, I&apos;m Yuan
          </h1>
        </FadeIn>
      </div>

      <FadeIn className="hero-portrait" delay={0.6} y={30}>
        <Magnet>
          <figure className="hero-portrait-shell">
            <img
              src="/portfolio/originals/yuan-steak.jpg"
              alt="Tsung-Yuan Lin enjoying a steak dinner during his exchange in Philadelphia"
              width={1200}
              height={1600}
              fetchPriority="high"
            />
            <div className="hero-portrait-shine" aria-hidden="true" />
            <figcaption>
              <span>Tsung-Yuan Lin</span>
              <span>Philadelphia · 2025</span>
            </figcaption>
          </figure>
        </Magnet>
      </FadeIn>

      <div className="hero-bottom">
        <FadeIn className="hero-intro" delay={0.35} y={20}>
          <p>
            <span>CS Student + AI &amp;</span>
            <br />
            <span>Full-Stack Developer</span>
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
    "I'm Tsung-Yuan Lin, a CS student at Feng Chia University and an AI & Full-Stack Developer. I completed a Fall 2025 exchange at Temple University and joined the AI team at Concord System Management Corp. as a Software Development Intern in July 2026. I focus on AI-enabled products, backend systems, and full-stack development.";

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
            <strong>3.91 / 4.3</strong>
            <span>Feng Chia GPA</span>
          </div>
          <div>
            <strong>3.93 / 4.0</strong>
            <span>Temple GPA</span>
          </div>
          <div>
            <strong>C1</strong>
            <span>English</span>
          </div>
          <div>
            <strong>8×</strong>
            <span>Competition milestones</span>
          </div>
        </FadeIn>

        <FadeIn className="current-role" delay={0.16} y={20}>
          <span>Current role</span>
          <div>
            <h3>Software Development Intern</h3>
            <p>
              <a href="https://www.econcord.com.tw/" target="_blank" rel="noreferrer">
                Concord System Management Corp.
              </a>{" "}
              · AI Team · Jul 2026–Present
            </p>
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

function AwardsSection() {
  return (
    <section id="awards" className="awards-section" aria-labelledby="awards-heading">
      <div className="awards-shell">
        <div className="awards-header">
          <FadeIn>
            <p className="awards-kicker">
              <Trophy aria-hidden="true" size={18} /> Recognition · 2024—2025
            </p>
            <h2 id="awards-heading" className="hero-heading awards-heading">
              Awards
            </h2>
          </FadeIn>

          <FadeIn className="awards-intro" delay={0.1} y={24}>
            <p>
              From national programming contests in Taiwan to an international
              machine-learning hackathon in the United States, each result marks
              a different kind of problem solved under pressure.
            </p>
            <div className="awards-stats" aria-label="Award highlights">
              <div>
                <strong>5</strong>
                <span>Placed awards</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Competition milestones</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Regions represented</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <ol className="awards-timeline" aria-label="Awards timeline">
          {awards.map((award, index) => (
            <li key={`${award.year}-${award.title}-${award.rank}`}>
              <FadeIn delay={index * 0.05} y={24}>
                <article className="award-row">
                  <span className="award-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="award-year">{award.year}</span>
                  <div className="award-copy">
                    <span className="award-rank">{award.rank}</span>
                    <h3>{award.title}</h3>
                    <p>
                      <MapPin aria-hidden="true" size={14} /> {award.location}
                      <span aria-hidden="true"> · </span>
                      {award.detail}
                    </p>
                  </div>
                  {award.proof ? (
                    <a
                      className="award-proof"
                      href={award.proof}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View proof for ${award.title}${award.proof.endsWith(".pdf") ? " (PDF, opens in a new tab)" : " (opens in a new tab)"}`}
                    >
                      <FileText aria-hidden="true" size={18} />
                      <span>{award.proofLabel ?? "View proof"}</span>
                    </a>
                  ) : null}
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>

        <div className="awards-evidence">
          <FadeIn className="awards-evidence-header">
            <div>
              <p>Selected certificates</p>
              <h3>Certificates &amp; records.</h3>
            </div>
            <p>
              Competition certificates and official records from the portfolio
              archive. School coverage is linked in the timeline above.
            </p>
          </FadeIn>

          <div className="awards-evidence-layout">
            {awardEvidenceGroups.map((group) => (
              <div className="awards-evidence-group" key={group.id}>
                <p className="awards-evidence-group__label">{group.label}</p>
                <div className={`awards-evidence-grid awards-evidence-grid--${group.id}`}>
                  {group.items.map((evidence, index) => (
                    <FadeIn key={evidence.title} delay={index * 0.08} y={26}>
                      <a
                        className="award-evidence-card"
                        href={evidence.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${evidence.title}${evidence.href.endsWith(".pdf") ? " (PDF, opens in a new tab)" : " (opens in a new tab)"}`}
                      >
                        <span
                          className={`award-evidence-image${evidence.height > evidence.width ? " award-evidence-image--portrait" : ""}`}
                        >
                          <img
                            src={evidence.image}
                            alt={evidence.imageAlt}
                            width={evidence.width}
                            height={evidence.height}
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span className="award-evidence-copy">
                          <span>
                            {evidence.year} · {evidence.category}
                          </span>
                          <strong>{evidence.title}</strong>
                          <ArrowUpRight aria-hidden="true" size={20} />
                        </span>
                      </a>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
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
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const targetScale = 1 - (projects.length - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const scrimOpacity = useTransform(scrollYProgress, [0.08, 1], [0, 0.24]);
  const stackMotion = !reduceMotion && isDesktop;
  const headingId = `project-${project.number}`;
  const reveal = reduceMotion ? false : { opacity: 0, y: 34 };

  return (
    <div ref={container} className="project-card-space">
      <motion.article
        className="project-card"
        aria-labelledby={headingId}
        style={{
          scale: stackMotion ? scale : 1,
          y: stackMotion ? cardY : 0,
          top: `calc(var(--project-sticky-top) + ${index * 28}px)`,
          zIndex: index + 1,
        }}
      >
        <motion.div
          className="project-card__top"
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, ease: EASE }}
        >
          <span className="project-number">{project.number}</span>
          <div className="project-title-block">
            <span>{project.category}</span>
            <h3 id={headingId}>{project.title}</h3>
          </div>
          <LiveProjectButton href={project.github} />
        </motion.div>

        <div className="project-media-grid">
          <div className="project-info-column">
            <motion.div
              className="project-info-panel project-info-panel--primary"
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.07, ease: EASE }}
            >
              <span>Build focus</span>
              <p>{project.description}</p>
            </motion.div>
            <motion.div
              className="project-info-panel project-info-panel--secondary"
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.14, ease: EASE }}
            >
              <span>Impact</span>
              <strong>{project.highlight}</strong>
              <div className="project-tech" aria-label="Technology stack">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.a
            className="project-image-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} repository`}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.035, clipPath: "inset(10% 0 0 0 round 3rem)" }}
            whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0 round 3rem)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.1, ease: EASE }}
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
          </motion.a>
        </div>
        <motion.span
          className="project-card__scrim"
          aria-hidden="true"
          style={{ opacity: stackMotion ? scrimOpacity : 0 }}
        />
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <FadeIn>
        <h2 id="projects-heading" className="hero-heading section-heading projects-heading">
          Projects
        </h2>
      </FadeIn>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>

      <footer id="contact" className="contact-footer">
        <FadeIn className="contact-footer__inner" y={40}>
          <p className="contact-kicker">Open to collaboration and future opportunities</p>
          <h2>
            Let&apos;s build useful
            <br />
            AI &amp; software.
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
      <VideoShowcase />
      <AboutSection />
      <AwardsSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
