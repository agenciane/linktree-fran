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
      { id: 1, alt: "Portfolio Image 1", src: "/novasRobson/04367f26-e7bf-476c-928b-47c9c1f4e662.jpeg" },
      { id: 2, alt: "Portfolio Image 2", src: "/novasRobson/0b8d3b95-f1f7-4780-b0a3-8c8771a1bbd8.jpeg" },
      { id: 3, alt: "Portfolio Image 3", src: "/novasRobson/23d8f358-6833-43c7-9658-10c5b5cc3a53.jpeg" },
      { id: 4, alt: "Portfolio Image 4", src: "/novasRobson/3933c38e-7d55-47ac-b8f7-2d758ae2f73e.jpeg" },
      { id: 5, alt: "Portfolio Image 5", src: "/novasRobson/551cbc59-c123-4992-8c54-b5145a8aeff0.jpeg" },
      { id: 6, alt: "Portfolio Image 6", src: "/novasRobson/8d99330a-f37b-462e-8508-0625f55a7f7a.jpeg" },
      { id: 7, alt: "Portfolio Image 7", src: "/novasRobson/97b3073a-c6ce-4766-8f33-da372f622ecd.jpeg" },
      { id: 8, alt: "Portfolio Image 8", src: "/novasRobson/9847559e-3030-4991-98e8-f0529448b917.jpeg" },
      { id: 9, alt: "Portfolio Image 9", src: "/novasRobson/addc8b57-4438-4065-a5ad-eaecb58414e1.jpeg" },
      { id: 10, alt: "Portfolio Image 10", src: "/novasRobson/bd94c723-31aa-4b1c-88e4-26cce16d8e11.jpeg" },
      { id: 11, alt: "Portfolio Image 11", src: "/novasRobson/c812e59a-1c36-4117-a660-488f0f08f73b.jpeg" },
      { id: 12, alt: "Portfolio Image 12", src: "/novasRobson/d5b85951-89ae-433d-83bf-6bb3b72af66c.jpeg" }
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
