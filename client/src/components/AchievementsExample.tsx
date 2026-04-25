// Example: How to use the new Achievements component in HomeFloating.tsx
// Replace the existing Achievements section with this code

import { Achievements, AchievementsSectionTitle, AchievementStats, type Achievement } from "@/components/Achievements";

// Define your achievements data (can be moved to a separate data file)
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

// Usage in HomeFloating.tsx - Replace the existing Achievements section with:

/*
      {
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
      }
*/

export { achievementsData };
