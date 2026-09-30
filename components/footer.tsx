import type { Resume } from "@/content/resume";

type FooterProps = {
  identity: Resume["identity"];
};

export function Footer({ identity }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container-site flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {identity.name}
        </p>
        <p>
          Also available as a{" "}
          <a
            href={identity.resumeFile}
            className="font-medium text-[var(--accent-text)] underline-offset-2 hover:underline"
            download
          >
            Word resume
          </a>
        </p>
      </div>
    </footer>
  );
}
