import Image from 'next/image';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col items-center text-center space-y-4 mb-8 pt-12">
      <div className="w-24 h-24 rounded-full bg-zinc-900 border border-accent flex items-center justify-center mb-2 overflow-hidden relative">
        <Image 
          src="/logo.png" 
          alt="Beauty Salon Logo" 
          fill
          className="object-cover p-2"
        />
      </div>
      <div>
        <h1 className="text-3xl font-medium tracking-wide text-foreground font-serif">{title}</h1>
        <p className="text-sm text-muted mt-2 uppercase tracking-widest font-light">{subtitle}</p>
      </div>
    </header>
  );
}
