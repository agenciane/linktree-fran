import Header from './components/Header';
import LinkTree from './components/LinkTree';
import AboutSection from './components/AboutSection';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

// Data from JSON spec
const siteData = {
  header: {
    title: "Beauty Salon Name",
    subtitle: "Beauty, exclusivity, and sophistication in every detail"
  },
  links: [
    {
      id: 1,
      text: "O salão",
      url: "https://creativebeauty.com.br/"
    },
    {
      id: 2,
      text: "Cursos",
      url: "https://wa.me/551197237917"
    },
    {
      id: 3,
      text: "Realizar Agendamento",
      url: "https://wa.me/5511966440761"
    },
    {
      id: 4,
      text: "RS Academy ",
      url: "https://wa.me/5511966440761"
    },
    {
      id: 5,
      text: "Suporte Curso",
      url: "https://wa.me/554187218018"
    },
    {
      id: 6,
      text: "Parcerias",
      url: "https://wa.me/5511971882629"
    }
  ],
  aboutSection: {
    title: "Sobre nós",
    description: [
     "Robson Souza hair Style, visagista, empresário e educador, com mais de 20 anos de atuação no mercado da beleza.",
     "Fundador do Creative Beauty by Robson Souza, é reconhecido por seu trabalho em coloração, loiros e imagem profissional, atendendo um público exigente e de alto padrão.",
     "Além da atuação no salão, Robson também se destaca como mentor de profissionais da beleza, desenvolvendo formações e mentorias focadas em técnica, posicionamento e crescimento profissional.",
     "Sua trajetória é marcada por excelência, visão estratégica e construção de autoridade, consolidando seu nome como referência no setor."
    ]
  },
  portfolioSection: {
    title: "Portfolio",
    description: "Veja nosso trabalho",
    images: [
      { id: 1, alt: "Portfolio Image 1", src: "/novasRobson/IMG_0007.JPG" },
      { id: 2, alt: "Portfolio Image 2", src: "/novasRobson/IMG_6161.JPG" },
      { id: 3, alt: "Portfolio Image 3", src: "/novasRobson/IMG_7983.JPG" },
      { id: 4, alt: "Portfolio Image 4", src: "/novasRobson/IMG_8005.JPG" },
      { id: 5, alt: "Portfolio Image 5", src: "/novasRobson/IMG_8029.JPG" },
      { id: 6, alt: "Portfolio Image 6", src: "/novasRobson/IMG_8095.JPG" },
      { id: 7, alt: "Portfolio Image 7", src: "/novasRobson/IMG_8862.JPG" },
      { id: 8, alt: "Portfolio Image 8", src: "/novasRobson/IMG_9192.JPG" },
      { id: 9, alt: "Portfolio Image 9", src: "/novasRobson/IMG_9993.JPG" },
      { id: 10, alt: "Portfolio Image 10", src: "/novasRobson/IMG_9996.JPG" }
    ]
  },
  footer: {
    text: "© 2026 Only One. Todos os direitos reservados."
  }
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background text-foreground overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="z-10 w-full max-w-3xl flex flex-col items-center px-4">
        <Header />
        
        <LinkTree links={siteData.links} />
        
        <AboutSection 
          title={siteData.aboutSection.title} 
          description={siteData.aboutSection.description} 
        />
        
        <Portfolio 
          title={siteData.portfolioSection.title} 
          description={siteData.portfolioSection.description} 
          images={siteData.portfolioSection.images} 
        />
        
        <Footer text={siteData.footer.text} />
      </div>
    </main>
  );
}
