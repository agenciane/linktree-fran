import Image from 'next/image';



export default function Header() {
  return (
    <header className="flex flex-col items-center text-center space-y-4 mb-4 pt-12">
      <div className="mb-6">
        <Image 
          src="/logo-creative-beouty.webp" 
          alt="Beauty Salon Logo" 
          width={280}
          height={100}
          className="w-auto h-auto max-w-[280px]"
          priority
        />
      </div>
    </header>
  );
}
