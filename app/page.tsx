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
      text: "Book an Appointment",
      url: "https://example.com/booking"
    },
    {
      id: 2,
      text: "Discover Our Services",
      url: "https://example.com/services"
    },
    {
      id: 3,
      text: "Contact Us on WhatsApp",
      url: "https://wa.me/5500000000000"
    }
  ],
  aboutSection: {
    title: "About the Salon",
    description: [
      "We are a high-end beauty salon dedicated to delivering unique experiences by combining technique, aesthetics, and personalized service. Every detail is carefully designed to provide comfort, sophistication, and results that enhance each client’s identity.",
      "Our team consists of highly qualified professionals who stay up to date with the latest beauty industry trends. We work with premium products and exclusive protocols, ensuring excellence, safety, and consistent results."
    ]
  },
  portfolioSection: {
    title: "Portfolio",
    description: "Image gallery showcasing the salon’s work",
    images: [
      {
        id: 1,
        alt: "Premium blonde hair result",
        src: "/portfolio-1.png"
      },
      {
        id: 2,
        alt: "Sophisticated hairstyle for special events",
        src: "/portfolio-2.png"
      },
      {
        id: 3,
        alt: "High-end hair treatment",
        src: "/portfolio-3.png"
      }
    ]
  },
  footer: {
    text: "© 2026 Only One. All rights reserved."
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
        <Header 
          title={siteData.header.title} 
          subtitle={siteData.header.subtitle} 
        />
        
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
