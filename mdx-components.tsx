import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-6 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8 mb-3" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2" {...props} />
    ),
    p: (props) => (
      <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
    ),
    a: (props) => (
      <a className="text-primary hover:underline" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-primary/40 pl-4 italic text-muted-foreground my-6"
        {...props}
      />
    ),
    code: (props) => (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm" {...props} />
    ),
    pre: (props) => (
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm my-6" {...props} />
    ),
    img: (props) => {
      const { src, alt, width, height } = props as {
        src?: string;
        alt?: string;
        width?: number | string;
        height?: number | string;
      };

      if (!src) return null;

      const resolvedWidth = Number(width) || 1200;
      const resolvedHeight = Number(height) || 630;

      return (
        <span className="full-bleed block my-8 -mx-4 overflow-hidden border">
          <Image
            src={src}
            alt={alt || ""}
            width={resolvedWidth}
            height={resolvedHeight}
            className="w-full h-auto"
          />
          <span className="block h-8 border-t border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />
        </span>
      );
    },
    ...components,
  };
}
