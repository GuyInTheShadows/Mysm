import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  title,
  children,
  className = "",
}: SectionProps) {
  const titleId = `${id}-title`;
  const match = label.match(/^(\d+)\s*[---]\s*(.+)$/);
  const num = match?.[1];
  const labelText = match?.[2] ?? label;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`section-pad ${className}`}
    >
      <div className="container-site">
        <div className="mb-12 max-w-[720px]">
          <p className="section-label mb-3">
            {num ? <span className="section-label-num">{num}</span> : null}
            {labelText}
          </p>
          <h2
            id={titleId}
            className="text-[clamp(1.875rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
