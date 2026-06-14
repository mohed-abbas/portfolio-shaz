import RichText, { type Segment } from "@/components/RichText";
import profile from "@/data/profile.json";
import home from "@/data/home.json";

export default function QuoteCard() {
  const { eyebrow, sentence } = home.quote;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-inverse text-on-inverse p-8 col-span-full sm:col-span-2 lg:col-span-8 card-hover">
      <div className="absolute inset-0 dotted-pattern opacity-30" />
      <div className="absolute top-4 right-6 font-serif text-9xl leading-none text-accent-500/20 select-none">
        &ldquo;
      </div>

      <div className="relative">
        <p className="text-xs uppercase tracking-widest text-on-inverse/40 font-mono">
          {eyebrow}
        </p>

        <p className="mt-6 text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
          <RichText segments={sentence as Segment[]} emClass="accent-em" />
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-on-inverse/15" />
          <span className="font-mono text-xs uppercase tracking-widest text-on-inverse/50">
            — {profile.shortName}
          </span>
        </div>
      </div>
    </div>
  );
}
