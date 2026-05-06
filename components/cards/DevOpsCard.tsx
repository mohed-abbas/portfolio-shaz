import { Server } from "lucide-react";

export default function DevOpsCard() {
  const items = [
    { label: "AWS EC2", status: "running" },
    { label: "Docker", status: "running" },
    { label: "Nginx", status: "running" },
    { label: "Cloudflare", status: "running" },
    { label: "GitHub Actions", status: "running" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-cream-50 border border-ink-900/[0.06] p-7 col-span-full sm:col-span-1 lg:col-span-4 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-accent-500/10 flex items-center justify-center text-accent-600">
          <Server size={18} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-ink-400 font-mono">
            Cloud &amp; DevOps
          </p>
          <p className="font-medium text-ink-900">Owned, not outsourced</p>
        </div>
      </div>

      <ul className="space-y-2.5">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex items-center justify-between py-2 border-b border-ink-900/[0.05] last:border-0"
          >
            <span className="text-sm text-ink-700 font-mono">{it.label}</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent-600 font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-500"></span>
              </span>
              {it.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
