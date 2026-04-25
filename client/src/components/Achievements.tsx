import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Calendar,
  MapPin,
  ExternalLink,
  X,
  FileText,
  Download,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Types
export type AchievementCategory = "hackathon" | "competition" | "certificate";

export interface Achievement {
  id: string;
  year: string;
  title: string;
  titleZh: string;
  location: string;
  category: AchievementCategory;
  description?: string;
  descriptionZh?: string;
  certificateUrl?: string;
  certificatePdf?: string;
  rank?: string;
  rankZh?: string;
  imageUrl?: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  language?: "en" | "zh";
}

// Category configuration
const categoryConfig: Record<
  AchievementCategory,
  {
    label: string;
    labelZh: string;
    icon: React.ElementType;
    gradient: string;
    borderColor: string;
    glowColor: string;
  }
> = {
  hackathon: {
    label: "Hackathon",
    labelZh: "黑客松",
    icon: Trophy,
    gradient: "from-yellow-400 via-yellow-500 to-amber-500",
    borderColor: "border-yellow-400/50",
    glowColor: "shadow-yellow-500/20",
  },
  competition: {
    label: "Competition",
    labelZh: "競賽",
    icon: Medal,
    gradient: "from-amber-400 via-yellow-400 to-yellow-500",
    borderColor: "border-amber-400/50",
    glowColor: "shadow-amber-500/20",
  },
  certificate: {
    label: "Certificate",
    labelZh: "證書",
    icon: Award,
    gradient: "from-yellow-300 via-yellow-400 to-amber-400",
    borderColor: "border-yellow-300/50",
    glowColor: "shadow-yellow-400/20",
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const timelineLineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Category Badge Component
function CategoryBadge({
  category,
  language = "en",
}: {
  category: AchievementCategory;
  language?: "en" | "zh";
}) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <Badge
      className={cn(
        "px-3 py-1 text-xs font-bold uppercase tracking-wider",
        "bg-gradient-to-r",
        config.gradient,
        "text-black border-0 shadow-lg",
        config.glowColor
      )}
    >
      <Icon className="w-3 h-3 mr-1" />
      {language === "en" ? config.label : config.labelZh}
    </Badge>
  );
}

