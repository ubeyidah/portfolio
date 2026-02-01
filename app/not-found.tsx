import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { Compass01Icon, Home01Icon, PlusSignIcon } from "@hugeicons/core-free-icons";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center py-12">
      <div className="absolute inset-x-0 top-1/2 h-px bg-border/70" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-4xl items-center justify-center border-x border-border/70 px-4">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border/70 bg-linear-to-br from-background to-muted/20 px-6 py-12 md:px-10">
          <HugeiconsIcon icon={PlusSignIcon} className="absolute -left-3 -top-3 size-6 text-muted-foreground/70" />
          <HugeiconsIcon icon={PlusSignIcon} className="absolute -right-3 -top-3 size-6 text-muted-foreground/70" />
          <HugeiconsIcon icon={PlusSignIcon} className="absolute -left-3 -bottom-3 size-6 text-muted-foreground/70" />
          <HugeiconsIcon icon={PlusSignIcon} className="absolute -right-3 -bottom-3 size-6 text-muted-foreground/70" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_80%_at_25%_0%,--theme(--color-foreground/.06),transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-full border-l border-dashed border-border/60" />

          <Empty className="relative">
            <EmptyHeader>
              <EmptyTitle className="font-black font-mono text-7xl md:text-8xl">404</EmptyTitle>
              <EmptyDescription className="text-balance text-sm md:text-base">
                The page you&apos;re looking for might have been moved or doesn&apos;t exist.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button asChild>
                  <Link href="/">
                    <HugeiconsIcon icon={Home01Icon} size={16} /> Go Home
                  </Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/blog">
                    <HugeiconsIcon icon={Compass01Icon} size={16} /> Explore
                  </Link>
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    </main>
  );
}
