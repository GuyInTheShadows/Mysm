import type { Img, Resume } from "@/content/resume";
import { IconDownload } from "../icons";
import { Contours } from "../patterns";
import { Portrait } from "../portrait";
import { Reveal } from "../reveal";

type HeroProps = {
  hero: Resume["hero"];
  photo?: Img;
};

function Subheadline({ text }: { text: string }) {
  const highlight = "Vue and Next.js";
  const index = text.indexOf(highlight);
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <span className="hero-marker">{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}

export function Hero({ hero, photo }: HeroProps) {
  const withPhoto = Boolean(photo);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="section-pad relative min-h-[78svh] overflow-hidden pt-[clamp(88px,14vw,140px)]"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[70%] max-w-[900px]"
        aria-hidden="true"
      >
        <Contours phase={0} />
      </div>

      <div className="container-site relative">
        <Reveal>
          <div
            className={
              withPhoto
                ? "lg:grid lg:grid-cols-12 lg:items-center lg:gap-8"
                : undefined
            }
          >
            {photo ? (
              <div className="mb-6 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:mb-0 lg:flex lg:justify-end">
                <Portrait photo={photo} />
              </div>
            ) : null}

            <div
              className={
                withPhoto
                  ? "lg:col-span-9 lg:col-start-1 lg:row-start-1"
                  : undefined
              }
            >
              <p className="section-label mb-6 flex items-center gap-3">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {hero.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="text-[clamp(2.75rem,8.5vw,5.75rem)] font-bold leading-none tracking-[-0.045em] text-text"
              >
                {hero.headline}
              </h1>
              <p className="mt-8 max-w-[36ch] text-[clamp(1.25rem,2.4vw,1.625rem)] font-medium leading-[1.4] text-muted">
                <Subheadline text={hero.subheadline} />
              </p>
              <div className="hero-actions mt-10 flex flex-wrap gap-3">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="btn btn-secondary"
                  download
                >
                  <IconDownload aria-hidden="true" />
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
