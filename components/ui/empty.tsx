import * as React from "react";
import { cn } from "@/lib/utils";

type EmptyProps = React.ComponentProps<"div">;

type EmptyTitleProps = React.ComponentProps<"h2">;

type EmptyDescriptionProps = React.ComponentProps<"p">;

export function Empty({ className, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn("flex flex-col items-center text-center", className)}
      {...props}
    />
  );
}

export function EmptyHeader({ className, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    />
  );
}

export function EmptyTitle({ className, ...props }: EmptyTitleProps) {
  return (
    <h2
      data-slot="empty-title"
      className={cn("text-4xl font-semibold", className)}
      {...props}
    />
  );
}

export function EmptyDescription({ className, ...props }: EmptyDescriptionProps) {
  return (
    <p
      data-slot="empty-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function EmptyContent({ className, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty-content"
      className={cn("mt-6 flex items-center justify-center", className)}
      {...props}
    />
  );
}
