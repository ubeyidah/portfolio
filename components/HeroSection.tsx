import Image from "next/image";
import Link from "next/link";




export default function HeroSection() {
  return (
    <section className="pt-8 pb-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpg"
            alt="Portrait of Ubeyid Oumer"
            width={60}
            height={60}
            className="rounded-full aspect-square object-top object-cover"
          />

          <div className="flex-1">
            <h1 className="text-lg font-bold">Ubeyid Oumer</h1>
            <p className="text-muted-foreground text-sm">Self-Taught Developer</p>
          </div>
        </div>


        <div>
          <Link
            href="#contact"
            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md hover:bg-primary/20 transition-colors"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>

    </section>
  );
}
