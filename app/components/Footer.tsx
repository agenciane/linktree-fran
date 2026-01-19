interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="w-full py-8 text-center border-t border-white/5 mt-auto">
      <p className="text-xs text-muted font-light">{text}</p>
    </footer>
  );
}
