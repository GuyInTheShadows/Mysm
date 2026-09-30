import type { Resume } from "@/content/resume";
import { Reveal } from "../reveal";
import { Section } from "../section";

type SkillsProps = {
  skills: Resume["skills"];
};

const chipTints = ["chip-peach", "chip-sage", "chip-sand"] as const;

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" label="04 - Skills" title="Skills">
      <div className="flex max-w-[900px] flex-col gap-8">
        {skills.map((group, index) => (
          <Reveal key={group.label} delay={Math.min(index, 4) * 70}>
            <div>
              <p className="meta mb-3">{group.label}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className={`chip ${chipTints[index % 3]}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
