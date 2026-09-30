import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="section-label mb-4">404</p>
      <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-[-0.03em] text-text">
        Page not found
      </h1>
      <p className="mt-4 max-w-[36ch] text-muted">
        That page does not exist. Head back to the resume.
      </p>
      <Link href="/" className="btn btn-primary mt-10">
        Back home
      </Link>
    </main>
  );
}
