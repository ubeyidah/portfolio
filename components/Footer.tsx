export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="border-t" />
        <div className="flex flex-col gap-6 px-4 py-6">
          <div className="flex items-center justify-center">
            <span className="text-base text-muted-foreground">
              © {new Date().getFullYear()} Ubeyidah. All rights reserved.
            </span>
          </div>

          <div className="h-10 border-y border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />
        </div>

        <div className="relative flex h-full items-center justify-center py-10">
          <div className="group relative w-full max-w-4xl overflow-hidden px-6 py-10">
            <div className="flex items-center gap-6">
              <div className="h-12 flex-1 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />
              <h3 aria-hidden="true" className="font-serif text-center text-5xl font-black tracking-tight text-foreground/10 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] md:text-6xl">
                I USE ARCH BTW
              </h3>
              <div className="h-12 flex-1 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
