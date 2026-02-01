import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
  Email,
  TelegramIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const emailUser = "ubeyidah";
const emailDomain = "gmail.com";
const emailAddress = `${emailUser}@${emailDomain}`;

const contactItems = [
  {
    icon: Email,
    label: "Email",
    value: `${emailUser} [at] ${emailDomain}`,
    href: `mailto:${emailAddress}`,
    size: "large", // spans 2 columns and 2 rows
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    icon: Github01Icon,
    label: "GitHub",
    value: "ubeyidah",
    href: "https://github.com/ubeyidah",
    size: "small",
    gradient: "from-gray-500/5 to-slate-500/5",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    value: "ubeyidahh",
    href: "https://linkedin.com/in/ubeyidahh",
    size: "small",
    gradient: "from-blue-600/5 to-blue-800/5",
  },
  {
    icon: NewTwitterIcon,
    label: "X (Twitter)",
    value: "ubeyidah",
    href: "https://x.com/ubeyidah",
    size: "small",
    gradient: "from-gray-500/5 to-gray-600/5",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "ubeyidah",
    href: "https://t.me/ubeyidah",
    size: "small",
    gradient: "from-blue-500/5 to-blue-600/5",
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
          <h2 className="text-2xl md:text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="mb-5 text-base text-muted-foreground">
            Reach out through email or find me on social media
          </p>
        </div>

        <BorderSeparator />

        <div className="grid md:grid-cols-3">
          {contactItems.map((contact, index) => {
            const isLarge = contact.size === "large";
            const isMiddle = contact.label === "X (Twitter)";

            return (
              <Box
                key={contact.label}
                icon={contact.icon}
                title={contact.label}
                value={contact.value}
                href={contact.href}
                hoverClassName={isMiddle ? "hover:bg-secondary/5" : "hover:bg-secondary/10"}
                description={
                  contact.label === "Email"
                    ? "I respond to all emails within 24 hours."
                    : contact.label === "GitHub"
                      ? "See my latest work and contributions."
                      : contact.label === "LinkedIn"
                        ? "Connect with me professionally."
                        : contact.label === "X (Twitter)"
                          ? "Follow updates and short thoughts."
                          : "Reach out quickly for a chat."
                }
                className={cn(
                  isLarge ? "md:col-span-2" : "",
                  index === 1 ? "md:col-start-3" : "",
                  contact.size === "small" ? "md:col-span-1" : ""
                )}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative inset-x-0 h-px w-full border-b", className)} />
  );
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: typeof Email;
  title: string;
  description: string;
  value: string;
  href: string;
  hoverClassName?: string;
};

function Box({
  title,
  description,
  value,
  href,
  hoverClassName,
  className,
  icon: Icon,
}: ContactBox) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden border-b transition-colors md:border-r md:border-b-0",
        hoverClassName,
        className
      )}
    
    >
      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.08]">
        <HugeiconsIcon
          icon={Icon}
          size={72}
          className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
        />
      </div>

      <div className="flex items-center gap-x-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
        <HugeiconsIcon icon={Icon} size={18} className="text-muted-foreground" />
        <h4 className="font-heading font-medium text-lg tracking-wider">
          {title}
        </h4>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-12">
        <span className="font-medium font-mono text-sm tracking-wide">
          {value}
        </span>
      </div>
      <div className="border-t p-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </a>
  );
}
