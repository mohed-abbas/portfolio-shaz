import HeroCard from "@/components/cards/HeroCard";
import AvatarCard from "@/components/cards/AvatarCard";
import TechStackCard from "@/components/cards/TechStackCard";
import GithubCard from "@/components/cards/GithubCard";
import FeaturedCard from "@/components/cards/FeaturedCard";
import AICard from "@/components/cards/AICard";
import DevOpsCard from "@/components/cards/DevOpsCard";
import QuoteCard from "@/components/cards/QuoteCard";
import IntroScreen from "@/components/IntroScreen";

export default function HomePage() {
  return (
    <>
      <IntroScreen />
      <div
        id="portfolio-grid"
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 stagger-children">
          <HeroCard />
          <AvatarCard />
          <TechStackCard />
          <GithubCard />
          <FeaturedCard />
          <AICard />
          <DevOpsCard />
          <QuoteCard />
        </div>
      </div>
    </>
  );
}
