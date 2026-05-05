import HeroCard from "@/components/cards/HeroCard";
import AvatarCard from "@/components/cards/AvatarCard";
import TechStackCard from "@/components/cards/TechStackCard";
import GithubCard from "@/components/cards/GithubCard";
import FeaturedCard from "@/components/cards/FeaturedCard";
import AICard from "@/components/cards/AICard";
import DevOpsCard from "@/components/cards/DevOpsCard";
import QuoteCard from "@/components/cards/QuoteCard";
import ContactCard from "@/components/cards/ContactCard";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
      {/* Subtle intro line */}
      <div className="flex items-center gap-3 mb-6 text-xs font-mono text-ink-500">
        <span className="w-8 h-px bg-ink-300" />
        <span className="tracking-widest uppercase">Portfolio · 2026</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 stagger-children">
        <HeroCard />
        <AvatarCard />
        <TechStackCard />
        <GithubCard />
        <FeaturedCard />
        <AICard />
        <DevOpsCard />
        <QuoteCard />
        <ContactCard />
      </div>
    </div>
  );
}
