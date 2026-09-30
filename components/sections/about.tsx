import type { Resume } from "@/content/resume";
import { Reveal } from "../reveal";
import { Section } from "../section";

type AboutProps = {
  about: Resume["about"];
  stats: Resume["stats"];
};

export function About({ about, stats }: AboutProps) {
  return (
    <Section id="about" label="01 - About" title="Summary">
      <Reveal>
        <p className="prose-body text-text">{about.summary}</p>
      </Reveal>
      <Reveal delay={70}>
        <div
          className="mt-12 grid grid-cols-2 overflow-hidden border border-border bg-surface shadow-[var(--shadow-sm)] md:grid-cols-4"
          style={{ borderRadius: "var(--radius-card)" }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 ${
                index % 2 === 1
                  ? "border-l border-border"
                  : index > 0
                    ? "border-t border-border md:border-t-0 md:border-l"
                    : ""
              } ${index >= 2 ? "border-t md:border-t-0" : ""} ${
                index === 2 ? "md:border-l" : ""
              }`}
            >
              <p className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-none text-[var(--accent-text)]">
                {stat.value}
              </p>
              <p className="meta mt-3 max-w-[16ch]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
