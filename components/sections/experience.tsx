import type { Resume } from "@/content/resume";
import { IconArrowUpRight } from "../icons";
import { Reveal } from "../reveal";
import { Section } from "../section";

type ExperienceProps = {
  experience: Resume["experience"];
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <Section id="experience" label="02 - Experience" title="Experience">
      <ol className="relative max-w-[900px]">
        {experience.map((entry, index) => (
          <Reveal
            key={`${entry.company}-${entry.dates}`}
            as="li"
            className="timeline-entry relative grid gap-4 pb-14 last:pb-0 md:grid-cols-[220px_1fr] md:gap-8"
            delay={Math.min(index, 4) * 70}
          >
            {index < experience.length - 1 ? (
              <span
                className="timeline-rail pointer-events-none absolute top-4 bottom-0 left-[5px] w-px bg-[var(--border-strong)] md:left-[236px]"
                aria-hidden="true"
              />
            ) : (
              <span
                className="timeline-rail pointer-events-none absolute top-4 left-[5px] h-3 w-px bg-[var(--border-strong)] md:left-[236px]"
                aria-hidden="true"
              />
            )}

            <div className="pl-8 md:pl-0">
              <span
                className={`absolute top-1 left-0 z-10 h-3 w-3 rounded-full md:left-[230px] ${
                  entry.current
                    ? "bg-accent shadow-[0_0_0_5px_var(--tint-peach)]"
                    : "border-2 border-[var(--border-strong)] bg-surface"
                }`}
                aria-hidden="true"
              />
              <p className="meta">{entry.dates}</p>
              {entry.roles.length === 1 ? (
                <p className="meta mt-2 hidden leading-snug md:block">
                  {entry.roles[0].title}
                </p>
              ) : null}
            </div>

            <div className="pl-8 md:pl-0">
              <h3 className="text-xl font-semibold tracking-[-0.01em] leading-snug text-text">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent-text)]"
                  >
                    {entry.company}
                    <IconArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  entry.company
                )}
                {entry.note ? (
                  <span className="text-muted"> ({entry.note})</span>
                ) : null}
                {entry.location ? (
                  <span className="text-muted">, {entry.location}</span>
                ) : null}
              </h3>

              {entry.roles.length > 1 ? (
                <ul className="mt-3 space-y-1">
                  {entry.roles.map((role) => (
                    <li key={role.title} className="text-sm text-muted">
                      <span className="font-semibold text-text">
                        {role.title}
                      </span>
                      <span className="meta ml-2">{role.dates}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="meta mt-2 md:hidden">{entry.roles[0].title}</p>
              )}

              <ul className="mt-5 space-y-3">
                {entry.bullets.map((bullet) => (
                  <li
                    key={`${bullet.lead ?? ""}${bullet.text.slice(0, 48)}`}
                    className="relative pl-5 text-[0.975rem] text-muted"
                  >
                    <span
                      className="absolute top-[0.55em] left-0 h-1.5 w-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {bullet.lead ? (
                      <strong className="font-semibold text-text">
                        {bullet.lead}{" "}
                      </strong>
                    ) : null}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
