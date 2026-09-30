import type { Resume } from "@/content/resume";
import { IconArrowUpRight } from "../icons";
import { TileMosaic } from "../patterns";
import { Reveal } from "../reveal";
import { Section } from "../section";

type WorkProps = {
  work: Resume["work"];
};

const cardTints = [
  "var(--tint-peach)",
  "var(--tint-sage)",
  "var(--tint-sand)",
] as const;

const chipTints = ["chip-peach", "chip-sage", "chip-sand"] as const;

export function Work({ work }: WorkProps) {
  const [featured, ...rest] = work;

  return (
    <Section id="work" label="03 - Work" title="Selected Work">
      <div className="grid gap-6">
        {featured ? (
          <Reveal>
            <WorkCard item={featured} tint={cardTints[0]} />
          </Reveal>
        ) : null}
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {rest.map((item, index) => (
            <Reveal
              key={item.title}
              className="h-full"
              delay={Math.min(index + 1, 4) * 70}
            >
              <WorkCard
                item={item}
                tint={cardTints[(index + 1) % cardTints.length]}
                showMosaic={item.title === "SliceGames"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WorkCard({
  item,
  tint,
  showMosaic = false,
}: {
  item: Resume["work"][number];
  tint: string;
  showMosaic?: boolean;
}) {
  return (
    <article
      className="work-card group relative flex h-full flex-col overflow-hidden p-8 md:p-10"
      style={{ background: tint }}
    >
      {showMosaic ? (
        <TileMosaic className="pointer-events-none absolute right-[-24px] bottom-[-24px] z-0 hidden sm:block" />
      ) : null}

      <div className="relative z-[1] flex h-full min-w-0 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-[-0.01em] text-text">
              {item.title}
            </h3>
            <p className="meta mt-2">{item.subtitle}</p>
          </div>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-[var(--accent-text)]"
              aria-label={`Open ${item.title}`}
            >
              <IconArrowUpRight
                className="out-link-arrow"
                aria-hidden="true"
              />
            </a>
          ) : null}
        </div>

        <p className="mt-5 text-muted">{item.description}</p>

        {item.beforeAfter && item.beforeAfter.length > 0 ? (
          <div
            className="mt-6 overflow-hidden border border-border p-1"
            style={{
              borderRadius: "var(--radius-table)",
              background:
                "color-mix(in srgb, var(--surface) 70%, transparent)",
            }}
          >
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="meta px-2 py-2 font-medium sm:px-3" scope="col">
                    <span className="sr-only">Layer</span>
                  </th>
                  <th className="meta px-2 py-2 font-medium sm:px-3" scope="col">
                    Before
                  </th>
                  <th className="meta px-1 py-2 font-medium" scope="col">
                    <span className="sr-only">to</span>
                  </th>
                  <th className="meta px-2 py-2 font-medium sm:px-3" scope="col">
                    After
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.beforeAfter.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="meta px-2 py-2 sm:px-3">{row.label}</td>
                    <td className="px-2 py-2 text-xs break-words text-muted sm:px-3">
                      {row.before}
                    </td>
                    <td
                      className="px-1 py-2 text-center text-[var(--accent-text)]"
                      aria-hidden="true"
                    >
                      →
                    </td>
                    <td className="px-2 py-2 text-xs font-medium break-words text-text sm:px-3">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {item.tags.map((tag, tagIndex) => (
            <li key={tag} className={`chip ${chipTints[tagIndex % 3]}`}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
