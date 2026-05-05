import { Mail, ArrowUpRight } from "lucide-react";

export default function ContactCard() {
  return (
    <a
      href="mailto:mmunibrehman@gmail.com"
      className="group relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] p-7 col-span-full sm:col-span-1 lg:col-span-4 card-hover flex flex-col justify-between"
    >
      <div>
        <div className="w-10 h-10 rounded-2xl bg-accent-500/10 flex items-center justify-center text-accent-600">
          <Mail size={18} />
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-ink-400 font-mono">
          Get in touch
        </p>

        <p className="mt-2 font-serif text-3xl text-ink-900 leading-tight italic">
          Have a project in mind?
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-ink-900/[0.06]">
        <div className="flex items-center justify-between">
          <span className="text-sm text-ink-700 font-mono break-all">
            mmunibrehman<span className="text-accent-500">@</span>gmail.com
          </span>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink-900 text-cream-100 group-hover:bg-accent-500 group-hover:rotate-45 transition-all flex-shrink-0 ml-2">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}
