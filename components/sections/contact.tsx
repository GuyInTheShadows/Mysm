import type { Resume } from "@/content/resume";
import { CopyEmailButton } from "../copy-email-button";
import { IconGitHub, IconLinkedIn } from "../icons";
import { Contours } from "../patterns";
import { Reveal } from "../reveal";
import { Section } from "../section";

type ContactProps = {
  contact: Resume["contact"];
  identity: Resume["identity"];
};

export function Contact({ contact, identity }: ContactProps) {
  const github = identity.links.find((l) => l.label === "GitHub");
  const linkedin = identity.links.find((l) => l.label === "LinkedIn");

  return (
    <Section id="contact" label="07 - Contact" title={contact.heading}>
      <Reveal>
        <div
          className="relative overflow-hidden border border-border bg-[var(--tint-peach)]"
          style={{
            borderRadius: "var(--radius-card)",
            padding: "clamp(32px, 6vw, 72px)",
          }}
        >
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-[80%] max-w-[700px]"
            aria-hidden="true"
          >
            <Contours phase={2} />
          </div>

          <div className="relative z-[1]">
            <p className="max-w-[45ch] text-muted">{contact.line}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-tight tracking-[-0.03em] text-text underline decoration-accent decoration-2 underline-offset-[6px] transition-[text-decoration-thickness] hover:decoration-[3px]"
              >
                {identity.email}
              </a>
              <CopyEmailButton email={identity.email} />
            </div>
            {identity.phone ? (
              <p className="mt-6">
                <a
                  href={`tel:${identity.phone.replace(/\s+/g, "")}`}
                  className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold tracking-[-0.02em] text-text underline decoration-accent decoration-2 underline-offset-[6px] transition-[text-decoration-thickness] hover:decoration-[3px]"
                >
                  {identity.phone}
                </a>
              </p>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-4">
              {github ? (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconGitHub aria-hidden="true" />
                  GitHub
                </a>
              ) : null}
              {linkedin ? (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconLinkedIn aria-hidden="true" />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
