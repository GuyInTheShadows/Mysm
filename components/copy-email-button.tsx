"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="copy-btn btn btn-secondary shrink-0 px-4 text-sm"
      onClick={onCopy}
      aria-live="polite"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
