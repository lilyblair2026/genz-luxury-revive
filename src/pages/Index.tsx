import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Community from "@/components/Community";
import Learn from "@/components/Learn";
import Feed from "@/components/Feed";
import Events from "@/components/Events";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Community />
      <Learn />
      <Feed />
      <Events />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
