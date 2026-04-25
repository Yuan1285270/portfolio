import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",
    "nav.certificates": "Certificates",
    "hero.title": "Tsung-Yuan Lin",
    "hero.subtitle": "Full-Stack Developer & AI Engineer",
    "hero.description": "Information Engineering and Computer Science student at Feng Chia University with expertise in full-stack development, AI integration, and IoT systems. Currently on exchange at Temple University.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",
    "carousel.highlight1": "🏆 Outstanding Prize - IT Month Competition 2024",
    "carousel.highlight2": "🚀 2nd Place - Owl Hacks 2025 (USA)",
    "carousel.highlight3": "💡 7 Major Projects Completed",
    "carousel.highlight4": "🌍 International Exchange at Temple University",
    "carousel.highlight5": "🎓 GPA 3.8/4.3 at Feng Chia University",
    "about.title": "About",
    "about.education": "Education",
    "about.languages": "Languages",
    "about.location": "Location",
    "about.fengchia": "Feng Chia University",
    "about.bs": "B.S. Information Engineering and Computer Science",
    "about.gpa": "GPA: 3.8/4.3",
    "about.temple": "Temple University",
    "about.exchange": "Exchange Program",
    "about.datascience": "Data Science & Python",
    "about.english": "English",
    "about.ielts": "IELTS 7.0 • TOEIC 835",
    "about.chinese": "Chinese",
    "about.native": "Native Speaker",
    "about.current": "Current",
    "about.philadelphia": "Taichung, Taiwan",
    "about.home": "Home",
    "about.taichung": "Taichung, Taiwan",
    "about.skills": "Technical Skills",
    "about.programming": "Programming",
    "about.tools": "Tools & Platforms",
    "about.specializations": "Specializations",
    "projects.title": "Featured Projects",
    "projects.techstack": "Tech Stack",
    "projects.learnmore": "Learn More",
    "achievements.title": "Achievements & Awards",
    "contact.title": "Get In Touch",
    "contact.description": "I'm always interested in hearing about new projects and opportunities.",
    "contact.email": "Email Me",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "footer.copyright": "© 2025 Tsung-Yuan Lin. All rights reserved.",
  },
  zh: {
    "nav.about": "關於",
    "nav.projects": "專案",
    "nav.achievements": "成就",
    "nav.contact": "聯絡",
    "nav.certificates": "證書",
    "hero.title": "林琮原",
    "hero.subtitle": "全棧開發者 & AI 工程師",
    "hero.description": "逢甲大學資訊工程與電腦科學系學生，擁有全棧開發、AI 整合和物聯網系統的專業知識。目前在美國天普大學進行交換計畫。",
    "hero.viewProjects": "查看專案",
    "hero.contactMe": "聯絡我",
    "carousel.highlight1": "🏆 2024 年資訊月應用賽個人組優勝",
    "carousel.highlight2": "🚀 2025 年 Owl Hacks 第二名（美國）",
    "carousel.highlight3": "💡 完成 7 個主要專案",
    "carousel.highlight4": "🌍 在天普大學進行國際交換",
    "carousel.highlight5": "🎓 逢甲大學 GPA 3.8/4.3",
    "about.title": "關於",
    "about.education": "教育背景",
    "about.languages": "語言能力",
    "about.location": "位置",
    "about.fengchia": "逢甲大學",
    "about.bs": "資訊工程與電腦科學學士",
    "about.gpa": "GPA: 3.8/4.3",
    "about.temple": "天普大學",
    "about.exchange": "交換計畫",
    "about.datascience": "資料科學與 Python",
    "about.english": "英文",
    "about.ielts": "雅思 7.0 • 多益 835",
    "about.chinese": "中文",
    "about.native": "母語使用者",
    "about.current": "目前位置",
    "about.philadelphia": "台中，台灣",
    "about.home": "家鄉",
    "about.taichung": "台中，台灣",
    "about.skills": "技術技能",
    "about.programming": "程式語言",
    "about.tools": "工具與平台",
    "about.specializations": "專業領域",
    "projects.title": "精選專案",
    "projects.techstack": "技術棧",
    "projects.learnmore": "了解更多",
    "achievements.title": "成就與獎項",
    "contact.title": "聯絡我",
    "contact.description": "我很樂意聽取有關新專案和機會的信息。",
    "contact.email": "寄送電子郵件",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "footer.copyright": "© 2025 林琮原。版權所有。",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
