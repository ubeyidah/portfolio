import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, NewTwitterIcon, TelegramIcon } from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-muted/40 pt-8 pb-6">
      <div className="footer-lines" aria-hidden="true">
        <span className="footer-line footer-line--1" />
        <span className="footer-line footer-line--2" />
      </div>

      <div className="absolute inset-x-6 -top-4 flex items-center justify-between text-muted-foreground/70">
        <span className="footer-plus" aria-hidden="true" />
        <span className="footer-plus" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Ubeyidah. All rights reserved.</span>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ubeyidah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <HugeiconsIcon icon={Github01Icon} size={16} />
          </a>
          <a
            href="https://x.com/ubeyidah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="X"
          >
            <HugeiconsIcon icon={NewTwitterIcon} size={16} />
          </a>
          <a
            href="https://t.me/ubeyidah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Telegram"
          >
            <HugeiconsIcon icon={TelegramIcon} size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
