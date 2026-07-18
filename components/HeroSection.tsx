import Image from "next/image";
import Link from "next/link";




export default function HeroSection() {
  return (
    <section className="border-b bg-linear-to-br from-primary/10 via-background to-background">
      <div className="flex items-center justify-between gap-4 px-4 py-8">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpg"
            alt="Portrait of Ubeyidah"
            width={60}
            height={60}
            className="rounded-full aspect-square object-top object-cover"
            priority
            sizes="60px"
          />

          <div className="flex-1">
            <h1 className="text-lg font-bold">Ubeyidah</h1>
            <p className="text-muted-foreground text-sm">Self-Taught Developer · Building WaitKit</p>
          </div>
        </div>

        <div>
          <Link
            href="#contact"
            className="px-3 py-2 min-h-11 inline-flex items-center bg-primary/10 text-primary text-xs rounded-md hover:bg-primary/20 transition-colors"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
