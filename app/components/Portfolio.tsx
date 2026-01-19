import Image from 'next/image';

interface PortfolioImage {
  id: number;
  alt: string;
  src: string;
}

interface PortfolioProps {
  title: string;
  description: string;
  images: PortfolioImage[];
}

export default function Portfolio({ title, description, images }: PortfolioProps) {
  return (
    <section className="w-full max-w-2xl px-6 mb-16 text-center">
      <h2 className="text-2xl font-serif mb-2 text-accent">{title}</h2>
      <p className="text-xs text-muted uppercase tracking-widest mb-8">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative aspect-square bg-zinc-900 border border-zinc-800 overflow-hidden group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-accent/10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