// Achievement Card Component
function AchievementCard({
  achievement,
  index,
  language = "en",
  onSelect,
}: {
  achievement: Achievement;
  index: number;
  language?: "en" | "zh";
  onSelect: (achievement: Achievement) => void;
}) {
  const config = categoryConfig[achievement.category];
  const hasCertificate = achievement.certificateUrl || achievement.certificatePdf;

  return (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
    >
      {/* Timeline Node - visible on all screens */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-6 h-6 rounded-full bg-gradient-to-br",
            config.gradient,
            "border-4 border-black shadow-lg shadow-yellow-500/50"
          )}
        />
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0",
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        )}
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onSelect(achievement)}
          className={cn(
            "group relative p-6 rounded-xl cursor-pointer",
            "bg-gradient-to-br from-slate-900/90 to-black/90",
            "border-2",
            config.borderColor,
            "hover:border-yellow-400",
            "transition-all duration-300",
            "shadow-xl hover:shadow-2xl",
            config.glowColor
          )}
        >
          {/* Hover Glow Effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              "bg-gradient-to-br",
              config.gradient
            )}
            style={{ filter: "blur(20px)", opacity: 0.1 }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4 min-w-0">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <CategoryBadge category={achievement.category} language={language} />
                  {achievement.rank && (
                    <span className="text-yellow-400 text-sm font-bold">
                      {language === "en" ? achievement.rank : achievement.rankZh}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors truncate">
                  {language === "en" ? achievement.title : achievement.titleZh}
                </h3>
              </div>
              <div className="text-right flex-shrink-0 whitespace-nowrap">
                <div className="flex items-center gap-1 text-yellow-400 font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>{achievement.year}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            {(achievement.description || achievement.descriptionZh) && (
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {language === "en"
                  ? achievement.description
                  : achievement.descriptionZh}
              </p>
            )}

            {/* Location & Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{achievement.location}</span>
              </div>
              <div className="flex items-center gap-2">
                {hasCertificate && (
                  <span className="flex items-center gap-1 text-xs text-yellow-400/70 group-hover:text-yellow-400 transition-colors">
                    <FileText className="w-3 h-3" />
                    {language === "en" ? "Certificate" : "證書"}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Detail Modal Component
function AchievementDetailModal({
  achievement,
  isOpen,
  onClose,
  language = "en",
}: {
  achievement: Achievement | null;
  isOpen: boolean;
  onClose: () => void;
  language?: "en" | "zh";
}) {
  if (!achievement) return null;

  const config = categoryConfig[achievement.category];
  const Icon = config.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-400/50 text-white">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                "bg-gradient-to-br",
                config.gradient
              )}
            >
              <Icon className="w-6 h-6 text-black" />
            </div>
            <div>
              <CategoryBadge category={achievement.category} language={language} />
              <DialogTitle className="text-xl font-bold text-white mt-2">
                {language === "en" ? achievement.title : achievement.titleZh}
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-gray-400">
            <div className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {achievement.year}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {achievement.location}
              </span>
              {achievement.rank && (
                <span className="text-yellow-400 font-bold">
                  {language === "en" ? achievement.rank : achievement.rankZh}
                </span>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          {(achievement.description || achievement.descriptionZh) && (
            <div className="p-4 rounded-lg bg-yellow-400/5 border border-yellow-400/20">
              <p className="text-gray-300 leading-relaxed">
                {language === "en"
                  ? achievement.description
                  : achievement.descriptionZh}
              </p>
            </div>
          )}

          {/* Certificate Preview */}
          {(achievement.certificateUrl || achievement.certificatePdf) && (
            <div>
              <h4 className="text-sm font-bold text-yellow-400 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {language === "en" ? "Certificate" : "證書"}
              </h4>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-yellow-400/30 bg-black/50 group">
                {achievement.certificateUrl ? (
                  <img
                    src={achievement.certificateUrl}
                    alt={achievement.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                    <FileText className="w-16 h-16 mb-2" />
                    <span className="text-sm">PDF Certificate</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  {achievement.certificatePdf && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                      onClick={() => {
                        window.open(achievement.certificatePdf, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {language === "en" ? "View" : "查看"}
                    </Button>
                  )}
                  {achievement.certificatePdf && (
                    <Button
                      size="sm"
                      className="bg-yellow-400 text-black hover:bg-yellow-300"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = achievement.certificatePdf || "";
                        link.download = `${achievement.title}.pdf`;
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      {language === "en" ? "Download" : "下載"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Main Achievements Component
export function Achievements({ achievements, language = "en" }: AchievementsProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAchievement(null), 300);
  };

  return (
    <div className="relative">
      {/* Timeline Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2">
          <motion.div
            variants={timelineLineVariants}
            className="w-full h-full origin-top bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-600"
          />
        </div>

        {/* Achievement Cards */}
        <div className="space-y-12 py-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              language={language}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AchievementDetailModal
        achievement={selectedAchievement}
        isOpen={isModalOpen}
        onClose={handleClose}
        language={language}
      />
    </div>
  );
}

// Section Title Component
export function AchievementsSectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400" />
        <Trophy className="w-8 h-8 text-yellow-400" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400" />
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

// Stats Overview Component
export function AchievementStats({
  achievements,
  language = "en",
}: {
  achievements: Achievement[];
  language?: "en" | "zh";
}) {
  const stats = {
    total: achievements.length,
    hackathons: achievements.filter((a) => a.category === "hackathon").length,
    competitions: achievements.filter((a) => a.category === "competition").length,
    certificates: achievements.filter((a) => a.category === "certificate").length,
  };

  const statItems = [
    { label: language === "en" ? "Total" : "總計", value: stats.total, icon: Star },
    {
      label: language === "en" ? "Hackathons" : "黑客松",
      value: stats.hackathons,
      icon: Trophy,
    },
    {
      label: language === "en" ? "Competitions" : "競賽",
      value: stats.competitions,
      icon: Medal,
    },
    {
      label: language === "en" ? "Certificates" : "證書",
      value: stats.certificates,
      icon: Award,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
    >
      {statItems.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -4 }}
            className="p-4 rounded-xl bg-gradient-to-br from-slate-900/80 to-black/80 border border-yellow-400/30 text-center group hover:border-yellow-400/60 transition-all"
          >
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-black" />
              </div>
            </div>
            <div className="text-2xl font-black text-yellow-400">{stat.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Achievements;
