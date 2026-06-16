import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

export function PageHeader({
  eyebrow,
  title,
  thaiTitle,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  thaiTitle?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-32 md:pt-40 pb-12 border-b border-border">
      <div className="container-narrow">
        <FadeIn>
          {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
          <h1 className="text-4xl md:text-6xl text-navy">{title}</h1>
          {thaiTitle && (
            <div className="thai mt-3 text-xl md:text-2xl text-crimson font-medium">
              {thaiTitle}
            </div>
          )}
          {description && (
            <p className="thai mt-5 max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
