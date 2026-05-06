import { Code2 } from "lucide-react";

export default function AvatarCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 p-7 col-span-full sm:col-span-1 lg:col-span-4 aspect-square lg:aspect-auto card-hover">
      {/* Animated terminal background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 grid-pattern" style={{ backgroundSize: "24px 24px", opacity: 0.4 }} />
      </div>

      {/* Glowing accent orb */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-12 w-56 h-56 bg-accent-500/15 rounded-full blur-3xl" />

      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-500" />
          </div>
          <span className="font-mono text-[10px] text-cream-100/40">~/muneeb</span>
        </div>

        <div className="mt-8 font-mono text-sm space-y-2">
          <p>
            <span className="text-accent-400">$</span>{" "}
            <span className="text-cream-100/60">whoami</span>
          </p>
          <p className="text-cream-100">muneeb_ur_rehman</p>
          <p className="mt-4">
            <span className="text-accent-400">$</span>{" "}
            <span className="text-cream-100/60">cat role.txt</span>
          </p>
          <p className="text-cream-100 leading-relaxed">
            Product Engineer · Ships end-to-end
          </p>
          <p className="mt-4">
            <span className="text-accent-400">$</span>{" "}
            <span className="text-cream-100/60">ls daily-stack/</span>
          </p>
          <p className="text-cream-100/80">
            laravel · next.js · aws<br />
            postgres · docker · ci-cd
          </p>
          <p className="mt-2 inline-flex items-center text-accent-400">
            <span className="text-accent-400">$</span>
            <span className="ml-2 inline-block w-2 h-4 bg-accent-500 animate-blink" />
          </p>
        </div>
      </div>
    </div>
  );
}
