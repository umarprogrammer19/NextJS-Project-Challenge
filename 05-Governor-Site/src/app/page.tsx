import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <ImageSlider />
      <Courses />
      <Footer/>
    </main>
  );
}
