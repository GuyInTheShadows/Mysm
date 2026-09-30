import type { Resume } from "@/content/resume";
import { Reveal } from "../reveal";
import { Section } from "../section";

type EducationProps = {
  education: Resume["education"];
  languages: Resume["languages"];
};

export function Education({ education, languages }: EducationProps) {
  return (
    <Section
      id="education"
      label="06 - Education"
      title="Education & Languages"
    >
      <div className="grid max-w-[720px] gap-8 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="meta mb-2">Education</p>
            <p className="text-xl font-semibold tracking-[-0.01em] text-text">
              {education.degree}
            </p>
            <p className="mt-2 text-muted">{education.school}</p>
            <p className="meta mt-2">{education.dates}</p>
          </div>
        </Reveal>
        <Reveal delay={70}>
          <div>
            <p className="meta mb-2">Languages</p>
            <p className="text-text">{languages}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
