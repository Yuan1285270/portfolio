import { Code2 } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Github, Linkedin, Mail, ChevronRight, ChevronLeft, Zap, Award, Globe, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Achievements, AchievementsSectionTitle, AchievementStats, type Achievement } from "@/components/Achievements";
import { useLanguage } from "@/contexts/LanguageContext";
import { APP_LOGO, APP_TITLE } from "@/const";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import "../styles/animations.css";

/* ── Golden Particle Background Component ─────────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function GoldenParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: `rgba(251, 191, 36, ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px rgba(251, 191, 36, ${p.opacity * 0.6})`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Animated Text Reveal Component ─────────────────────────────── */
function AnimatedText({
  text,
  className = "",
  delay = 0,
  type = "word",
}: {
  text: string;
  className?: string;
  delay?: number;
  type?: "word" | "char";
}) {
  const items = type === "word" ? text.split(" ") : text.split("");
  const separator = type === "word" ? " " : "";

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + i * (type === "word" ? 0.12 : 0.03),
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {item}
          {i < items.length - 1 && separator}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Hero Background Carousel ─────────────────────────────────── */
function HeroBackgroundCarousel({ items, language }: { items: Array<{image: string; title: string; titleZh?: string}>; language: "en" | "zh" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
    setIsLoaded(true);
  }, [items]);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoaded, items.length]);

  if (!isLoaded) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={items[currentIndex].image}
            alt={language === "en" ? items[currentIndex].title : items[currentIndex].titleZh || items[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators - bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-yellow-400" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Glowing Orb Component ────────────────────────────────────── */
function GlowingOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Typewriter Effect Component ──────────────────────────────── */
function TypewriterText({
  texts,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  pause = 2000,
}: {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayed(currentText.substring(0, displayed.length - 1));
        if (displayed.length === 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayed(currentText.substring(0, displayed.length + 1));
        if (displayed.length === currentText.length) {
          timer = setTimeout(() => setIsDeleting(true), pause);
        }
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, loopNum, texts, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-yellow-400 ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

/* ── Scroll Indicator ─────────────────────────────────────────── */
function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-yellow-400/60 hover:text-yellow-400 transition-colors cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </motion.button>
  );
}

export default function HomeFloating() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Handle scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      const newVisibleSections = new Set<string>();
      Object.entries(sectionRefs.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            newVisibleSections.add(key);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Mouse parallax for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, -30]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Floating Carousel items with real competition images
  const floatingCarouselItems = [
    {
      id: 1,
      title: "🏆 NCPC Competition",
      titleZh: "🏆 NCPC 程式競賽",
      description: "National College Programming Contest - Team Achievement",
      descriptionZh: "全國大專院校程式競賽 - 團隊成就",
      image: "/images/IMG_9915.jpg",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      id: 2,
      title: "💻 AI FinTech Hackathon",
      titleZh: "💻 AI 金融黑客松",
      description: "AI Financial Innovation Hackathon - Finalist",
      descriptionZh: "AI 金融創新黑客松 - 決賽入圍",
      image: "/images/IMG_2736.jpg",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      id: 3,
      title: "🥉 Mountain City Hackathon",
      titleZh: "🥉 山城數位黑客松",
      description: "Bronze Medal at Nantou Digital Hackathon 2024",
      descriptionZh: "2024 南投數位黑客松銅獎",
      image: "/images/d58757e4-8480-4542-9b64-219d1b2ca6ba.jpg",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      id: 4,
      title: "🔧 Cycle Guardian Showcase",
      titleZh: "🔧 Cycle Guardian 專案展示",
      description: "Smart bicycle safety system project demonstration",
      descriptionZh: "智慧自行車安全系統專案展示",
      image: "/images/b477460d-b40c-45a4-9b1b-44cf87c0e125.jpg",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      id: 5,
      title: "🏅 IT Month Competition",
      titleZh: "🏅 資訊月競賽",
      description: "National IT Month Skills Competition - Team Achievement",
      descriptionZh: "全國資訊月技能競賽 - 團隊成就",
      image: "/images/IMG_9982.jpg",
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Learn Chinese Together App",
      titleZh: "一起學中文 App",
      description: "Interactive Mandarin learning application with pattern recognition and 200+ vocabulary items",
      descriptionZh: "具有模式識別和 200+ 詞彙的互動式普通話學習應用程式",
      tech: ["Python", "Kivy", "Pattern Recognition"],
      highlights: "Highest project score (94/100)",
      highlightsZh: "最高專案分數 (94/100)",
      image: "/images/5c8fc512-eb03-4c8e-930a-5d702131f5f0.png",
    },
    {
      id: 2,
      title: "Cycle Guardian",
      titleZh: "自行車安全輔助系統",
      description: "Blind-spot detection system for bicycles with 90% accuracy using Raspberry Pi and Arduino",
      descriptionZh: "使用樹莓派和 Arduino 的自行車盲點檢測系統，準確度達 90%",
      tech: ["Python", "Raspberry Pi", "Arduino"],
      highlights: "Tested at Tongji University, Shanghai",
      highlightsZh: "在上海同濟大學測試",
      image: "/images/d5a4773d-22dc-43bd-b47f-cc58d493d15b.png",
    },
    {
      id: 3,
      title: "AI Travel Content Writer",
      titleZh: "AI 旅文寫手",
      description: "RAG-powered system analyzing 300+ travel articles for tourism promotion",
      descriptionZh: "分析 300+ 旅遊文章的 RAG 動力系統，用於旅遊推廣",
      tech: ["Python", "RAG", "ChatGPT"],
      highlights: "Promoted 20+ lesser-known spots",
      highlightsZh: "推廣 20+ 個冷門景點",
      image: "/images/8c97dd46-99bc-4313-a689-b970daaeceaa.png",
    },
    {
      id: 4,
      title: "Smart Drop",
      titleZh: "Smart Drop",
      description: "AI-powered crop fertilization chatbot with weather integration",
      descriptionZh: "具有天氣整合的 AI 動力作物施肥聊天機器人",
      tech: ["FastAPI", "Google Cloud", "Gemini API"],
      highlights: "Deployed on Google Cloud",
      highlightsZh: "部署在 Google Cloud",
      image: "/images/Screenshot2025-11-16at11.34.56PM.png",
    },
    {
      id: 5,
      title: "SpendiX",
      titleZh: "SpendiX",
      description: "Personal finance app with AI insights using K-Means clustering",
      descriptionZh: "使用 K-Means 聚類的 AI 洞察個人財務應用程式",
      tech: ["FastAPI", "Machine Learning", "Render"],
      highlights: "Voice input and personalized advice",
      highlightsZh: "語音輸入和個人化建議",
      image: "/images/Screenshot2025-11-16at11.34.42PM.png",
    },
    {
      id: 6,
      title: "ALL-EN E-Commerce System",
      titleZh: "歐印電商系統",
      description: "Full-featured e-commerce admin panel with AI chatbot integration",
      descriptionZh: "具有 AI 聊天機器人整合的全功能電商管理面板",
      tech: ["PHP", "MySQL", "JavaScript"],
      highlights: "Complete order and product management",
      highlightsZh: "完整的訂單和產品管理",
      image: "/images/Screenshot2025-11-16at11.34.00PM.png",
    },
  ];

  const achievements = [
    { year: "2025", title: "2nd Place - Owl Hacks 2025", titleZh: "Owl Hacks 2025 第二名", location: "USA", certificate: "OwlHacks-2025-2nd-Place.pdf" },
    { year: "2025", title: "Participant - DevJam TW 2025", titleZh: "DevJam TW 2025 參與證書", location: "Taiwan", certificate: "DevJam-TW-2025.pdf" },
    { year: "2025", title: "Finalist - AI FinTech Innovation Hackathon", titleZh: "AI 金融創新黑客松決賽", location: "Taiwan" },
    { year: "2024", title: "Outstanding Prize (Individual) - IT Month Competition", titleZh: "資訊月應用賽個人組優勝", location: "Taichung" },
    { year: "2024", title: "2nd Place (Team) - IT Month Competition", titleZh: "資訊月應用賽團體組第二名", location: "Taichung" },
    { year: "2024", title: "NCPC Finalist - National College Programming Contest", titleZh: "NCPC 決賽", location: "Taiwan" },
    { year: "2024", title: "Bronze Medal - Mountain City Digital Hackathon", titleZh: "山城黑客松銅獎", location: "Taiwan" },
    { year: "2024", title: "3rd Tier Prize - Cross-Strait Youth Maker Competition", titleZh: "海峽兩岸青创客大賽三等獎", location: "China" },
  ];

  // New achievements data with categories for the redesigned component
  const achievementsData: Achievement[] = [
    {
      id: "1",
      year: "2025",
      title: "2nd Place - Owl Hacks 2025",
      titleZh: "Owl Hacks 2025 第二名",
      location: "USA",
      category: "hackathon",
      description: "Developed an innovative AI-powered solution for sustainable energy management. Competed against 50+ teams from universities worldwide.",
      descriptionZh: "開發了創新的 AI 驅動永續能源管理解決方案。與來自全球大學的 50 多支隊伍競爭。",
      rank: "2nd Place",
      rankZh: "第二名",
      certificatePdf: "/certificates/OwlHacks-2025-2nd-Place.pdf",
    },
    {
      id: "2",
      year: "2025",
      title: "Participant - DevJam TW 2025",
      titleZh: "DevJam TW 2025 參與證書",
      location: "Taiwan",
      category: "certificate",
      certificatePdf: "/certificates/DevJam-TW-2025.pdf",
    },
    {
      id: "3",
      year: "2025",
      title: "Finalist - AI FinTech Innovation Hackathon",
      titleZh: "AI 金融創新黑客松決賽",
      location: "Taiwan",
      category: "hackathon",
      description: "Reached the finals with a blockchain-based financial transparency solution.",
      descriptionZh: "以區塊鏈金融透明化解決方案進入決賽。",
      rank: "Finalist",
      rankZh: "決賽",
    },
    {
      id: "4",
      year: "2024",
      title: "Outstanding Prize (Individual) - IT Month Competition",
      titleZh: "資訊月應用賽個人組優勝",
      location: "Taichung",
      category: "competition",
      rank: "Outstanding Prize",
      rankZh: "優勝",
    },
    {
      id: "5",
      year: "2024",
      title: "2nd Place (Team) - IT Month Competition",
      titleZh: "資訊月應用賽團體組第二名",
      location: "Taichung",
      category: "competition",
      rank: "2nd Place",
      rankZh: "第二名",
    },
    {
      id: "6",
      year: "2024",
      title: "NCPC Finalist - National College Programming Contest",
      titleZh: "NCPC 決賽",
      location: "Taiwan",
      category: "competition",
      description: "Advanced to the national finals of the NCPC programming competition.",
      descriptionZh: "晉級 NCPC 程式競賽全國決賽。",
      rank: "Finalist",
      rankZh: "決賽",
      imageUrl: "/images/IMG_9915.jpg",
    },
    {
      id: "7",
      year: "2024",
      title: "Bronze Medal - Mountain City Digital Hackathon",
      titleZh: "山城黑客松銅獎",
      location: "Taiwan",
      category: "hackathon",
      rank: "Bronze Medal",
      rankZh: "銅獎",
    },
    {
      id: "8",
      year: "2024",
      title: "3rd Tier Prize - Cross-Strait Youth Maker Competition",
      titleZh: "海峽兩岸青创客大賽三等獎",
      location: "China",
      category: "competition",
      rank: "3rd Prize",
      rankZh: "三等獎",
    },
  ];

  const skills = {
    "Programming": ["C/C++", "Python", "SQL", "JavaScript", "HTML/CSS", "PHP"],
    "Tools & Platforms": ["GitHub", "Google Cloud", "Render", "FastAPI", "Arduino", "Raspberry Pi"],
    "Specializations": ["Backend Development", "AI/ML Integration", "IoT & Hardware", "Full-Stack"],
  };

  const skillsZh = {
    "程式語言": ["C/C++", "Python", "SQL", "JavaScript", "HTML/CSS", "PHP"],
    "工具與平台": ["GitHub", "Google Cloud", "Render", "FastAPI", "Arduino", "樹莓派"],
    "專業領域": ["後端開發", "AI/ML 整合", "物聯網與硬體", "全棧開發"],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              {/* Custom "R" Logo */}
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                {/* Hexagon background */}
                <path
                  d="M20 2L36.66 11.5V30.5L20 40L3.34 30.5V11.5L20 2Z"
                  fill="url(#logo-gradient)"
                  stroke="url(#logo-gradient)"
                  strokeWidth="1.5"
                />
                {/* Inner cutout for depth */}
                <path
                  d="M20 6L32.66 13.5V28.5L20 36L7.34 28.5V13.5L20 6Z"
                  fill="#0a0a0a"
                />
                {/* Letter "R" */}
                <text
                  x="20"
                  y="27"
                  textAnchor="middle"
                  fill="url(#logo-gradient)"
                  fontSize="18"
                  fontWeight="900"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="-0.5"
                >R</text>
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-lg text-yellow-400 tracking-wide">{APP_TITLE}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-12 items-center">
              {["about", "projects", "achievements", "certificates", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200 border border-gray-600 rounded-lg px-3 py-1"
              >
                <Globe size={16} />
                {language === "en" ? "中文" : "EN"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="text-yellow-400 text-sm font-medium"
              >
                {language === "en" ? "中文" : "EN"}
              </button>
              <button
                className="text-yellow-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {["about", "projects", "achievements", "certificates", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 px-4 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 rounded transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ─────────── HERO SECTION ─────────── */}
      <section
        className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Background Carousel */}
        <HeroBackgroundCarousel items={floatingCarouselItems.map(item => ({
          image: item.image,
          title: item.title,
          titleZh: item.titleZh,
        }))} language={language} />

        {/* Layer: Animated Grid Background (subtle) */}
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Layer: Floating Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <GoldenParticles />
        </div>

        {/* Layer: Golden Radial Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-10"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
            x: parallaxX,
            y: parallaxY,
          }}
        />

        {/* ── Hero Content ── */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
              {/* Pre-title */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="h-[1px] w-12 bg-yellow-400/60" />
                <span className="text-yellow-400/80 text-sm font-medium tracking-[0.2em] uppercase">
                  {language === "en" ? "Portfolio 2025" : "作品集 2025"}
                </span>
                <Sparkles size={16} className="text-yellow-400/60" />
              </motion.div>

              {/* Main Title */}
              <div className="space-y-2">
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    {language === "en" ? "Tsung-Yuan" : "林琮原"}
                  </span>
                </motion.h1>
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    {language === "en" ? "Lin" : ""}
                  </span>
                </motion.h1>
              </div>

              {/* Subtitle with Typewriter */}
              <motion.div
                className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 min-h-[2.5em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-yellow-400/90 font-medium">
                  <TypewriterText
                    texts={
                      language === "en"
                        ? [
                            "Full-Stack Developer",
                            "AI Engineer",
                            "IoT Innovator",
                            "Hackathon Champion",
                          ]
                        : [
                            "全棧開發工程師",
                            "AI 工程師",
                            "物聯網創新者",
                            "黑客松冠軍",
                          ]
                    }
                    speed={60}
                    deleteSpeed={30}
                    pause={2500}
                  />
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {language === "en"
                  ? "Information Engineering and Computer Science student at Feng Chia University. Crafting intelligent solutions through code, AI, and creative problem-solving."
                  : "逢甲大學資訊工程與電腦科學系學生。透過程式碼、AI 與創意思考，打造智慧解決方案。"}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="group relative bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-300 hover:to-yellow-400 border-0 px-8 py-6 font-bold text-base shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all overflow-hidden"
                >
                  <span className="relative z-10">{t("hero.viewProjects")}</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-6 font-bold text-base transition-all"
                >
                  {t("hero.contactMe")}
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-5 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                {[
                  { href: "https://github.com/RexLin1223", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/tzung-yuan-lin-9247b4253/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:t3good1@gmail.com", icon: Mail, label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-11 h-11 rounded-xl border border-yellow-400/30 text-yellow-400/70 hover:text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + i * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

        {/* Scroll Indicator */}
        <ScrollIndicator onClick={() => scrollToSection("about")} />

        {/* Bottom fade transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* About Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["about"] = el;
        }}
        className="relative py-24 bg-black border-t border-yellow-400/20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-yellow-400 mb-12">{t("about.title")}</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all">
              <h3 className="text-lg font-bold text-yellow-400">{t("about.education")}</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">{t("about.fengchia")}</p>
                  <p className="text-sm">{t("about.bs")}</p>
                  <p className="text-sm text-yellow-400 font-bold">{t("about.gpa")}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">{t("about.temple")}</p>
                  <p className="text-sm">{t("about.exchange")}</p>
                  <p className="text-sm">{t("about.datascience")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all">
              <h3 className="text-lg font-bold text-yellow-400">{t("about.languages")}</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold text-white">{t("about.english")}</p>
                  <p className="text-sm">{t("about.ielts")}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">{t("about.chinese")}</p>
                  <p className="text-sm">{t("about.native")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all">
              <h3 className="text-lg font-bold text-yellow-400">{t("about.location")}</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold text-white">{t("about.current")}</p>
                  <p className="text-sm">{t("about.philadelphia")}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">{t("about.home")}</p>
                  <p className="text-sm">{t("about.taichung")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-black text-yellow-400 mb-8">{t("about.skills")}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(language === "en" ? skills : skillsZh).map(([category, items]) => (
                <div key={category} className="space-y-4 p-6 rounded-lg border-2 border-yellow-400/50 bg-gradient-to-br from-slate-900 to-black hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
                  <div className="flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    <h4 className="font-bold text-white text-lg">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-400/50 hover:from-yellow-400/40 hover:to-yellow-500/40 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["projects"] = el;
        }}
        className="py-20 bg-gradient-to-b from-black to-slate-900 border-t-2 border-yellow-400"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-yellow-400 mb-12">{t("projects.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-900 to-black rounded-xl border-2 border-yellow-400/30 overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-400/20 to-yellow-500/10">
                  <img
                    src={project.image}
                    alt={language === "en" ? project.title : project.titleZh}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <Code2 size={48} className="text-yellow-400/60" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    {language === "en" ? project.title : project.titleZh}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === "en" ? project.description : project.descriptionZh}
                  </p>

                  <div>
                    <p className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-widest">{t("projects.techstack")}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-yellow-400/10 text-yellow-300 rounded text-xs font-semibold border border-yellow-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 pt-2 border-t border-yellow-400/20">
                    ✓ {language === "en" ? project.highlights : project.highlightsZh}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-yellow-400 hover:bg-yellow-400/20 justify-between group-hover:translate-x-1 transition-all font-bold"
                    onClick={() => {
                      setSelectedProject(project);
                      setIsProjectModalOpen(true);
                    }}
                  >
                    {t("projects.learnmore")} <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
          <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/50 text-white">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500">
                      <Code2 className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <DialogTitle className="text-xl font-bold text-white">
                        {language === "en" ? selectedProject.title : selectedProject.titleZh}
                      </DialogTitle>
                    </div>
                  </div>
                  <DialogDescription className="text-gray-400">
                    <div className="mt-2">
                      {language === "en" ? selectedProject.description : selectedProject.descriptionZh}
                    </div>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Project Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-yellow-400/30">
                    <img
                      src={selectedProject.image}
                      alt={language === "en" ? selectedProject.title : selectedProject.titleZh}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-bold text-yellow-400 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      {t("projects.techstack")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-yellow-400/50 text-yellow-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-4 rounded-lg bg-yellow-400/5 border border-yellow-400/20">
                    <h4 className="text-sm font-bold text-yellow-400 mb-2">
                      {language === "en" ? "Key Highlights" : "主要亮點"}
                    </h4>
                    <p className="text-gray-300">
                      {language === "en" ? selectedProject.highlights : selectedProject.highlightsZh}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* Achievements Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["achievements"] = el;
        }}
        className="py-20 bg-black border-t-2 border-yellow-400"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AchievementsSectionTitle
            title={language === "en" ? "Achievements" : "成就與獎項"}
            subtitle={
              language === "en"
                ? "A timeline of hackathons, competitions, and certifications"
                : "黑客松、競賽與認證的時間軸"
            }
          />
          
          <AchievementStats achievements={achievementsData} language={language} />
          
          <Achievements achievements={achievementsData} language={language} />
        </div>
      </section>

      {/* Certificates Wall Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["certificates"] = el;
        }}
        className="py-20 bg-gradient-to-b from-black via-gray-950 to-black border-t-2 border-yellow-400/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-yellow-400 mb-4"
            >
              {language === "en" ? "Certificates & Awards" : "證書與獎狀"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              {language === "en" 
                ? "A collection of certificates, awards, and recognition" 
                : "證書、獎狀與認可的收藏"}
            </motion.p>
          </div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/images/e8391bd8-d01e-477c-bf9e-0a1692be40e4.jpg",
                title: "Mountain City Hackathon Bronze",
                titleZh: "山城黑客松銅獎",
                year: "2024",
              },
              {
                image: "/images/882bae98-20fc-485b-9c8e-48cc270a7438.jpg",
                title: "IT Month Competition Winner",
                titleZh: "資訊月競賽優勝",
                year: "2024",
              },
              {
                image: "/certificates/TOEIC_835.jpg",
                title: "TOEIC Score 835",
                titleZh: "TOEIC 多益 835 分",
                year: "2023",
              },
              {
                image: "/certificates/TOEIC_835.jpg",
                title: "DevJam TW 2025 Participant",
                titleZh: "DevJam TW 2025 參與證書",
                year: "2025",
                pdf: "/certificates/DevJam_TW_2025.pdf",
              },
              {
                image: "/certificates/TOEIC_835.jpg",
                title: "Temple University Exchange",
                titleZh: "天普大學交換計畫",
                year: "2025",
                pdf: "/certificates/Temple_Exchange_Fall2025.pdf",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer bg-gradient-to-br from-slate-900 to-black"
              >
                <img
                  src={cert.image}
                  alt={language === "en" ? cert.title : cert.titleZh}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-yellow-400 font-bold text-sm mb-1">
                      {language === "en" ? cert.title : cert.titleZh}
                    </p>
                    <p className="text-white/60 text-xs">{cert.year}</p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current["contact"] = el;
        }}
        className="py-20 bg-gradient-to-br from-black via-yellow-900/20 to-black text-white border-t-2 border-yellow-400"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-yellow-400 mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-gray-300 mb-12">
            {t("contact.description")}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:t3good1@gmail.com">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 border-0 font-bold shadow-lg shadow-yellow-500/50">
                <Mail size={20} className="mr-2" />
                {t("contact.email")}
              </Button>
            </a>
            <a href="https://github.com/RexLin1223" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/20 font-bold">
                <Github size={20} className="mr-2" />
                {t("contact.github")}
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/tzung-yuan-lin-9247b4253/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/20 font-bold">
                <Linkedin size={20} className="mr-2" />
                {t("contact.linkedin")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-yellow-400 text-gray-500 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-semibold">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
