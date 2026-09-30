import type { Resume } from "@/content/resume";
import { Reveal } from "../reveal";
import { Section } from "../section";

type AiProps = {
  ai: Resume["ai"];
};

export function Ai({ ai }: AiProps) {
  return (
    <Section id="ai" label="05 - AI" title="AI-Assisted Development">
      <Reveal>
        <div
          className="border border-border bg-[var(--tint-sand)] p-8 md:p-10"
          style={{ borderRadius: "var(--radius-card)" }}
        >
          <p className="max-w-[65ch] text-[clamp(1.375rem,2.6vw,1.875rem)] font-medium leading-[1.35] text-text">
            {ai.intro}
          </p>
          <div className="mt-10 grid gap-0 md:grid-cols-2">
            {ai.items.map((item, index) => (
              <div
                key={item.lead}
                className={`border-border py-5 md:px-6 md:py-6 ${
                  index > 0 ? "border-t md:border-t-0" : ""
                } ${index % 2 === 1 ? "md:border-l" : ""} ${
                  index >= 2 ? "md:border-t" : ""
                }`}
              >
                <p className="max-w-[55ch] text-muted">
                  <strong className="font-semibold text-text">
                    {item.lead}
                  </strong>{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
