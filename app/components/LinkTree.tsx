import Link from 'next/link';

interface LinkItem {
  id: number;
  text: string;
  url: string;
}

interface LinkTreeProps {
  links: LinkItem[];
}

export default function LinkTree({ links }: LinkTreeProps) {
  return (
    <div className="w-full max-w-md flex flex-col gap-4 mb-12">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full px-6 py-4 text-center transition-all duration-300"
        >
          <div className="absolute inset-0 border transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent"></div>
          <span className="relative z-10 text-foreground font-light tracking-wide group-hover:text-accent transition-colors">
            {link.text}
          </span>
        </Link>
      ))}
    </div>
  );
}
