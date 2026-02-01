import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Linkedin01Icon, NewTwitterIcon, Email, ArrowRight01Icon, TelegramIcon } from "@hugeicons/core-free-icons";

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
    <section id="contact" className="py-6 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-1 font-sans italic">Let&apos;s Connect</h2>
      <p className="text-muted-foreground mb-8">Reach out through email or find me on social media</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
        {contactItems.map((contact, index) => {
          const isLarge = contact.size === "large";

          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative overflow-hidden rounded-2xl border bg-linear-to-br ${contact.gradient}
                hover:shadow-lg transition-all duration-500 ease-out
                ${isLarge ? "md:col-span-2" : ""}
                ${index === 1 ? "md:col-start-3" : ""}
                ${contact.size === "small" ? "md:col-span-1" : ""}
              `}
            >
              <div className="relative p-4 md:p-6 h-full min-h-40 flex flex-col justify-between">
                {/* Background Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <HugeiconsIcon
                    icon={contact.icon}
                    size={isLarge ? 80 : 60}
                    className="transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {contact.value}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">
                    Contact
                  </span>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      className="text-muted-foreground/50 group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
