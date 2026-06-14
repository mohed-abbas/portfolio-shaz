import { Brain } from "lucide-react";
import Image from "next/image";
import { cardClass } from "@/components/cards/Card";
import home from "@/data/home.json";

export default function AICard() {
  const { eyebrow, subtitle, copy, providers } = home.ai;

  return (
    <div className={`${cardClass} p-7 col-span-full sm:col-span-1 lg:col-span-5`}>
      <div className="flex items-start gap-4 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-content/[0.05] flex items-center justify-center text-content">
          <Brain size={18} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-content-muted font-mono">
            {eyebrow}
          </p>
          <p className="font-medium text-content">{subtitle}</p>
        </div>
      </div>

      <p className="text-2xl text-content leading-snug">
        {copy}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2">
        {providers.map((p) => (
          <div
            key={p.name}
            className="aspect-square rounded-2xl border border-line/10 bg-surface flex flex-col items-center justify-center gap-2 hover:border-accent-500/30 hover:bg-accent-500/5 transition-all"
          >
            <Image
              src={p.logo}
              alt={`${p.name} logo`}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="text-[11px] font-mono text-content-muted">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
