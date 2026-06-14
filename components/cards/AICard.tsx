import { Brain } from "lucide-react";
import Image from "next/image";
import { cardClass } from "@/components/cards/Card";

const providers = [
  { name: "OpenAI", logo: "/openai-icon-logo.svg" },
  { name: "Claude", logo: "/claude-icon-logo.svg" },
  { name: "Gemini", logo: "/gemini-icon-logo.svg" },
];

export default function AICard() {
  return (
    <div className={`${cardClass} p-7 col-span-full sm:col-span-1 lg:col-span-5`}>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-ink-900/[0.04] flex items-center justify-center text-ink-900">
          <Brain size={18} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-ink-500 font-mono">
            AI in production
          </p>
          <p className="font-medium text-ink-900">Shipped, not demoed</p>
        </div>
      </div>

      <p className="text-2xl text-ink-900 leading-snug">
        LLM-powered features, conversational interfaces, and prompt-engineered
        workflows — running for real users, not just on a slide.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {providers.map((p) => (
          <div
            key={p.name}
            className="aspect-square rounded-2xl border border-ink-900/[0.06] bg-cream-50 flex flex-col items-center justify-center gap-2 hover:border-accent-500/30 hover:bg-accent-500/5 transition-all"
          >
            <Image
              src={p.logo}
              alt={`${p.name} logo`}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="text-[11px] font-mono text-ink-600">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
