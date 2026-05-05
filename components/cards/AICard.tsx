import { Brain } from "lucide-react";

export default function AICard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-7 col-span-full sm:col-span-1 lg:col-span-5 card-hover">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-ink-900/[0.04] flex items-center justify-center text-ink-900">
          <Brain size={18} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-ink-400 font-mono">
            AI Integrations
          </p>
          <p className="font-medium text-ink-900">Production-ready</p>
        </div>
      </div>

      <p className="font-serif text-2xl text-ink-900 leading-snug italic">
        &ldquo;Shipping LLM-powered features, conversational interfaces, and
        prompt-engineered automation flows.&rdquo;
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          { name: "OpenAI", shape: "circle" },
          { name: "Claude", shape: "rounded" },
          { name: "Gemini", shape: "diamond" },
        ].map((p) => (
          <div
            key={p.name}
            className="aspect-square rounded-2xl border border-ink-900/[0.06] bg-cream-50 flex flex-col items-center justify-center gap-2 group hover:border-accent-500/30 hover:bg-accent-500/5 transition-all"
          >
            <span
              className={`block w-5 h-5 bg-ink-900 group-hover:bg-accent-500 transition-colors ${
                p.shape === "circle"
                  ? "rounded-full"
                  : p.shape === "rounded"
                  ? "rounded-md"
                  : "rotate-45 rounded-sm"
              }`}
            />
            <span className="text-[11px] font-mono text-ink-600">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
