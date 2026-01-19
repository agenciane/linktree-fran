interface AboutSectionProps {
  title: string;
  description: string[];
}

export default function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section className="w-full max-w-2xl px-6 mb-12 text-center text-foreground">
      <h2 className="text-2xl font-serif mb-6 text-accent">{title}</h2>
      <div className="space-y-4">
        {description.map((paragraph, index) => (
          <p key={index} className="text-sm font-light leading-relaxed text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
