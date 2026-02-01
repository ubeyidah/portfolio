"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { InputGroup, InputGroupInput, InputGroupButton, InputGroupAddon } from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiChat01Icon, ArrowUp01Icon, TelegramIcon, Linkedin01Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";

export default function FixedInput() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    closed: {},
    open: { transition: { staggerChildren: 0.1 } }
  };

  const innerVariants = {
    closed: { height: "auto" },
    open: { height: 250 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/95 to-transparent pointer-events-none" />

      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={containerVariants}
        className="relative mx-auto max-w-md px-4 pb-4"
      >
        <motion.div
          ref={ref}
          variants={innerVariants}
          className="relative border-x border-t bg-background/90 backdrop-blur-sm shadow-2xl flex flex-col justify-between"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-border/70" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-border/70" />
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative z-10 flex flex-col items-center justify-center p-6 text-center text-foreground"
            >
              <h2 className="text-xl font-bold mb-2">AI Chat Feature</h2>
              <p className="mb-4">This feature is under development. For direct contact, please use the available contact options.</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://t.me/ubeyidah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram profile"
                  className="flex h-11 w-11 items-center justify-center border border-border/60 bg-background/70 hover:bg-accent transition-colors"
                >
                  <HugeiconsIcon icon={TelegramIcon} size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/ubeyidahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center border border-border/60 bg-background/70 hover:bg-accent transition-colors"
                >
                  <HugeiconsIcon icon={Linkedin01Icon} size={18} />
                </a>
                <a
                  href="https://x.com/ubeyidah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X profile"
                  className="flex h-11 w-11 items-center justify-center border border-border/60 bg-background/70 hover:bg-accent transition-colors"
                >
                  <HugeiconsIcon icon={NewTwitterIcon} size={18} />
                </a>
              </div>
            </motion.div>
          )}
          {!open && <div></div>}
          <form onSubmit={handleSubmit}>
            <InputGroup className="relative z-10 bg-transparent border-t rounded-none">
              <InputGroupAddon>
                <HugeiconsIcon icon={AiChat01Icon} size={16} />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Ask a product or collaboration question..."
                value={message}
                onFocus={() => setOpen(true)}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Ask a product or collaboration question"
                className="bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
              />
              <InputGroupButton type="submit" size="sm" className="cursor-pointer" disabled={!message.trim()} aria-label="Send message">
                <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
              </InputGroupButton>
            </InputGroup>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
