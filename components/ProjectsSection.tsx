import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, ExternalLink, LockIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { TechIcons } from "./icons/TechIcons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
  {
    "id": 1,
    "title": "DLog",
    "type": "web app",
    "description": "A minimalist daily reflection and self-improvement tracker. Built to help users capture daily memories, moods, and progress with discipline and intentionality. Features include quick log entry, mood tracking, tag-based organization, and insightful stats for growth.",
    "image": "/projects/dlog.png",
    "technologies": [
      {
        "name": "Next.js",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg",
        "url": "https://nextjs.org",
        "iconKey": "NextJs"
      },
      {
        "name": "TypeScript",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg",
        "url": "https://typescriptlang.org",
        "iconKey": "TypeScript"
      },
      {
        "name": "Tailwind CSS",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss-dark.svg",
        "url": "https://tailwindcss.com",
        "iconKey": "Tailwind"
      },
      {
        "name": "tRPC",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/trpcbun.svg",
        "url": "https://trpc.io",
        "iconKey": "Trpc"
      },
      {
        "name": "React Query",
        "icon": "https://example.com/icons/react-query.svg",
        "url": "https://tanstack.com/query",
        "iconKey": "ReactQuery"
      },
      {
        "name": "Prisma",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/prisma.svg",
        "url": "https://prisma.io",
        "iconKey": "Prisma"
      },
      {
        "name": "Shadcn/ui",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/shadcnui.svg",
        "url": "https://ui.shadcn.com",
        "iconKey": "Shadcn"
      },
      { name: "Better Auth", icon: "https://raw.githubusercontent.com/betterauth/betterauth/main/assets/betterauth-icon.svg", url: "https://better-auth.com", iconKey: "BetterAuth" },
      {
        "name": "Bun",
        "icon": "https://github.com/onemarc/tech-icons/raw/main/icons/bun.svg",
        "url": "https://bun.sh",
        "iconKey": "Bun"
      }
    ],
    "github": "https://github.com/ubeyidah/dlog",
    "githubPrivate": false,
    "live": "https://dlog.live",
    "livePrivate": false
  },
  {
    id: 2,
    title: "Clario",
    type: "web app",
    description: "A user-focused LMS that streamlines course creation, student enrollment, and day-to-day learning. Instructors can publish courses, manage rosters, and send notifications; students access interactive lessons, track progress, and view analytics to improve outcomes.",
    image: "/projects/clario.png",
    technologies: [
      { name: "Next.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg", url: "https://nextjs.org", iconKey: "NextJs" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg", url: "https://typescriptlang.org", iconKey: "TypeScript" },
      { name: "React Query", icon: "https://example.com/icons/react-query.svg", url: "https://tanstack.com/query", iconKey: "ReactQuery" },
      { name: "Tailwind CSS", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/tailwind-dark.svg", url: "https://tailwindcss.com", iconKey: "Tailwind" },
      { name: "Shadcn/ui", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/shadcnui.svg", url: "https://ui.shadcn.com", iconKey: "Shadcn" },
      { name: "PostgreSQL", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/postgresql.svg", url: "https://postgresql.org", iconKey: "PostgreSQL" },
      { name: "Prisma", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/prisma.svg", url: "https://prisma.io", iconKey: "Prisma" },
      { name: "Resend", icon: "https://raw.githubusercontent.com/resendlhq/resend/main/docs/static/resend-black.svg", url: "https://resend.com", iconKey: "Resend" },
      { name: "pnpm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/pnpm.svg", url: "https://pnpm.io", iconKey: "Pnpm" },
      { name: "Better Auth", icon: "https://raw.githubusercontent.com/betterauth/betterauth/main/assets/betterauth-icon.svg", url: "https://better-auth.com", iconKey: "BetterAuth" },
      { name: "Zod", icon: "https://raw.githubusercontent.com/0x7b3/zod-icons/main/zod.svg", url: "https://zod.dev", iconKey: "Zod" }
    ],
    github: "https://github.com/ubeyidah/clario",
    githubPrivate: false,
    live: "https://clario.pro.et",
    livePrivate: false
  },
  {
    id: 3,
    title: "Nviron",
    type: "library",
    description: "Lightweight, type-safe environment variable manager for modern JS/TS projects. Validates and safely accesses env variables with Zod.",
    image: "/projects/nviron.png",
    technologies: [
      { name: "Next.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nextjs-dark.svg", url: "https://nextjs.org", iconKey: "NextJs" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg", url: "https://typescriptlang.org", iconKey: "TypeScript" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg", url: "https://nodejs.org", iconKey: "NodeJS" },
      { name: "Zod", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/zod.svg", url: "https://zod.dev", iconKey: "Zod" },
      { name: "pnpm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/pnpm.svg", url: "https://pnpm.io", iconKey: "Pnpm" },
      { name: "Turborepo", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vercel.svg", url: "https://turbo.build", iconKey: "Turborepo" },
      { name: "Vitest", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/vitest.svg", url: "https://vitest.dev", iconKey: "Vitest" }
    ],
    github: "https://github.com/ubeyidah/nviron",
    githubPrivate: false,
    live: "https://nviron.vercel.app",
    livePrivate: false,
  },
  {
    id: 4,
    title: "UnitWise Ethiopia",
    type: "web app",
    description: "Grade 12 exam preparation platform for Ethiopian students. Study unit-wise lessons, practice past exams, take mock tests, and track learning progress.",
    image: "/projects/unit-wise-ethiopia.png",
    technologies: [
      { name: "React", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-dark.svg", url: "https://reactjs.org", iconKey: "React" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg", url: "https://nodejs.org", iconKey: "NodeJS" },
      { name: "Express.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/express.svg", url: "https://expressjs.com", iconKey: "Express" },
      { name: "MongoDB", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/mongodb.svg", url: "https://mongodb.com", iconKey: "MongoDB" },
      { name: "npm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/npm.svg", url: "https://npmjs.com", iconKey: "Npm" },
      { name: "React Native", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-native.svg", url: "https://reactnative.dev", iconKey: "ReactNative" }
    ],
    github: "https://github.com/ubeyidah/unit-wise-ethiopia",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  },
  {
    id: 5,
    title: "Contactify",
    type: "mobile app",
    description: "Contactify is an accessibility-focused mobile app for elderly users that displays contacts as large, photo-based cards. Users can easily recognize people visually and swipe to call, making everyday communication simple and stress-free.",
    image: "/projects/contactify.png",
    technologies: [
      { name: "React Native", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/react-native.svg", url: "https://reactnative.dev", iconKey: "ReactNative" },
      { name: "Expo", icon: "https://example.com/icons/expo.svg", url: "https://expo.dev", iconKey: "Expo" },
      { name: "TypeScript", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/typescript.svg", url: "https://typescriptlang.org", iconKey: "TypeScript" },
      { name: "NativeWind", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/tailwindcss.svg", url: "https://nativewind.dev", iconKey: "Tailwind" },
      { name: "npm", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/npm.svg", url: "https://npmjs.com", iconKey: "Npm" },
      { name: "Node.js", icon: "https://github.com/onemarc/tech-icons/raw/main/icons/nodejs.svg", url: "https://nodejs.org", iconKey: "NodeJS" }
    ],
    github: "https://github.com/ubeyidah/contactify",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  }
];



type ProjectsSectionProps = {
  showHeader?: boolean;
  showAllLink?: boolean;
  sectionClassName?: string;
};

export default function ProjectsSection({
  showHeader = true,
  showAllLink = true,
  sectionClassName,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className={cn(sectionClassName)}>
      <div className="mx-auto h-full max-w-5xl border-x">
        {showHeader && (
          <>
            <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
              <h2 className="text-3xl md:text-4xl font-bold">What I’m Building</h2>
              <p className="mb-5 text-base text-muted-foreground">
                Real-world projects with real users
              </p>
            </div>

            <BorderSeparator />
          </>
        )}

        <div className="grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "flex flex-col justify-between border-b",
                index === projects.length - 1 && "border-b-0"
              )}
            >
                <div className="flex items-center justify-between gap-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-foreground hover:text-primary"
                  >
                    <HugeiconsIcon
                      icon={ExternalLink}
                      size={18}
                      className="text-muted-foreground transition-transform rotate-0 group-hover:-rotate-45"
                    />
                    <h3 className="font-heading font-medium text-lg tracking-wider">
                      {project.title}
                    </h3>
                  </a>
                  <Badge variant="secondary" className="rounded-full capitalize bg-border/40">
                    {project.type}
                  </Badge>
                </div>

                <div className="flex flex-col md:flex-row md:items-stretch">
                  <div className="relative overflow-hidden md:w-96 md:shrink-0 border-b md:border-b-0 md:border-r border-border/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={520}
                      height={320}
                      className="h-64 w-full object-cover md:h-full"
                      sizes="(min-width: 768px) 384px, 100vw"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <p className="text-muted-foreground leading-relaxed text-base p-4">
                      {project.description}
                    </p>
                    <div className="border-t">
                      <div className="flex">
                        <a
                          href={project.githubPrivate ? undefined : project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={
                            project.githubPrivate
                              ? `${project.title} GitHub repository is private`
                              : `View ${project.title} on GitHub`
                          }
                          className={cn(
                            "flex items-center gap-2 w-full h-full bg-background text-sm font-medium transition-colors py-2 border-r pl-4",
                            project.githubPrivate
                              ? "cursor-not-allowed opacity-60"
                              : "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                          )}
                          tabIndex={project.githubPrivate ? -1 : 0}
                          aria-disabled={project.githubPrivate}
                        >
                          <HugeiconsIcon icon={project.githubPrivate ? LockIcon : Github01Icon} size={16} />
                          {project.githubPrivate ? "Private" : "GitHub"}
                        </a>

                        <a
                          href={!project.live || project.livePrivate ? undefined : project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={
                            !project.live || project.livePrivate
                              ? `${project.title} live site is private or unavailable`
                              : `View ${project.title} live site`
                          }
                          className={cn(
                            "flex items-center gap-2 w-full h-full bg-background text-sm font-medium transition-colors py-2 pl-4",
                            !project.live || project.livePrivate
                              ? "cursor-not-allowed opacity-60"
                              : "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                          )}
                          tabIndex={!project.live || project.livePrivate ? -1 : 0}
                          aria-disabled={!project.live || project.livePrivate}
                        >
                          <HugeiconsIcon icon={!project.live || project.livePrivate ? LockIcon : ExternalLink} size={16} />
                          {!project.live || project.livePrivate ? "Private" : "Live Site"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t">
                  <div className="flex w-full max-w-none flex-wrap items-center gap-x-3 gap-y-2 divide-x divide-border/60 px-3 stripe-bg-10">
                    {project.technologies.map((tech) => {
                      if (tech.iconKey && TechIcons[tech.iconKey as keyof typeof TechIcons]) {
                        const IconComponent = TechIcons[tech.iconKey as keyof typeof TechIcons];
                        return (
                          <a
                            key={tech.name}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center border-l border-r border-muted/50 bg-background px-2 transition-colors hover:bg-accent"
                            title={tech.name}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        );
                      }
                    })}
                  </div>
                </div>
            </div>
          ))}
        </div>

        {showAllLink && (
          <div className="border-t px-4 py-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all projects
              <HugeiconsIcon icon={ExternalLink} size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative inset-x-0 h-px w-full border-b", className)} />
  );
}
